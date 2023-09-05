import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Google from '@auth/core/providers/google';
import prisma, { getEnhancedPrisma } from '$lib/prisma';
import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

async function authorization({ event, resolve }) {
	const session = await event.locals.getSession();

	event.locals.userId = session?.user?.id;
	event.locals.db = getEnhancedPrisma(session?.user?.id);

	return resolve(event);
}

const authHandle = SvelteKitAuth({
	trustHost: true,
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
	],
	secret: AUTH_SECRET,
	session: {
		/**
		 * Using JWTs for sessions instead of database sessions
		 * to avoid loading the database on every request.
		 */
		strategy: 'jwt'
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			// In the future we can do stuff like this here too: (await isBlacklistedEmail(token.email))

			if (!token.email) {
				return {};
			}

			if (user) {
				token.userId = user.id;
			}

			return token;
		},
		session: async ({ session, token }) => {
			// @ts-expect-error - TODO: Fix this
			session.user.id = token.sub;

			return session;
		}
	}
});

export const handle = sequence(authHandle, authorization);

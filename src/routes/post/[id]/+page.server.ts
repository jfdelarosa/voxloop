import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	return {
		streamed: {
			post: locals.db.post.findUnique({
				include: {
					author: true
				},
				where: {
					id: params.id
				}
			}),
			votes: locals.db.vote.findMany({
				where: {
					postId: params.id
				},
				include: {
					user: true
				}
			})
		}
	};
};

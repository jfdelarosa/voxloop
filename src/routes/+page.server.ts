import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		if (!locals.userId) {
			return;
		}

		const data = await request.formData();
		const title = data.get('title') as string;
		const content = data.get('content') as string;

		if (!title) {
			return fail(400, {
				message: 'Title is required'
			});
		}

		if (!content) {
			return fail(400, {
				message: 'Content is required'
			});
		}

		try {
			const post = await locals.db.post.create({
				data: {
					title,
					content,
					published: true,
					author: {
						connect: {
							id: locals.userId
						}
					}
				}
			});

			return { post };
		} catch (error: unknown) {
			console.log(error);

			return fail(400, {
				message: 'Unknown error'
			});
		}
	}
} satisfies Actions;

export const load: PageServerLoad = ({ locals }) => {
	return {
		streamed: {
			posts: locals.db.post.findMany({
				include: {
					_count: {
						select: {
							votes: true
						}
					}
				}
			})
		}
	};
};

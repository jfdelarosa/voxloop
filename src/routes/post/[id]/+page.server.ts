import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { superValidate, setError } from 'sveltekit-superforms/server';
import { CommentCreateSchema } from '@zenstackhq/runtime/zod/models';

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, CommentCreateSchema);

		if (!form.data.content) {
			return setError(form, 'content', 'The comment cannot be empty');
		}

		if (!form.valid || !form.data.content) {
			return fail(400, {
				form
			});
		}

		await event.locals.db.comment.create({
			data: {
				content: form.data.content,
				published: true,
				author: {
					connect: {
						id: event.locals.session.user?.id
					}
				},
				post: {
					connect: {
						id: event.params.id
					}
				}
			}
		});

		return {
			form
		};
	}
};

export const load: PageServerLoad = ({ locals, params }) => {
	return {
		form: superValidate(CommentCreateSchema),
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
				include: {
					user: true
				},
				where: {
					postId: params.id
				}
			}),
			comments: locals.db.comment.findMany({
				include: {
					author: true
				},
				where: {
					postId: params.id
				}
			})
		}
	};
};

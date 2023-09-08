<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { CommentCreateSchema } from '@zenstackhq/runtime/zod/models';
	import type { Prisma } from '@prisma/client';
	import Comment from '$lib/components/partials/comments/comment.svelte';
	import CommentsForm from '$lib/components/partials/comments/comments-form.svelte';

	export let form: SuperValidated<typeof CommentCreateSchema>;
	export let comments: Prisma.CommentGetPayload<{
		include: {
			author: true;
		};
	}>[];
</script>

<div>
	<h3 class="font-semibold">Comments</h3>
	<div class="mb-4 divide-y divide-slate-200">
		{#each comments as comment}
			<Comment {comment} />
		{/each}
	</div>
	<CommentsForm {form} />
</div>

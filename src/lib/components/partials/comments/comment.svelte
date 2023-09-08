<script lang="ts">
	import type { Prisma } from '@prisma/client';

	import { getRelativeTime } from '$lib/helpers/time';
	import Avatar from '$lib/components/avatar/avatar.svelte';

	export let comment: Prisma.CommentGetPayload<{
		include: {
			author: true;
		};
	}>;
</script>

<div class="flex gap-4 py-8">
	<Avatar user={comment.author} />
	<div class="space-y-2">
		<div class="space-x-4 text-sm">
			<span class="font-medium">{comment.author.name}</span>
			<span class="text-slate-500">{getRelativeTime(comment.createdAt)}</span>
		</div>
		<div>{comment.content}</div>
	</div>
</div>

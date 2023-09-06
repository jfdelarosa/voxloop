<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import type { Post } from '@prisma/client';

	export let post: Post;

	const dispatch = createEventDispatcher();
</script>

<div class="flex gap-6 py-6">
	<Button variant="outline" on:click={() => dispatch('vote', { id: post.id })}>
		{post._count.votes}
	</Button>

	<a href="/post/{post.id}" class="flex-1">
		<div class="text-lg font-semibold">
			{post.title}
		</div>

		<div>
			{post.content}
		</div>
	</a>
</div>

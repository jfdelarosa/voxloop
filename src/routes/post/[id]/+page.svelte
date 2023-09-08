<script lang="ts">
	import type { PageData } from './$types';
	import Avatar from '$lib/components/avatar/avatar.svelte';
	import Comments from '$lib/components/partials/comments/comments.svelte';

	export let data: PageData;
</script>

<div class="space-y-12">
	{#await data.streamed.post}
		<p>Loading...</p>
	{:then post}
		{#if post}
			<div class="space-y-4">
				<h1 class="text-3xl font-bold">{post.title}</h1>
				<p>{post.content}</p>

				<div class="flex items-center gap-4">
					<Avatar user={post.author} />
					<span class="font-medium">
						{post.author.name}
					</span>
				</div>
			</div>
		{:else}
			<p>No post found.</p>
		{/if}
	{/await}

	{#await data.streamed.votes}
		<p>Loading...</p>
	{:then votes}
		{#each votes as vote}
			<Avatar user={vote.user} />
		{/each}
	{/await}

	{#await data.streamed.comments}
		<p>Loading...</p>
	{:then comments}
		<Comments form={data.form} {comments} />
	{/await}
</div>

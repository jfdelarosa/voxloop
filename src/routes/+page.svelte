<script lang="ts">
	import type { PageData } from './$types';
	import Editor from '$lib/components/editor/editor.svelte';
	import Post from '$lib/components/preview/preview.svelte';

	export let data: PageData;

	async function vote({ detail }: { detail: { id: string } }) {
		console.log(detail);
	}
</script>

<div class="flex gap-12">
	<div class="flex-1 max-w-sm">
		<Editor />
	</div>

	<div class="flex-1 divide-y divide-solid">
		{#await data.streamed.posts}
			<p>Loading...</p>
		{:then posts}
			{#if posts.length === 0}
				<p>No posts found.</p>
			{:else}
				{#each posts as post}
					<Post {post} on:vote={vote} />
				{/each}
			{/if}
		{/await}
	</div>
</div>

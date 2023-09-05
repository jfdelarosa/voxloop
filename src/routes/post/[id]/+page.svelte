<script lang="ts">
	import type { PageData } from './$types';
	import * as Avatar from '$lib/components/ui/avatar';

	export let data: PageData;

	/**
	 * Get the first letter of the name and the last name
	 * @param name
	 */
	function getInitials(name: string) {
		name = name.split('@')[0];

		const [firstName, lastName = ''] = name.split(' ').join('.').split('.');

		return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
	}
</script>

{#await data.streamed.post}
	<p>Loading...</p>
{:then post}
	<div>
		<h1>{post.title}</h1>
		<p>{post.content}</p>

		<div class="flex items-center gap-4">
			<Avatar.Root>
				<Avatar.Image src={post.author.image} alt={post.author.name} />
				<Avatar.Fallback>
					{getInitials(post.author.name || post.author.email || 'User')}
				</Avatar.Fallback>
			</Avatar.Root>

			{post?.author.name}
		</div>
	</div>
{/await}

{#await data.streamed.votes}
	<p>Loading...</p>
{:then votes}
	{#each votes as vote}
		<div class="flex items-center gap-4">
			<Avatar.Root>
				<Avatar.Image src={vote.user.image} alt={vote.user.name} />
				<Avatar.Fallback>
					{getInitials(vote.user.name || vote.user.email || 'User')}
				</Avatar.Fallback>
			</Avatar.Root>

			{vote.user.name}
		</div>
	{/each}
{/await}

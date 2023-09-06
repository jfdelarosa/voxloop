<script lang="ts">
	import type { LayoutData } from './$types';
	import { signOut } from '@auth/sveltekit/client';
	import { showLoginDialog } from '$lib/stores/app';
	import LoginDialog from '$lib/components/dialogs/loginDialog.svelte';
	import { Button } from '$lib/components/ui/button';
	import { session } from '$lib/stores/user';
	import '../app.postcss';

	export let data: LayoutData;

	$: session.set(data?.session);
</script>

<LoginDialog bind:open={$showLoginDialog} />

<header>
	<nav class="container flex justify-between py-6 mx-auto">
		<a href="/" class="text-xl font-medium">VoxLoop</a>

		<div class="flex items-center gap-4">
			{#if $session}
				<strong>{$session?.user?.name ?? 'User'}</strong>

				<button on:click={() => signOut()} class="text-sm button">(Sign out)</button>
			{:else}
				<Button variant="outline" on:click={() => ($showLoginDialog = true)}>Log In</Button>
			{/if}
		</div>
	</nav>
</header>

<div class="container mx-auto">
	<slot />
</div>

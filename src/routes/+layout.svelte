<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<header>
	<nav class="container flex justify-between py-6 mx-auto">
		<a href="/" class="text-xl font-medium">VoxLoop</a>

		<div class="flex items-center gap-4">
			{#if $page.data.session}
				<strong>{$page.data.session.user?.name ?? 'User'}</strong>

				<button on:click={() => signOut()} class="text-sm button">(Sign out)</button>
			{:else}
				<button on:click={() => signIn('google')}>Sign In with Google</button>
			{/if}
		</div>
	</nav>
</header>

<div class="container mx-auto">
	<slot />
</div>

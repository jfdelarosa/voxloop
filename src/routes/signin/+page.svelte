<script lang="ts">
	import { browser } from '$app/environment';
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { session } from '$lib/stores/user';

	function handleAuth(authSession: any) {
		if (!browser) {
			return;
		}

		if (!authSession) {
			signIn('google');
			return;
		}

		session.set(authSession);

		window.close();
	}

	$: handleAuth($page.data.session);
</script>

<div class="fixed inset-0 z-50 bg-white" />

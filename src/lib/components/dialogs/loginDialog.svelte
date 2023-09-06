<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { popupCenter } from '$lib/helpers/popup';
	import { session } from '$lib/stores/user';
	export let open: boolean = false;

	session.subscribe((value) => {
		if (open && value) {
			open = false;
		}
	});
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Login to VoxLoop</Dialog.Title>
			<Dialog.Description>
				Please log in to your VoxLoop account to start sharing your valuable feedback.
			</Dialog.Description>
		</Dialog.Header>

		<Button on:click={() => popupCenter('/signin', 'Sign in')}>Login With Google</Button>

		<Dialog.Footer>
			<Button
				variant="outline"
				on:click={() => {
					open = false;
				}}>Cancel</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

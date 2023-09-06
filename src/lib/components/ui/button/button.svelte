<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Size, type Variant } from '.';
	import { Loader2 } from 'lucide-svelte';

	type $$Props = ButtonPrimitive.Props & {
		variant?: Variant;
		size?: Size;
		loading?: boolean;
	};
	type $$Events = ButtonPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let loading: $$Props['loading'] = false;
	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	{...$$restProps}
	disabled={loading}
	on:click
	on:keydown
>
	{#if loading}
		<Loader2 class="w-4 h-4 mr-2 animate-spin" />
	{/if}
	<slot />
</ButtonPrimitive.Root>

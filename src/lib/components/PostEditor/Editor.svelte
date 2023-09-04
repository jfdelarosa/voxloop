<script lang="ts">
	import { createForm } from 'felte';

	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';

	const { form } = createForm({
		onSubmit: (values) => {
			console.log(values);
		}
	});
</script>

<form use:form>
	<Card.Root>
		<Card.Header>
			<Card.Title>Create New Feedback</Card.Title>
			<Card.Description>Tell us your idea, suggestion, or issue</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-6">
			<div class="grid w-full gap-1.5">
				<Label for="title">Title</Label>
				<Input id="title" name="title" />
			</div>

			<div class="grid w-full gap-1.5">
				<Label for="message">Description</Label>
				<Textarea id="message" name="message" />
				<p class="text-sm text-muted-foreground">
					Provide a detailed description of your feedback.
				</p>
			</div>
		</Card.Content>
		<Card.Footer>
			<Button>Send Feedback</Button>
		</Card.Footer>
	</Card.Root>
</form>

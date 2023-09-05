<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
</script>

<form method="post">
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
				<Label for="content">Description</Label>
				<Textarea id="content" name="content" />
				<p class="text-sm text-muted-foreground">
					Provide a detailed description of your feedback.
				</p>
			</div>
		</Card.Content>
		<Card.Footer>
			<Button type="submit">Send Feedback</Button>
		</Card.Footer>
	</Card.Root>
</form>

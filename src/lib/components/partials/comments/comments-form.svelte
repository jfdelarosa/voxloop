<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { CommentCreateSchema } from '@zenstackhq/runtime/zod/models';
	import * as Form from '$lib/components/ui/form';
	export let form: SuperValidated<typeof CommentCreateSchema>;
</script>

<Form.Root {form} schema={CommentCreateSchema} let:config let:enhance asChild>
	<form method="POST" use:enhance>
		<Form.Field {config} name="content">
			<Form.Item>
				<Form.Label>Post a comment</Form.Label>
				<Form.Textarea />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button>Submit</Form.Button>
	</form>
</Form.Root>

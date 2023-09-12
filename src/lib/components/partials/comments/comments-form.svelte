<script lang="ts">
	import * as dbModels from '@zenstackhq/runtime/zod/models';
	import * as Form from '$lib/components/ui/form';
	export let form: any;
</script>

<Form.Root {form} schema={dbModels?.CommentCreateSchema} let:config let:enhance asChild>
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

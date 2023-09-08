<script lang="ts">
	import type { Post } from '@prisma/client';

	export let post: Post;
</script>

<div class="flex gap-6 py-6">
	<a href="/post/{post.id}" class="flex-1">
		<div class="text-lg font-semibold">
			{post.title}
		</div>

		<div>
			{post.content}
		</div>
	</a>
</div>

<script lang="ts">
	import type { User } from '@prisma/client';
	import * as Avatar from '$lib/components/ui/avatar';

	export let user: User;

	/**
	 * Get the first letter of the name and the last name
	 * @param name
	 */
	function getInitials(name: string) {
		name = name.split('@')[0];

		const [firstName, lastName = ''] = name.split(' ').join('.').split('.');

		return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
	}
</script>

<Avatar.Root>
	<Avatar.Image src={user.image} alt={user.name} />
	<Avatar.Fallback>
		{getInitials(user.name || user.email || 'User')}
	</Avatar.Fallback>
</Avatar.Root>

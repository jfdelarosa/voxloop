import type { Writable } from 'svelte/store';
import type { User } from '@prisma/client';
import { persisted } from 'svelte-local-storage-store';

export const session: Writable<{ user: User } | null> = persisted('session', null);

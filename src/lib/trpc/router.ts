import { initTRPC } from '@trpc/server';
import type { Context } from '$lib/trpc/context';
import { createRouter } from '$server/generated/routers';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	crud: createRouter(t.router, t.procedure)
});

export type Router = typeof router;

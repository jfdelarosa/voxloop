/* eslint-disable */
import {
	type AnyRootConfig,
	type Procedure,
	type ProcedureParams,
	type ProcedureType
} from '@trpc/server';
import { type PrismaClient, type Prisma } from '@prisma/client';
import { type createRouterFactory, AnyRouter } from '@trpc/server/dist/core/router';
import { type ProcedureBuilder } from '@trpc/server/dist/core/internals/procedureBuilder';
import type z from 'zod';
import createUserRouter from './User.router';
import createAccountRouter from './Account.router';
import createSessionRouter from './Session.router';
import createVerificationTokenRouter from './VerificationToken.router';
import createPostRouter from './Post.router';
import createVoteRouter from './Vote.router';
import createCommentRouter from './Comment.router';

export { PrismaClient } from '@prisma/client';

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = ReturnType<
	typeof createRouterFactory<Config>
>;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<{
	_config: Config;
	_ctx_out: Config['$types']['ctx'];
	_input_in: any;
	_input_out: any;
	_output_in: any;
	_output_out: any;
	_meta: Config['$types']['meta'];
}>;

type ExtractParamsFromProcBuilder<Builder extends ProcedureBuilder<any>> =
	Builder extends ProcedureBuilder<infer P> ? P : never;

type FromPromise<P extends Promise<any>> = P extends Promise<infer T> ? T : never;

type Join<A, B> = A extends symbol ? B : A & B;

export type ProcReturns<
	PType extends ProcedureType,
	PBuilder extends ProcBuilder<BaseConfig>,
	ZType extends z.ZodType,
	PPromise extends Prisma.PrismaPromise<any>
> = Procedure<
	PType,
	ProcedureParams<
		ExtractParamsFromProcBuilder<PBuilder>['_config'],
		ExtractParamsFromProcBuilder<PBuilder>['_ctx_out'],
		Join<ExtractParamsFromProcBuilder<PBuilder>['_input_in'], z.infer<ZType>>,
		Join<ExtractParamsFromProcBuilder<PBuilder>['_input_out'], z.infer<ZType>>,
		Join<ExtractParamsFromProcBuilder<PBuilder>['_output_in'], FromPromise<PPromise>>,
		Join<ExtractParamsFromProcBuilder<PBuilder>['_output_out'], FromPromise<PPromise>>,
		ExtractParamsFromProcBuilder<PBuilder>['_meta']
	>
>;

export function db(ctx: any) {
	if (!ctx.prisma) {
		throw new Error('Missing "prisma" field in trpc context');
	}
	return ctx.prisma as PrismaClient;
}

export function createRouter<
	Router extends RouterFactory<BaseConfig>,
	Proc extends ProcBuilder<BaseConfig>
>(router: Router, procedure: Proc) {
	return router({
		user: createUserRouter<Router, Proc>(router, procedure),
		account: createAccountRouter<Router, Proc>(router, procedure),
		session: createSessionRouter<Router, Proc>(router, procedure),
		verificationToken: createVerificationTokenRouter<Router, Proc>(router, procedure),
		post: createPostRouter<Router, Proc>(router, procedure),
		vote: createVoteRouter<Router, Proc>(router, procedure),
		comment: createCommentRouter<Router, Proc>(router, procedure)
	});
}

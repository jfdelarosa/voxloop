/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { AccountInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(AccountInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).account.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['aggregate'],
            ReturnType<PrismaClient['account']['aggregate']>
        >,

        createMany: procedure
            .input(AccountInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['createMany'],
            ReturnType<PrismaClient['account']['createMany']>
        >,

        create: procedure
            .input(AccountInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['create'],
            ReturnType<PrismaClient['account']['create']>
        >,

        deleteMany: procedure
            .input(AccountInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['deleteMany'],
            ReturnType<PrismaClient['account']['deleteMany']>
        >,

        delete: procedure
            .input(AccountInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['delete'],
            ReturnType<PrismaClient['account']['delete']>
        >,

        findFirst: procedure
            .input(AccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['findFirst'],
            ReturnType<PrismaClient['account']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(AccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['findFirst'],
            ReturnType<PrismaClient['account']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(AccountInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['findMany'],
            ReturnType<PrismaClient['account']['findMany']>
        >,

        findUnique: procedure
            .input(AccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['findUnique'],
            ReturnType<PrismaClient['account']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(AccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['findUnique'],
            ReturnType<PrismaClient['account']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(AccountInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).account.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['groupBy'],
            ReturnType<PrismaClient['account']['groupBy']>
        >,

        updateMany: procedure
            .input(AccountInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['updateMany'],
            ReturnType<PrismaClient['account']['updateMany']>
        >,

        update: procedure
            .input(AccountInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['update'],
            ReturnType<PrismaClient['account']['update']>
        >,

        upsert: procedure
            .input(AccountInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof AccountInputSchema)['upsert'],
            ReturnType<PrismaClient['account']['upsert']>
        >,

        count: procedure
            .input(AccountInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).account.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof AccountInputSchema)['count'],
            ReturnType<PrismaClient['account']['count']>
        >,
    });
}

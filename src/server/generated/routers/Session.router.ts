/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { SessionInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(SessionInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).session.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['aggregate'],
            ReturnType<PrismaClient['session']['aggregate']>
        >,

        createMany: procedure
            .input(SessionInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['createMany'],
            ReturnType<PrismaClient['session']['createMany']>
        >,

        create: procedure
            .input(SessionInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['create'],
            ReturnType<PrismaClient['session']['create']>
        >,

        deleteMany: procedure
            .input(SessionInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['deleteMany'],
            ReturnType<PrismaClient['session']['deleteMany']>
        >,

        delete: procedure
            .input(SessionInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['delete'],
            ReturnType<PrismaClient['session']['delete']>
        >,

        findFirst: procedure
            .input(SessionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['findFirst'],
            ReturnType<PrismaClient['session']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(SessionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['findFirst'],
            ReturnType<PrismaClient['session']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(SessionInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['findMany'],
            ReturnType<PrismaClient['session']['findMany']>
        >,

        findUnique: procedure
            .input(SessionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['findUnique'],
            ReturnType<PrismaClient['session']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(SessionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['findUnique'],
            ReturnType<PrismaClient['session']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(SessionInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).session.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['groupBy'],
            ReturnType<PrismaClient['session']['groupBy']>
        >,

        updateMany: procedure
            .input(SessionInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['updateMany'],
            ReturnType<PrismaClient['session']['updateMany']>
        >,

        update: procedure
            .input(SessionInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['update'],
            ReturnType<PrismaClient['session']['update']>
        >,

        upsert: procedure
            .input(SessionInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof SessionInputSchema)['upsert'],
            ReturnType<PrismaClient['session']['upsert']>
        >,

        count: procedure
            .input(SessionInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).session.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof SessionInputSchema)['count'],
            ReturnType<PrismaClient['session']['count']>
        >,
    });
}

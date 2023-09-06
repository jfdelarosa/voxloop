/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { UserInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(UserInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).user.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['aggregate'],
            ReturnType<PrismaClient['user']['aggregate']>
        >,

        createMany: procedure
            .input(UserInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['createMany'],
            ReturnType<PrismaClient['user']['createMany']>
        >,

        create: procedure
            .input(UserInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['create'],
            ReturnType<PrismaClient['user']['create']>
        >,

        deleteMany: procedure
            .input(UserInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['deleteMany'],
            ReturnType<PrismaClient['user']['deleteMany']>
        >,

        delete: procedure
            .input(UserInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['delete'],
            ReturnType<PrismaClient['user']['delete']>
        >,

        findFirst: procedure
            .input(UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['findFirst'],
            ReturnType<PrismaClient['user']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['findFirst'],
            ReturnType<PrismaClient['user']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(UserInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['findMany'],
            ReturnType<PrismaClient['user']['findMany']>
        >,

        findUnique: procedure
            .input(UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['findUnique'],
            ReturnType<PrismaClient['user']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['findUnique'],
            ReturnType<PrismaClient['user']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(UserInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).user.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['groupBy'],
            ReturnType<PrismaClient['user']['groupBy']>
        >,

        updateMany: procedure
            .input(UserInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['updateMany'],
            ReturnType<PrismaClient['user']['updateMany']>
        >,

        update: procedure
            .input(UserInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['update'],
            ReturnType<PrismaClient['user']['update']>
        >,

        upsert: procedure
            .input(UserInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof UserInputSchema)['upsert'],
            ReturnType<PrismaClient['user']['upsert']>
        >,

        count: procedure
            .input(UserInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).user.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof UserInputSchema)['count'],
            ReturnType<PrismaClient['user']['count']>
        >,
    });
}

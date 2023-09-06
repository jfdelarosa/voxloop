/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { VoteInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(VoteInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['aggregate'],
            ReturnType<PrismaClient['vote']['aggregate']>
        >,

        createMany: procedure
            .input(VoteInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['createMany'],
            ReturnType<PrismaClient['vote']['createMany']>
        >,

        create: procedure
            .input(VoteInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['create'],
            ReturnType<PrismaClient['vote']['create']>
        >,

        deleteMany: procedure
            .input(VoteInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['deleteMany'],
            ReturnType<PrismaClient['vote']['deleteMany']>
        >,

        delete: procedure
            .input(VoteInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['delete'],
            ReturnType<PrismaClient['vote']['delete']>
        >,

        findFirst: procedure
            .input(VoteInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['findFirst'],
            ReturnType<PrismaClient['vote']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(VoteInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['findFirst'],
            ReturnType<PrismaClient['vote']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(VoteInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['findMany'],
            ReturnType<PrismaClient['vote']['findMany']>
        >,

        findUnique: procedure
            .input(VoteInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['findUnique'],
            ReturnType<PrismaClient['vote']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(VoteInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['findUnique'],
            ReturnType<PrismaClient['vote']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(VoteInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['groupBy'],
            ReturnType<PrismaClient['vote']['groupBy']>
        >,

        updateMany: procedure
            .input(VoteInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['updateMany'],
            ReturnType<PrismaClient['vote']['updateMany']>
        >,

        update: procedure
            .input(VoteInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['update'],
            ReturnType<PrismaClient['vote']['update']>
        >,

        upsert: procedure
            .input(VoteInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).vote.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof VoteInputSchema)['upsert'],
            ReturnType<PrismaClient['vote']['upsert']>
        >,

        count: procedure
            .input(VoteInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).vote.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VoteInputSchema)['count'],
            ReturnType<PrismaClient['vote']['count']>
        >,
    });
}

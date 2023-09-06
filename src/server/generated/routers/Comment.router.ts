/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { CommentInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(CommentInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['aggregate'],
            ReturnType<PrismaClient['comment']['aggregate']>
        >,

        createMany: procedure
            .input(CommentInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['createMany'],
            ReturnType<PrismaClient['comment']['createMany']>
        >,

        create: procedure
            .input(CommentInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['create'],
            ReturnType<PrismaClient['comment']['create']>
        >,

        deleteMany: procedure
            .input(CommentInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['deleteMany'],
            ReturnType<PrismaClient['comment']['deleteMany']>
        >,

        delete: procedure
            .input(CommentInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['delete'],
            ReturnType<PrismaClient['comment']['delete']>
        >,

        findFirst: procedure
            .input(CommentInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['findFirst'],
            ReturnType<PrismaClient['comment']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(CommentInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['findFirst'],
            ReturnType<PrismaClient['comment']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(CommentInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['findMany'],
            ReturnType<PrismaClient['comment']['findMany']>
        >,

        findUnique: procedure
            .input(CommentInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['findUnique'],
            ReturnType<PrismaClient['comment']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(CommentInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['findUnique'],
            ReturnType<PrismaClient['comment']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(CommentInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['groupBy'],
            ReturnType<PrismaClient['comment']['groupBy']>
        >,

        updateMany: procedure
            .input(CommentInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['updateMany'],
            ReturnType<PrismaClient['comment']['updateMany']>
        >,

        update: procedure
            .input(CommentInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['update'],
            ReturnType<PrismaClient['comment']['update']>
        >,

        upsert: procedure
            .input(CommentInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comment.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof CommentInputSchema)['upsert'],
            ReturnType<PrismaClient['comment']['upsert']>
        >,

        count: procedure
            .input(CommentInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).comment.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof CommentInputSchema)['count'],
            ReturnType<PrismaClient['comment']['count']>
        >,
    });
}

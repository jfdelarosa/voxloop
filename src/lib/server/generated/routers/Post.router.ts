/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { PostInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(PostInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).post.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['aggregate'],
            ReturnType<PrismaClient['post']['aggregate']>
        >,

        createMany: procedure
            .input(PostInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['createMany'],
            ReturnType<PrismaClient['post']['createMany']>
        >,

        create: procedure
            .input(PostInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['create'],
            ReturnType<PrismaClient['post']['create']>
        >,

        deleteMany: procedure
            .input(PostInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['deleteMany'],
            ReturnType<PrismaClient['post']['deleteMany']>
        >,

        delete: procedure
            .input(PostInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['delete'],
            ReturnType<PrismaClient['post']['delete']>
        >,

        findFirst: procedure
            .input(PostInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['findFirst'],
            ReturnType<PrismaClient['post']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(PostInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['findFirst'],
            ReturnType<PrismaClient['post']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(PostInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['findMany'],
            ReturnType<PrismaClient['post']['findMany']>
        >,

        findUnique: procedure
            .input(PostInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['findUnique'],
            ReturnType<PrismaClient['post']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(PostInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['findUnique'],
            ReturnType<PrismaClient['post']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(PostInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).post.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['groupBy'],
            ReturnType<PrismaClient['post']['groupBy']>
        >,

        updateMany: procedure
            .input(PostInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['updateMany'],
            ReturnType<PrismaClient['post']['updateMany']>
        >,

        update: procedure
            .input(PostInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['update'],
            ReturnType<PrismaClient['post']['update']>
        >,

        upsert: procedure
            .input(PostInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof PostInputSchema)['upsert'],
            ReturnType<PrismaClient['post']['upsert']>
        >,

        count: procedure
            .input(PostInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).post.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof PostInputSchema)['count'],
            ReturnType<PrismaClient['post']['count']>
        >,
    });
}

/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import { VerificationTokenInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input(VerificationTokenInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['aggregate'],
            ReturnType<PrismaClient['verificationToken']['aggregate']>
        >,

        createMany: procedure
            .input(VerificationTokenInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['createMany'],
            ReturnType<PrismaClient['verificationToken']['createMany']>
        >,

        create: procedure
            .input(VerificationTokenInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['create'],
            ReturnType<PrismaClient['verificationToken']['create']>
        >,

        deleteMany: procedure
            .input(VerificationTokenInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['deleteMany'],
            ReturnType<PrismaClient['verificationToken']['deleteMany']>
        >,

        delete: procedure
            .input(VerificationTokenInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['delete'],
            ReturnType<PrismaClient['verificationToken']['delete']>
        >,

        findFirst: procedure
            .input(VerificationTokenInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['findFirst'],
            ReturnType<PrismaClient['verificationToken']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input(VerificationTokenInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).verificationToken.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['findFirst'],
            ReturnType<PrismaClient['verificationToken']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input(VerificationTokenInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['findMany'],
            ReturnType<PrismaClient['verificationToken']['findMany']>
        >,

        findUnique: procedure
            .input(VerificationTokenInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['findUnique'],
            ReturnType<PrismaClient['verificationToken']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input(VerificationTokenInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).verificationToken.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['findUnique'],
            ReturnType<PrismaClient['verificationToken']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input(VerificationTokenInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['groupBy'],
            ReturnType<PrismaClient['verificationToken']['groupBy']>
        >,

        updateMany: procedure
            .input(VerificationTokenInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['updateMany'],
            ReturnType<PrismaClient['verificationToken']['updateMany']>
        >,

        update: procedure
            .input(VerificationTokenInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['update'],
            ReturnType<PrismaClient['verificationToken']['update']>
        >,

        upsert: procedure
            .input(VerificationTokenInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof VerificationTokenInputSchema)['upsert'],
            ReturnType<PrismaClient['verificationToken']['upsert']>
        >,

        count: procedure
            .input(VerificationTokenInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof VerificationTokenInputSchema)['count'],
            ReturnType<PrismaClient['verificationToken']['count']>
        >,
    });
}

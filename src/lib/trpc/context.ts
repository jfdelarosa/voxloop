
import { enhance } from '@zenstackhq/runtime';
import { prisma } from './db';
import { getSessionUser } from './auth';

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
    return {
        ...,
        // use access-control-enabled Prisma client
        prisma: await enhance(prisma, { user: getSessionUser(req, res) }),
    };
};
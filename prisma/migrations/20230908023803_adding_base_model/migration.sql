/*
  Warnings:

  - You are about to drop the column `zenstack_guard` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_transaction` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_guard` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_transaction` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_guard` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_transaction` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_guard` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_transaction` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_guard` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_transaction` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_guard` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `zenstack_transaction` on the `Vote` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Account_zenstack_transaction_idx";

-- DropIndex
DROP INDEX "Comment_zenstack_transaction_idx";

-- DropIndex
DROP INDEX "Post_zenstack_transaction_idx";

-- DropIndex
DROP INDEX "Session_zenstack_transaction_idx";

-- DropIndex
DROP INDEX "User_zenstack_transaction_idx";

-- DropIndex
DROP INDEX "Vote_zenstack_transaction_idx";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "zenstack_guard",
DROP COLUMN "zenstack_transaction";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "zenstack_guard",
DROP COLUMN "zenstack_transaction",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publishedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "zenstack_guard",
DROP COLUMN "zenstack_transaction",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publishedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "zenstack_guard",
DROP COLUMN "zenstack_transaction";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "zenstack_guard",
DROP COLUMN "zenstack_transaction",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "zenstack_guard",
DROP COLUMN "zenstack_transaction",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "token_type" TEXT,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "id_token" TEXT,
    "scope" TEXT,
    "session_state" TEXT,
    "expires_at" INTEGER,
    "userId" TEXT NOT NULL,
    "zenstack_guard" BOOLEAN NOT NULL DEFAULT true,
    "zenstack_transaction" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- CreateIndex
CREATE INDEX "Account_zenstack_transaction_idx" ON "Account"("zenstack_transaction");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

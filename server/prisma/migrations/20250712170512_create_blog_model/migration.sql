-- CreateTable
CREATE TABLE "blogs" (
    "blog_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "blog_title" TEXT NOT NULL,
    "blog_synopsis" TEXT NOT NULL,
    "blog_content" TEXT NOT NULL,
    "blog_image" TEXT NOT NULL,
    "deleted_status" BOOLEAN NOT NULL DEFAULT false,
    "creates_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("blog_id")
);

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

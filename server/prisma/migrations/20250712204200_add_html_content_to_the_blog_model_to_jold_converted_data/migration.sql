/*
  Warnings:

  - You are about to drop the column `blog_content` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `blog_html_content` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blog_markdown_content` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "blog_content",
ADD COLUMN     "blog_html_content" TEXT NOT NULL,
ADD COLUMN     "blog_markdown_content" TEXT NOT NULL;

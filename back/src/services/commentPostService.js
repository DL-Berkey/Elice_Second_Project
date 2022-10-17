import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class commentPostService {
    static async addComment({ boardId, nickname, description }) {
        const result = await prisma.CommentPost.create({
            data: {
                description,
                user: {
                    connect: { nickname },
                },
                post: {
                    connect: { id: Number(boardId) },
                },
            },
        });
        return result;
    }
    static async getComments({ boardId }) {
        const result = await prisma.CommentPost.findMany({
            where: { post_id: Number(boardId) },
            select: { author: true, description: true },
        });
        return result;
    }
    static async getMyComments({ nickname }) {
        const result = await prisma.CommentPost.findMany({
            where: { author: nickname },
        });
        return result;
    }
    static async updateComment({ commentId, updateData }) {
        const result = await prisma.CommentPost.update({
            where: {
                id: Number(commentId),
            },
            data: { ...updateData },
        });
        return result;
    }
    static async removeComment({ commentId }) {
        const result = await prisma.CommentPost.delete({
            where: { id: Number(commentId) },
        });
        return result;
    }
}
export default commentPostService;

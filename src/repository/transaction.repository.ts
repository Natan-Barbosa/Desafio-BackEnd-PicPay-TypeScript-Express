import { PrismaClient } from "@/generated/prisma/client"
import { injectable } from "tsyringe"

const prisma = new PrismaClient()

@injectable()
export class TransactionRepository {

    public async create(value: number, receiverId: string, senderId: string) {
        return await prisma.transaction.create({
            data: {
                value: value,
                receiverId: receiverId,
                senderId: senderId
            }
        })
    }
}
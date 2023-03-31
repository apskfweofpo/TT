import prisma from "../prisma"
import {error} from "trpc";
import bcrypt from "bcrypt"

class adminService {
    async register(email: string, login: string, password: string) {
        const oldAdmin = await prisma.admin.findUnique({
            where: {
                email
            }
        })
        if (!oldAdmin) {
            const hashedPassword = await bcrypt.hash(password, 3);
            const newAdmin = await prisma.admin.create({
                data: {
                    email,
                    login,
                    password: hashedPassword
                }
            })
            return newAdmin
        } else {
            throw new Error('admin with this email exists')
        }
    }

    async login(login: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 3);
        const admin = await prisma.admin.findUnique({
            where: {
                login,
            },
        });

        if (!admin) {
            throw new Error('No find Admin')
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            throw new Error('Password not compare')
        }
        return admin;
    }
}


export default new adminService()
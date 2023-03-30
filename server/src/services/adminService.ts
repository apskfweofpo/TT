const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class adminService {
    async register(login:string, password:string){
        const newAdmin  = await prisma.Department.create({
            data: {
                login,
                password
            }
        })
        return newAdmin
    }

    async login(login:string, password:string){
        const admin = await prisma.admin.findUnique({
            where: {
                login,
            },
        });

        if (!admin || admin.password !== password) {
            return null;
        }

        return admin;
    }
        
    }



export default new adminService()
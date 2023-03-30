const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class departmentService {
    async addOne(name:string, description:string){
        const newdepartment  = await prisma.Department.create({
            data: {
                name,
                description
            }
        })
        return newdepartment
    }
    async deleteOne(id:number){
        const deletedDepartment = await prisma.department.delete({
            where: {
                id,
            },
        });
        return deletedDepartment;
    }
    async getAll(){
        const departments = await prisma.department.findMany();
        return departments;
    }
    async search(name:string){
        const departments = await prisma.department.findMany({
            where: {
                name: {
                    ilike: `%${name}%`,
                },
            },
        });
        return departments;
    }

}

export default new departmentService()
import prisma from "../prisma"


class departmentService {
    async addOne(name: string, description: string) {
        const newDepartment = await prisma.Department.create({
            data: {
                name,
                description
            }
        })
        return newDepartment;
    }

    async deleteOne(id: number) {
        const deletedDepartment = await prisma.department.delete({
            where: {
                id,
            },
        });
        return deletedDepartment;
    }

    async getAll() {
        const departments = await prisma.department.findMany();
        return departments;
    }

    async search(name: string) {
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
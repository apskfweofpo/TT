import prisma from "../prisma"


class employeeService {
    async addOne(name: string, surname: string, post: string, departmentId: number) {
        const newEmployee = await prisma.employee.create({
            data: {
                name,
                surname,
                post,
                departmentId
            }
        })
        return newEmployee
    }

    async deleteOne(id: number) {
        const deletedDepartment = await prisma.employee.delete({
            where: {
                id
            },
        });
        return deletedDepartment;
    }

    async getAll() {
        const employees = await prisma.employee.findMany();
        return employees;
    }

    async search(name: string) {
        const employees = await prisma.department.findMany({
            where: {
                name: {
                    ilike: `%${name}%`,
                },
            },
        });
        return employees;
    }

    async togglePost(employeeId) {
        const employee = await prisma.employee.findUnique({
            where: {
                id: employeeId,
            },
            select: {
                isHead: true,
            },
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        const updatedEmployee = await prisma.employee.update({
            where: {
                id: employeeId,
            },
            data: {
                isHead: !employee.isHead,
            },
        });
        return updatedEmployee;
    }
}

export default new employeeService()
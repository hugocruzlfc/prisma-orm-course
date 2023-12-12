"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const newUser = await prisma.user.create({
        data: {
            email: "hugo@gmail.com",
            name: "Hugo Cruz",
            password: "123456",
        },
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});

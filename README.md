## Prisma workflow

```bash
# Install dependencies
npm i -D ts-node typescript @types/node
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx prisma generate
```

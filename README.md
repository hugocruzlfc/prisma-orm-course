## Prisma workflow

```bash
# Install dependencies
npm i -D ts-node typescript @types/node
npm i prisma -D
npm i @prisma/client

# Run prisma
npx prisma init --datasource-provider sqlite
npx prisma generate
npx prisma db push
npx prisma migrate dev --name init
```

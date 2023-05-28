import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = fastify()

const prisma = new PrismaClient({
  log: ['query'],
})

app.register(cors, {
  origin: true,
})

app.get('/', async () => {
  const allProducts = await prisma.product.findMany()

  return allProducts
})

app.get('/product/:id', async (request) => {
  const { id } = request.params as { id: string }

  const product = await prisma.product.findUnique({ where: { id } })

  return product
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀 Server is running!'))

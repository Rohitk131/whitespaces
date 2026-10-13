import Fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'

const app = Fastify({ logger: true })

await app.register(cors, {
  origin: 'http://localhost:3000', 
})

app.get('/',function (request, reply) {
  reply
    .send({ hello: 'world' })
})



app.listen({ port: 4000, host: '0.0.0.0' })
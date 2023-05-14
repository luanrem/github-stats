import { FastifyInstance } from 'fastify'
import { helloController } from './controllers/hello'

export async function appRoutes(app: FastifyInstance) {
  app.get('/hello', helloController)
}

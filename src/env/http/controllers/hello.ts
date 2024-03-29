import { FastifyReply, FastifyRequest } from "fastify"
import { app } from "../../../app"

export async function helloController(request: FastifyRequest, reply: FastifyReply) {
  reply.headers({
    "Content-Type": "image/svg+xml"
  })


  return reply.send(`
  
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image href="https://sm.ign.com/ign_br/cover/s/star-wars-/star-wars-the-mandalorian_6gd6.jpg" height="200" width="200" />
  </svg>
  
  `)
}
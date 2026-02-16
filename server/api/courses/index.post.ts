import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const course = await prisma.course.create({
    data: {
      title: body.title,
      description: body.description,
      instructorId: body.instructorId,
      lessons: {
        create: body.lessons
      }
    }
  })
  return course
})

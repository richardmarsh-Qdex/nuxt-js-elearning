import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
      instructor: true
    }
  })
  return courses
})

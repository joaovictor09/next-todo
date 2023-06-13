import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return
  }

  const tasks = await prisma.task.findMany({
    where: {
      userEmail: session.user?.email!,
    },
  })
  return NextResponse.json({ tasks })
}

export async function POST(request: Request) {
  const { name } = await request.json()

  const session = await getServerSession(authOptions)
  if (!session || !name) {
    return
  }

  const tasks = await prisma.task.create({
    data: {
      name,
      userEmail: session.user?.email!,
    },
  })
  return NextResponse.json({ tasks })
}

export async function PATCH(request: Request) {
  const { id } = await request.json()

  const session = await getServerSession(authOptions)
  if (!session || !id) {
    return
  }

  const taskExists = await prisma.task.findFirst({
    where: {
      id,
    },
  })

  if (!taskExists) {
    return
  }

  const tasks = await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: !taskExists.completed,
    },
  })
  return NextResponse.json({ tasks })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const session = await getServerSession(authOptions)
  if (!session || !id) {
    return
  }

  console.log(id)

  const taskExists = await prisma.task.findFirst({
    where: {
      id,
    },
  })

  if (!taskExists) {
    return
  }

  await prisma.task.delete({
    where: {
      id,
    },
  })

  return NextResponse.json({ status: 200, message: 'sucess' })
}

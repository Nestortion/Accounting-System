import db from '../index.ts'
import crypto from 'crypto'
import users from '../schema/users.schema.ts'
import { eq } from 'drizzle-orm'

const USER_TYPE = {
    FINANCE: 'FINANCE',
    HIGHER_DEPARTMENT: 'HIGHER_DEPARTMENT'
} as const

type ObjectTypes<T> = T[keyof T]

type UserType = ObjectTypes<typeof USER_TYPE>

export const getAllUsers = async () => {

    const users = await db.query.users.findMany()

    return users

}

export const addUser = async (input: {
    userType: UserType,
    userUsername: string,
    userPassword: string,
}) => {

    const newUserId = `userId ${crypto.randomUUID()}`;

    await db.insert(users).values({ ...input, userId: newUserId })

    const newUser = await db.query.users.findFirst({ where: (user) => eq(user.userId, newUserId) })

    return newUser
}

export const updateUser = async (input: {
    userId: string,
    newData: {
        userType?: UserType,
        userUsername?: string,
        userPassword?: string,

    }
}) => {
    await db.update(users).set(input.newData).where(eq(users.userId,input.userId))

    const updatedUser = await db.query.users.findFirst({where:(user)=>eq(user.userId,input.userId)})

    return updatedUser

}

export const toggleUserIsActive = async (input: {
    userId: string
}) =>{

    await db.update(users).set({userIsActive: !users.userIsActive}).where(eq(users.userId,input.userId))

    const updatedUser = await db.query.users.findFirst({where:(user)=>eq(user.userId,input.userId)})

    return updatedUser

}

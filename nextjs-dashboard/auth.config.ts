import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import bcrypt from "bcrypt"
import postgres from "postgres"
import type { User } from "@/app/lib/definitions"

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" })

async function getUser(email: string): Promise<User | undefined> {
  const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`
  return user[0]
}

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials)

        if (!parsed.success) return null
        const { email, password } = parsed.data
        const user = await getUser(email)
        if (!user) return null

        const passwordsMatch = await bcrypt.compare(password, user.password)
        if (!passwordsMatch) return null

        return user
      },
    }),
  ],
  pages: {
    signIn: "/login", // optional
  },
  session: { strategy: "jwt" },
}

import type { User } from "@/interfaces/user"
import type { ActionAPIContext } from "astro:actions"

const addCookie = (context: ActionAPIContext,data: User) => {
    context.cookies.set('user', data,{ path: '/', maxAge: 60 * 60 * 24 * 7})
}

export default addCookie
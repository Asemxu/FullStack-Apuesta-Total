import type { User } from "@/interfaces/user"

const isLoggedIn = (user: string) => {
    return user ? JSON.parse(user) as User : null;
}

export default isLoggedIn
import { ROLES } from "@/helpers/constants";

const isAdmin = (role: string) => {
    return role === ROLES.ADMIN;
}

export default isAdmin
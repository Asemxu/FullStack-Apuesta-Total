import { atom } from "nanostores";
import type { User } from "@/interfaces/user";

const user = atom<User | null>(null);

export {
  user
};

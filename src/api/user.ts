import type { User } from "../types";
import { request } from "../lib/request";

export async function getUser(): Promise<User> {
  return await request<User>("user");
}

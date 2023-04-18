import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export type Cache = {
  id: number;
  team_id: number;
  // TODO: Add the rest of the fields
};

export type Caches = Array<Cache>;

export async function getCaches(): Promise<Caches> {
  const currentTeamId = await getTeamId();

  return await request<Caches>(`teams/${currentTeamId}/caches`);
}

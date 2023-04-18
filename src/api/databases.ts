import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export type Database = {
  id: number;
  team_id: number;
  name: string;
  // TODO: Add the rest of the fields
};

export type Databases = Array<Database>;

export async function getDatabases(): Promise<Databases> {
  const currentTeamId = await getTeamId();

  return await request<Databases>(`teams/${currentTeamId}/databases`);
}

import type { Database, Databases, DatabaseAlarms, DatabaseMetric } from "../types/databases";
import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export async function getDatabases(): Promise<Databases> {
  const currentTeamId = await getTeamId();

  return await request<Databases>(`teams/${currentTeamId}/databases`);
}

export async function getDatabase(databaseId: number): Promise<Database> {
  const currentTeamId = await getTeamId();

  return await request<Database>(`teams/${currentTeamId}/databases/${databaseId}`);
}

export async function getDatabaseAlarms(databaseId: number): Promise<DatabaseAlarms> {
  return request<DatabaseAlarms>(`databases/${databaseId}/alarms`);
}

export async function getDatabaseMetrics(databaseId: number, period: string): Promise<DatabaseMetric> {
  return request<DatabaseMetric>(`databases/${databaseId}/metrics`, {
    params: {
      period,
    },
  });
}

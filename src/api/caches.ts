import type { Caches, CacheMetric } from "../types/caches";
import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export async function getCaches(): Promise<Caches> {
  const currentTeamId = await getTeamId();

  return await request<Caches>(`teams/${currentTeamId}/caches`);
}

export async function getCache(cacheId: number): Promise<Cache> {
  const currentTeamId = await getTeamId();

  return await request<Cache>(`teams/${currentTeamId}/caches/${cacheId}`);
}

export async function getCacheMetrics(cacheId: number, period: string): Promise<CacheMetric> {
  return await request<CacheMetric>(`caches/${cacheId}/metrics`, {
    params: {
      period,
    },
  });
}

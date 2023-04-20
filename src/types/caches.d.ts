import type { CloudProvider } from "./index";
import type { Network } from "./networks";

export type Cache = {
  id: number;
  team_id: number;
  cloud_provider_id: number;
  network_id: number;
  name: string;
  type: string;
  region: string;
  cache_id: string | null;
  endpoint: string | null;
  port: number;
  instance_class: string;
  scale: number;
  status: string;
  created_at: string;
  updated_at: string;
  cloud_provider: CloudProvider;
  network: Network;
};

export type Caches = Array<Cache>;

export type CacheMetric = {
  averageCacheCpuUtilization: number[];
  totalCacheHits: number[];
  totalCacheMisses: number[];
};

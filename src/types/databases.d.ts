import type { CloudProvider } from "./index";
import type { Network } from "./networks";

export type Database = {
  id: number;
  team_id: number;
  cloud_provider_id: number;
  network_id: number;
  name: string;
  type: string;
  region: string;
  database_id: string;
  username: string;
  endpoint: string | null;
  port: number;
  instance_class: string;
  storage: number;
  currently_allocated_storage: number;
  is_public: boolean;
  pauses: boolean;
  encrypted: boolean;
  backup_retention_period: number;
  restored_from_id: number | null;
  restored_to_timestamp: string | null;
  min_capacity: number;
  max_capacity: number;
  status: string;
  created_at: string;
  updated_at: string;
  cloud_provider: CloudProvider;
  network: Network;
};

export type Databases = Array<Database>;

export type DatabaseAlarm = {
  id: number;
  team_id: number;
  database_id: number;
  // TODO: Figure out what this is
};

export type DatabaseAlarms = Array<DatabaseAlarm>;

export type DatabaseMetric = {
  averageDatabaseCpuUtilization: number;
  averageDatabaseCpuUtilizationByInterval: Record<string, number>;
  averageDatabaseConnections: number;
  averageDatabaseConnectionsByInterval: Record<string, number>;
  maxDatabaseConnections: number;
  maxDatabaseConnectionsByInterval: Record<string, number>;
  totalDatabaseStorageSpaceByInterval: Record<string, number>;
};

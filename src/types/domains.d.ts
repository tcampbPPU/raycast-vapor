import type { CloudProvider } from "./index";

export type Domain = {
  id: number;
  team_id: number;
  cloud_provider_id: number;
  zone_id: string;
  zone: string;
  nameservers: string[];
  ses_verified: boolean;
  importing: boolean;
  queued_for_deletion: number;
  created_at: string;
  updated_at: string;
  records_count: number;
  cloud_provider: CloudProvider;
};

export type Domains = Array<Domain>;

export type DomainRecord = {
  id: number;
  zone_id: number;
  type: string;
  name: string;
  value: string;
  alias: true;
  hosted_zone_id: string;
  locked: boolean;
  created_at: Date;
  updated_at: Date;
};

export type DomainRecords = Array<DomainRecord>;

export type DomainCertificate = {
  id: number;
  team_id: number;
  cloud_provider_id: number;
  region: string;
  domain: string;
  alternative_names: string[];
  certificate_arn: string;
  validation_method: string;
  validation_record_ids: number[];
  validation_record_domains: { name: string; value: string }[];
  status: string;
  created_at: Date;
  updated_at: Date;
  cloud_provider: CloudProvider;
};

export type DomainCertificates = Array<DomainCertificate>;

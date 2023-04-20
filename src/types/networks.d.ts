import type { CloudProvider } from "./index";

export type Network = {
  id: number;
  team_id: number;
  cloud_provider_id: number;
  name: string;
  version: number;
  region: string;
  stack_id: string;
  vpc_id: string;
  default_security_group_id: string;
  vpc_cidr_block: string | null;
  public_subnet_cidr_blocks: string[] | null;
  private_subnet_cidr_blocks: string[] | null;
  public_subnets: string[];
  private_subnets: string[];
  has_internet_access: boolean;
  stack_status: string;
  stack_status_reason: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  cloud_provider: CloudProvider;
};

export type Networks = Array<Network>;

export type JumpBox = {
  id: number;
  team_id: number;
  // TODO: Figure out what this is
};

export type JumpBoxes = Array<JumpBox>;

export type LoadBalancer = {
  id: number;
  team_id: number;
  // TODO: Figure out what this is
};

export type LoadBalancers = Array<LoadBalancer>;

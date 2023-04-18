import { LocalStorage } from "@raycast/api";
import { request } from "../lib/request";
import { getUser } from "./user";

export type Project = {
  id: number;
  team_id: number;
  cloud_provider_id: number;
  name: string;
  region: string;
  bucket: string;
  asset_bucket: string | null;
  container_repository: string | null;
  cloudfront_id: string | null;
  cloudfront_domain: string | null;
  cloudfront_alias: string | null;
  cloudfront_status: string | null;
  github_repository: string | null;
  template: string | null;
  template_status: string | null;
  is_sandboxed: boolean;
  queued_for_deletion: boolean;
  last_deployed_at: Date | null;
  cloud_provider: {
    id: number;
    team_id: number;
    uuid: string;
    name: string;
    type: string;
    role_arn: string;
    role_sync: boolean;
    sns_topic_arn: string;
    network_limit: number;
  };
  asset_domains: {
    cloudfront: string;
    s3: string;
  };
};

export type Projects = Array<Project>;

export async function getProjects(): Promise<Projects> {
  let currentTeamId;
  currentTeamId = await LocalStorage.getItem<string>("current_team");

  if (!currentTeamId) {
    const user = await getUser();
    await LocalStorage.setItem("current_team", user.current_team_id.toString());
    currentTeamId = user.current_team_id.toString();
  }

  return await request<Projects>(`teams/${currentTeamId}/projects`);
}

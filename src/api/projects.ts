import type { Project, Projects, ProjectEnvironments, ProjectDeployments } from "../types/projects";
import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export async function getProjects(): Promise<Projects> {
  const currentTeamId = await getTeamId();

  return await request<Projects>(`teams/${currentTeamId}/projects`);
}

export async function getProject(projectId: number): Promise<Project> {
  return await request<Project>(`projects/${projectId}`);
}

export async function getProjectEnvironments(projectId: number): Promise<ProjectEnvironments> {
  return await request<ProjectEnvironments>(`projects/${projectId}/environments`);
}

export async function getProjectDeployments(projectId: number): Promise<ProjectDeployments> {
  return await request<ProjectDeployments>(`projects/${projectId}/deployments`);
}

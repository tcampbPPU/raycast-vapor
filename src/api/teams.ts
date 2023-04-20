import type { Teams } from "../types/index";
import { LocalStorage } from "@raycast/api";
import { request } from "../lib/request";

export async function getTeams(): Promise<Teams> {
  return Promise.all([request<Teams>("teams"), request<Teams>("owned-teams")]).then((values) => {
    return [...values[0], ...values[1]];
  });
}

export async function switchTeam(teamId: number): Promise<void> {
  await request<void>(`current-team`, {
    method: "PUT",
    body: JSON.stringify({ team_id: teamId }),
  });

  await setCurrentTeam(teamId);

  return Promise.resolve();
}

export async function setCurrentTeam(teamId: number): Promise<void> {
  await LocalStorage.setItem("current_team", teamId.toString());
}

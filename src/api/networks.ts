import type { Network, Networks, JumpBoxes, LoadBalancers } from "../types/networks";
import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export async function getNetworks(): Promise<Networks> {
  const currentTeamId = await getTeamId();

  return await request<Networks>(`teams/${currentTeamId}/networks`);
}

export async function getNetwork(networkId: number): Promise<Network> {
  return await request<Network>(`networks/${networkId}`);
}

export async function getJumpBoxes(networkId: number): Promise<JumpBoxes> {
  const currentTeamId = await getTeamId();

  return await request<JumpBoxes>(`teams/${currentTeamId}/jump-boxes`, {
    params: {
      network: String(networkId),
    },
  });
}

export async function getLoadBalancers(networkId: number): Promise<LoadBalancers> {
  const currentTeamId = await getTeamId();

  return await request<LoadBalancers>(`teams/${currentTeamId}/load-balancers`, {
    params: {
      network: String(networkId),
    },
  });
}

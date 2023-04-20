import type { Domain, Domains, DomainRecords, DomainCertificates } from "../types/domains";
import { request } from "../lib/request";
import { getTeamId } from "../lib/helpers";

export async function getDomains(): Promise<Domains> {
  const currentTeamId = await getTeamId();

  return await request<Domains>(`teams/${currentTeamId}/zones`);
}

export async function getDomain(domainId: number): Promise<Domain> {
  return await request<Domain>(`zones/${domainId}`);
}

export async function getDomainRecords(domainId: number): Promise<DomainRecords> {
  return await request<DomainRecords>(`zones/${domainId}/records`);
}

export async function getDomainCertificates(domainId: number): Promise<DomainCertificates> {
  const currentTeamId = await getTeamId();

  return await request<DomainCertificates>(`teams/${currentTeamId}/certificates`, {
    params: {
      zone: String(domainId),
    },
  });
}

import { Action, ActionPanel } from "@raycast/api";
import { Cache } from "../api/caches";
import { Database } from "../api/databases";
import { Domain } from "../api/domains";
import { Network } from "../api/networks";
import { Project } from "../api/projects";

export interface Props {
  id: string | number;
  title: string;
  type: "cache" | "database" | "domain" | "network" | "project";
  result: Cache | Database | Domain | Network | Project;
}

export default function ResultItem(props: Props) {
  const urlBases = {
    cache: "https://vapor.laravel.com/app/caches/",
    database: "https://vapor.laravel.com/app/databases/",
    domain: "https://vapor.laravel.com/app/domains/",
    network: "https://vapor.laravel.com/app/networks/",
    project: "https://vapor.laravel.com/app/projects/",
  };

  const url = urlBases[props.type] + props.id;

  return (
    <ActionPanel title={props.title}>
      <ActionPanel.Section>
        <Action.OpenInBrowser url={url} />
      </ActionPanel.Section>
      <ActionPanel.Section>
        <Action.CopyToClipboard content={url} title="Copy Link" shortcut={{ modifiers: ["cmd"], key: "." }} />
      </ActionPanel.Section>
    </ActionPanel>
  );
}

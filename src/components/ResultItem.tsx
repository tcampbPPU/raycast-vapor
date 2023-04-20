import type { Cache } from "../types/caches";
import type { Database } from "../types/databases";
import type { Domain } from "../types/domains";
import type { Network } from "../types/networks";
import type { Project } from "../types/projects";
import { List } from "@raycast/api";
import ResultActions from "./ResultActions";
import ResultDetails from "./ResultDetails";

export interface Props {
  id: string | number;
  title: string;
  type: "cache" | "database" | "domain" | "network" | "project";
  result: Cache | Database | Domain | Network | Project;
}

export default function ResultItem(props: Props) {
  return (
    <List.Item
      key={props.id}
      title={props.title}
      icon={{ value: "list-icon.png", tooltip: "List Icon" }}
      actions={<ResultActions {...props} />}
      detail={<ResultDetails {...props} />}
    />
  );
}

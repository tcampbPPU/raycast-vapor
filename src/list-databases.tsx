import { ActionPanel, List, Action, open } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getDatabases } from "./api/databases";

export default function Command() {
  const { data: databases, isLoading } = useCachedPromise(getDatabases, [], { execute: true });

  return (
    <List>
      {!isLoading &&
        databases &&
        databases.map((database) => (
          <List.Item
            key={database.id}
            title={database.name}
            icon={{ value: "list-icon.png", tooltip: "database Icon" }}
            actions={
              <ActionPanel>
                <Action
                  title="Show Details"
                  onAction={() => {
                    console.log(database.id);
                    open(`https://vapor.laravel.com/app/databases/${database.id}`);
                  }}
                />
              </ActionPanel>
            }
          />
        ))}

      {isLoading && <List.Item title="Loading..." />}

      {!isLoading && !databases && <List.EmptyView title="No databases" description="No databases found" />}
    </List>
  );
}

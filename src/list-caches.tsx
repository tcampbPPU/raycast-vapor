import { ActionPanel, List, Action, open } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getCaches } from "./api/caches";

export default function Command() {
  const { data: caches, isLoading } = useCachedPromise(getCaches, [], { execute: true });

  return (
    <List>
      {!isLoading &&
        caches &&
        caches.map((cache) => (
          <List.Item
            key={cache.id}
            title={cache.name}
            icon={{ value: "list-icon.png", tooltip: "cache Icon" }}
            actions={
              <ActionPanel>
                <Action
                  title="Show Details"
                  onAction={() => {
                    console.log(cache.id);
                    open(`https://vapor.laravel.com/app/caches/${cache.id}`);
                  }}
                />
              </ActionPanel>
            }
          />
        ))}

      {isLoading && <List.Item title="Loading..." />}

      {!isLoading && !caches && <List.EmptyView title="No caches" description="No caches found" />}
    </List>
  );
}

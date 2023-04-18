import { ActionPanel, List, Action, open } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getDomains } from "./api/domains";

export default function Command() {
  const { data: domains, isLoading } = useCachedPromise(getDomains, [], { execute: true });

  return (
    <List>
      {!isLoading &&
        domains &&
        domains.map((domain) => (
          <List.Item
            key={domain.id}
            title={domain.zone}
            icon={{ value: "list-icon.png", tooltip: "domain Icon" }}
            actions={
              <ActionPanel>
                <Action
                  title="Show Details"
                  onAction={() => {
                    console.log(domain.id);
                    open(`https://vapor.laravel.com/app/domains/${domain.id}`);
                  }}
                />
              </ActionPanel>
            }
          />
        ))}

      {isLoading && <List.Item title="Loading..." />}

      {!isLoading && !domains && <List.EmptyView title="No domains" description="No domains found" />}
    </List>
  );
}

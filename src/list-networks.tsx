import { ActionPanel, List, Action, open } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getNetworks } from "./api/networks";

export default function Command() {
  const { data: networks, isLoading } = useCachedPromise(getNetworks, [], { execute: true });

  return (
    <List>
      {!isLoading &&
        networks &&
        networks.map((network) => (
          <List.Item
            key={network.id}
            title={network.name}
            icon={{ value: "list-icon.png", tooltip: "network Icon" }}
            actions={
              <ActionPanel>
                <Action
                  title="Show Details"
                  onAction={() => {
                    console.log(network.id);
                    open(`https://vapor.laravel.com/app/networks/${network.id}`);
                  }}
                />
              </ActionPanel>
            }
          />
        ))}

      {isLoading && <List.Item title="Loading..." />}

      {!isLoading && !networks && <List.EmptyView title="No networks" description="No networks found" />}
    </List>
  );
}

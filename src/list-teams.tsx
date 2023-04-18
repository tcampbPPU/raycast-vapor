import { ActionPanel, Detail, List, Action, open } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getTeams } from "./api/teams";

export default function Command() {
 const {
    data: teams,
    isLoading,
  } = useCachedPromise(getTeams, [], { execute: true });

  return (
    <List>
        {!isLoading && teams && teams.map((team) => (
            <List.Item
                key={team.id}
                title={team.name}
                icon={{value: 'list-icon.png', tooltip: 'Team Icon'}}
                actions={
                    <ActionPanel>
                        <Action 
                            title="Show Details"
                            onAction={() => {
                                open('https://vapor.laravel.com/');
                            }}
                        />
                    </ActionPanel>
                }
            />
        ))}

        {isLoading && (
            <List.Item
                title="Loading..."
            />
        )}

        {!isLoading && !teams && (
            <List.EmptyView
                title="No Teams"
                description="No teams found"
            />
        )}
    </List>
  );
}

import { ActionPanel, List, Action } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getProjects } from "./api/projects";

export default function Command() {
 const {
    data: projects,
    isLoading,
  } = useCachedPromise(getProjects, [], { execute: true });

  return (
    <List>
        {!isLoading && projects && projects.map((project) => (
            <List.Item
                key={project.id}
                title={project.name}
                icon={{value: 'list-icon.png', tooltip: 'Project Icon'}}
                actions={
                    <ActionPanel>
                        <Action 
                            title="Show Details"
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

        {!isLoading && !projects && (
            <List.EmptyView
                title="No projects"
                description="No projects found"
            />
        )}
    </List>
  );
}

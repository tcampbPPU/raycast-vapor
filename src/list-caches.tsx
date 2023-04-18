import { List } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { getCaches } from "./api/caches";
import ResultItem from "./components/ResultItem";

export default function Command() {
  const { data: caches, isLoading } = useCachedPromise(getCaches, [], { execute: true });

  return (
    <List>
      {!isLoading &&
        caches &&
        caches.map((cache) => (
          <ResultItem key={cache.id} id={cache.id} title={cache.name} result={cache} type={"cache"} />
        ))}

      {isLoading && <List.Item title="Loading..." />}

      {!isLoading && !caches && <List.EmptyView title="No caches" description="No caches found" />}
    </List>
  );
}

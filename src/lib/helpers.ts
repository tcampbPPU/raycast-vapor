import { getPreferenceValues } from "@raycast/api";

export function getAuthToken() {
  return getPreferenceValues().vapor_token;
}

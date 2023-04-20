export type CloudProvider = {
  id: number;
  team_id: number;
  uuid: string;
  name: string;
  type: string;
  role_arn: string;
  role_sync: boolean;
  sns_topic_arn: string;
  network_limit: number;
  last_deleted_rest_api_at: Date | null;
  queued_for_deletion: boolean;
  budget_status: string | null;
  budget_amount: number | null;
  budget_notifications: string[];
  created_at: Date;
  updated_at: Date;
};

export type User = {
  id: number;
  name: string;
  email: string;
  current_team_id: number;
  teams: Array<Team>;
  owned_teams: Array<Team>;
  avatar_url: string;
  uses_two_factor_authentication: boolean;
  is_sandboxed: boolean;
};

export type Team = {
  id: number;
  user_id: number;
  name: string;
  personal_team: boolean;
  owner: {
    id: number;
    name: string;
    email: string;
    avatar_url: string;
  };
};

export type Teams = Array<Team>;

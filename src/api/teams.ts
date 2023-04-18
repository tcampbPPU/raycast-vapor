import { request } from '../lib/request'

export type Team = {
    id: number
    user_id: number
    name: string
    personal_team: boolean
    owner: {
        id: number
        name: string
        email: string
        avatar_url: string
    }
}

export type Teams = Array<Team>

export async function getTeams(): Promise<Teams> {

    return Promise.all([
        request<Teams>('teams'),
        request<Teams>('owned-teams')
    ]).then((values) => {
        return [...values[0], ...values[1]]
    })
}
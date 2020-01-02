import unirest from 'unirest'
import apiKey from '../../.rapiapi-key'

const apiUrl = 'https://api-football-v1.p.rapidapi.com/v2/'
const reqHeaders = {
  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  'x-rapidapi-key': apiKey,
}

const apiGet = query => {
  const req = unirest.get(`${apiUrl}${query}`).headers(reqHeaders)
  console.log('req', req.options)
  return req
}

export const getAllLeagues = () => {
  await apiGet('leagues/country/zambia/2019')
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}

export const getStandings2019 = () => {
  const league_id = 805
  apiGet(`leagueTable/${league_id}`)
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}

export const getTeamInfo = () => {
  const team_id = 5214
  apiGet(`teams/team/${team_id}`)
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}

export const getTeamFixtures = () => {
  const team_id = 5214
  apiGet(`fixtures/team/${team_id}`)
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}

export const getTeamStatistics = (callback) => {
  const team_id = 5214
  const league_id = 805
  apiGet(`statistics/${league_id}/${team_id}`)
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}

export function getLeagues2020() {
  return apiGet(`leagues/country/zambia/2020`)
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}


export function getStandings2020() {
  const league_id = 960
  return apiGet(`leagueTable/${league_id}`)
    .then(res => {
      if (res.error) throw new Error(res.error)
      return res.body
    })
}

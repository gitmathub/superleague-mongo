import { insertStandings } from './standings-service'

it('inserts standigs data', async () => {
  const feedback = await insertStandings()
  expect(feedback).not.toBeNull()
})


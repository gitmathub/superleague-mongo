import standings from './standings-resources'

it('has data', () => {
  console.log(standings)
  expect(standings.country).toContain('Zambia')
})
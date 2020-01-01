import { testCall } from './test-api'

it('gives a valid response', async () => {
  const responseBody = testCall()
  expect(responseBody).not.toBeNull()
})

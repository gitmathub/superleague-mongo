import unirest from 'unirest'

const req = unirest('GET', 'https://api-football-v1.p.rapidapi.com/v2/predictions/157462')

export const testCall = () => {
  req.headers({
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': 'b9caf2235emsh09c5ec484b34e2ep10f658jsnfb81c65696a0',
  })

  req.end(function(res) {
    if (res.error) throw new Error(res.error)

    console.log(res.body)
    return res.body
  })
}

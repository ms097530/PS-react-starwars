const BASE_URL = 'https://swapi.dev/api'

export default async function getAllStarships()
{
    let res = await fetch(`${BASE_URL}/starships`)
    let starships = await res.json()
    return starships
}
export const BASE_URL =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"

export const exerciseOptions = {
  method: "GET",
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}

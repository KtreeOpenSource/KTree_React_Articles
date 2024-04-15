// fetchData.js

import AppSyncClient from './AppSyncClient'
import { GET_MY_DATA } from './queries'

const fetchData = async () => {
  try {
    const result = await AppSyncClient.query({ query: GET_MY_DATA })
    console.log(result.data)
    return result.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default fetchData

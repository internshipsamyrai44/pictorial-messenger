import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../const/baseUrl'
import { getCookie } from '../utils/cookieUtils'

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',

  prepareHeaders: headers => {
    const token = getCookie('accessToken')

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

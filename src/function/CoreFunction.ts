import { AxiosRequestConfig } from 'axios'
import React from 'react'
import API from '../consts/API'

export const GetMethodFetcher = async (url: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: url,
  }
  return await API(config).then((response) => response.data)
}

import { FetchArgs } from './types'

class API {
  private readonly baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async fetch<ResponseType = unknown>({ path = '', method = 'GET', body, signal, headers = {}, ...rest }: FetchArgs) {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method,
      signal,
      headers: {
        ContentType: 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
      ...rest,
    })
    return (await response.json()) as Awaited<ResponseType>
  }
}

export { API }

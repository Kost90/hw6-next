export interface FetchArgs extends Omit<RequestInit, 'body'> {
  path?: string
  body?: Record<string, unknown>
}
//
//
// const body: Record<string, unknown> = {
//   name: 'John',
//   age: 23
// }

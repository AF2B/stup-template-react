import RequestService from './RequestService';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export function makeHttpRequest<T>(
  url: string,
  method: HttpMethod,
  options?: RequestInit
): Promise<T> {
  const requestOptions: RequestInit = options || {};
  switch (method) {
    case HttpMethod.GET:
      return RequestService.get<T>(url);
    case HttpMethod.POST:
      return RequestService.post<T>(url, requestOptions);
    case HttpMethod.PUT:
      return RequestService.put<T>(url, requestOptions);
    case HttpMethod.DELETE:
      return RequestService.delete<T>(url, requestOptions);
    case HttpMethod.PATCH:
      return RequestService.patch<T>(url, requestOptions);
    default:
      throw new Error(`Invalid HTTP method: ${method}`);
  }
}

export default makeHttpRequest;

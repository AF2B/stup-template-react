class RequestService {
  public static makeRequest<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('An error ocurred while fetching the data');
          }
          return response.json() as Promise<T>;
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  public static get<T>(url: string): Promise<T> {
    return this.makeRequest(url);
  }

  public static post<T>(url: string, options: RequestInit): Promise<T> {
    const modifiedOptions: RequestInit = {
      method: 'POST',
      ...options,
    };

    return this.makeRequest<T>(url, modifiedOptions);
  }

  public static put<T>(url: string, options: RequestInit): Promise<T> {
    const modifiedOptions: RequestInit = {
      method: 'PUT',
      ...options,
    };

    return this.makeRequest<T>(url, modifiedOptions);
  }

  public static delete<T>(url: string, options: RequestInit): Promise<T> {
    const modifiedOptions: RequestInit = {
      method: 'DELETE',
      ...options,
    };

    return this.makeRequest<T>(url, modifiedOptions);
  }

  public static patch<T>(url: string, options: RequestInit): Promise<T> {
    const modifiedOptions: RequestInit = {
      method: 'PATCH',
      ...options,
    };

    return this.makeRequest<T>(url, modifiedOptions);
  }
}

export default RequestService;

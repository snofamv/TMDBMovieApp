export abstract class HttpAdapter {
  constructor() {
    console.log(`Inicializando HttpAdapter: ${HttpAdapter.toString}`);
  }

  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}

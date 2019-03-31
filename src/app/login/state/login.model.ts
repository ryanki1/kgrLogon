export interface LoginState {
  name: string;
  token: string;
}

/**
 * A factory function that creates Login
 */
export function createLogin() {
  return {
    name: null,
    token: null
  } as LoginState;
}

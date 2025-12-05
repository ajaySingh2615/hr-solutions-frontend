export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface User {
  username: string;
  roles: string[];
}

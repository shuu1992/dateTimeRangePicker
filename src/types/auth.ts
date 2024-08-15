// ==============================|| AUTH TYPES  ||============================== //
export type UserProfile = {
  id: number;
  role_id: number;
  role_name: string;
  username: string;
  login_ip: string;
  login_time: string;
  login_count: number;
  status: number;
  backstage: number;
};

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null;
  token?: string | null;
}
export type JWTContextType = {
  authState: AuthProps;
  authDispatch: React.Dispatch<any>;
};

import { useAppSelector } from '../hooks/reduxHooks'

export function useAuth() {
  const { email, token, id } = useAppSelector((state: any) => state.user)

  return {
    user: !!email,
    email,
    token,
    id,
  }
}

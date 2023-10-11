import { useAppSelector } from '../hooks/reduxHooks'

export function useAuth() {
  const { email, token, id, password } = useAppSelector(
    (state: any) => state.user,
  )

  return {
    user: !!email,
    email,
    token,
    id,
    password,
  }
}

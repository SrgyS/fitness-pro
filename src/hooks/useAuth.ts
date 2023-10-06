import { useAppSelector } from '../hooks/reduxHooks'

export function useAuth() {
  const { email, userName, token, id } = useAppSelector(
    (state: any) => state.user,
  )

  return {
    isAuth: !!email,
    email,
    token,
    id,
    userName,
  }
}

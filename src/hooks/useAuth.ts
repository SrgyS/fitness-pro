import { useAppSelector } from '../hooks/reduxHooks'
import { RootState } from '../store'

export function useAuth() {
  const { email, token, id, password } = useAppSelector(
    (state: RootState) => state.user,
  )

  return {
    user: !!email,
    email,
    token,
    id,
    password,
  }
}

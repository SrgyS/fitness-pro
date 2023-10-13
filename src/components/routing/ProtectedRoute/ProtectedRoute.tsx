import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
  redirectPath?: string
  isAllowed: boolean
}

export const ProtectedRoute = ({
  redirectPath = '/',
  isAllowed,
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}

import { Suspense, lazy } from 'react'

import { Route, Routes } from 'react-router-dom'
import Spinner from '../../components/ui/Spinner'
import NotFound from '../../pages/errors/not-found'

const MemberManage = lazy(() => import('./manage'))
const Detail = lazy(() => import('./detail/detail'))
const MemberRegister = lazy(() => import('./register'))

const MemberRoute = () => {
  return (
    <Routes>
      <Route
        path="manage/*"
        element={
          <Suspense fallback={<Spinner />}>
            <MemberManage />
          </Suspense>
        }
      />
      <Route
        path="detail/*"
        element={
          <Suspense fallback={<Spinner />}>
            <Detail />
          </Suspense>
        }
      />
      <Route
        path="register/*"
        element={
          <Suspense fallback={<Spinner />}>
            <MemberRegister />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default MemberRoute

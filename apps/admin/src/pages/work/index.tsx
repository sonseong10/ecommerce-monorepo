import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from 'components/ui/Spinner'
const WorkManage = lazy(() => import('./manage/manage'))
const WorkRegister = lazy(() => import('./register/register'))
const WorkDetail = lazy(() => import('./detail'))

export default function WorkRoutes() {
  return (
    <Routes>
      <Route
        path="register/*"
        element={
          <Suspense fallback={<Spinner />}>
            <WorkRegister />
          </Suspense>
        }
      />
      <Route
        path="manage/*"
        element={
          <Suspense fallback={<Spinner />}>
            <WorkManage />
          </Suspense>
        }
      />
      <Route
        path="detail/*"
        element={
          <Suspense fallback={<Spinner />}>
            <WorkDetail />
          </Suspense>
        }
      />
    </Routes>
  )
}

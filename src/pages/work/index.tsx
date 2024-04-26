import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from 'components/ui/Spinner'
const WorkManage = lazy(() => import('./manage/manage'))
const WorkRegister = lazy(() => import('./register/register'))

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
    </Routes>
  )
}

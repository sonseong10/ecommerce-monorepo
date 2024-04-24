import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from 'components/ui/Spinner'
const WorkManage = lazy(() => import('./manage/manage'))
const WorkRegister = lazy(() => import('./register/register'))

interface IWorkProps {
  userId: string
  works?: {
    [key: string]: {
      contents: string
      time: number
      title: string
    }
  }
  createWork: (work: { contents: string; time: number; title: string }) => void
  updateWork: (work: { contents: string; time: number; title: string }) => void
  deleteWork: (work: { contents: string; time: number; title: string }) => void
  dark: boolean
}

export default function WorkRoutes(props: IWorkProps) {
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
            <WorkManage {...props} />
          </Suspense>
        }
      />
    </Routes>
  )
}

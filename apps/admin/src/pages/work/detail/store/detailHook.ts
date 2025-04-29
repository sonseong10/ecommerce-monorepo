import type { IRegisterWorkVo } from 'pages/work/register/store/registerVo'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import WorkRepository from 'service/work-repository'

const workService = new WorkRepository()
export const useInitDetail = () => {
  const location = useLocation()
  const [work, setWork] = useState<IRegisterWorkVo | undefined>(undefined)
  const init = () => {
    workService.syncWork(location.pathname.split('/').pop()!, value => {
      setWork(value)
    })
  }

  useEffect(() => {
    init()
  }, [])

  return work
}

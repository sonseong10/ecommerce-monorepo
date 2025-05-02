import type { IRegisterWorkVo } from '../../../../pages/work/register/store/registerVo'
import { useEffect, useState } from 'react'
import WorkRepository from '../../../../service/work-repository'

const workServie = new WorkRepository()
export const useInitWorkList = () => {
  const [list, setList] = useState<IRegisterWorkVo[] | undefined>(undefined)
  const init = () => {
    workServie.syncWorks(result => {
      setList(Object.values(result).map((work, index) => ({ ...work, code: Object.keys(result)[index] })))
    })
  }

  useEffect(() => {
    init()
  }, [])

  return list
}

export const useRemoveWork = () => (code: string) => {
  workServie.removeWork(code)
}

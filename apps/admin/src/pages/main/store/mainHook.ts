import { useSelectorEq } from '@ecommerce/commons'
import { useEffect, useState } from 'react'
import WorkRepository from '../../../service/work-repository'
import type { IState } from '../../../store/modules'

const workService = new WorkRepository()

export const useWorkCount = () => {
  const { code } = useSelectorEq((state: IState) => ({ code: state.auth.user?.uid ? state.auth.user?.uid : undefined }))
  const [count, setCount] = useState<{ text: string; value: number }[]>([])
  useEffect(() => {
    if (code) {
      workService.syncWorks(result => {
        let expected = 0
        let progress = 0
        let completed = 0
        const expectedWorks = Object.values(result).filter(work => work.workState === 0)
        expectedWorks.map(work => {
          work.referrer.findIndex(({ code }: { code: string }) => code === code) > -1 && expected++
        })

        const progressWorks = Object.values(result).filter(work => work.workState === 1)
        progressWorks.map(work => {
          work.referrer.findIndex(({ code }: { code: string }) => code === code) > -1 && progress++
        })

        const completedWorks = Object.values(result).filter(work => work.workState === 2)
        completedWorks.map(work => {
          work.referrer.findIndex(({ code }: { code: string }) => code === code) > -1 && completed++
        })

        setCount([
          { text: '예정업무', value: expected },
          { text: '작업중인업무', value: progress },
          { text: '완료업무', value: completed },
        ])
      })
    }
  }, [code])

  return count
}

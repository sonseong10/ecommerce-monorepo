import { useEffect, useState } from 'react'
import CardRepository from 'service/card_repository'
import type { IMemberVo } from './manageVo'

const memberService = new CardRepository()

export const useInitMember = () => {
  const [member, setMember] = useState<IMemberVo[] | undefined>(undefined)
  const init = () => {
    memberService.syncCards(members => {
      const data = Object.values(members).map((item, index) => ({ ...item, code: Object.keys(members)[index] }))
      setMember(data)
    })
  }

  useEffect(() => {
    init()
  }, [])

  return member
}

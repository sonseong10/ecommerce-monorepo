import type { IMemberVo } from 'pages/member/manage/store/manageVo'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardRepository from 'service/card_repository'

const memberService = new CardRepository()

export const useInitMemberDetail = () => {
  const location = useLocation()
  const [card, setCard] = useState<IMemberVo | undefined>(undefined);

  useEffect(() => {
    const init = () => {
      memberService.syncCard(location.pathname.split("/").pop()!, (value) => {
        setCard(value);
      });
    };

    init();
  }, [location.pathname]);

  return card
}

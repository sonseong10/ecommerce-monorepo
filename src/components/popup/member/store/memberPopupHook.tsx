import type { ButtonState, PopupCallBackParam } from 'commons/popup/store/absPopupVo'
import { useSelectorEq } from 'commons/store/common'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardRepository from 'service/card_repository'
import type { IState } from 'store/modules'
import type { ICardVo } from 'types/grobal-type'
import type { IMemberPopupReturnData } from './memberPopupVo'
import { rdxPopupOpen } from 'commons/popup/store/popupR'
import { PopupType } from 'components/popup/PopupType'
import { WorkPopupButtonGroup } from '../MemberPopup'

export const useMemberList = () => {
  const [memberList, setMembereList] = useState<ICardVo[] | undefined>(undefined)

  const cardService = new CardRepository()
  const { userCode } = useSelectorEq((state: IState) => ({
    userCode: state.auth.user?.uid ? state.auth.user?.uid : '',
  }))

  useEffect(() => {
    cardService.syncCards(value => {
      setMembereList(
        Object.values(value)
          .map((card, index) => ({ ...card, code: Object.keys(value)[index] }))
          .filter(i => i.code !== userCode),
      )
    })
  }, [])

  return memberList
}

export const useMemberPopup = () => {
  const dispatch = useDispatch()
  const memberPopup = async (
    data?: undefined,
    title?: string,
    callBack?: (v?: { state: ButtonState; list?: IMemberPopupReturnData[] }) => void,
  ) => {
    const inCallBack = (result: PopupCallBackParam) => {
      if (callBack) {
        callBack(result as { state: ButtonState; list?: IMemberPopupReturnData[] })
      }
    }
    dispatch(
      rdxPopupOpen({
        width: 620,
        type: PopupType.MEMBER,
        title: title,
        data,
        callBack: inCallBack,
        buttonWrapper: WorkPopupButtonGroup,
      }),
    )
  }
  return memberPopup
}

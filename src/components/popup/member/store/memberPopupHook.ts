import type { ButtonState, PopupCallBackParam } from 'commons/popup/store/absPopupVo'
import { useSelectorEq } from 'commons/store/common'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardRepository from 'service/card_repository'
import type { IState } from 'store/modules'
import type { ICardVo } from 'types/grobal-type'
import type { IMemberPopupReturnData } from './memberPopupVo'
import { rdxPopupOpen, rdxSetPopupData } from 'commons/popup/store/popupR'
import { PopupType } from 'components/popup/PopupType'
import { WorkPopupButtonGroup } from '../MemberPopup'
import type { ICommonsStore } from 'commons'

export const useMemberList = () => {
  const [memberList, setMembereList] = useState<ICardVo[]>([])

  const cardService = new CardRepository()
  const { userCode } = useSelectorEq((state: IState) => ({
    userCode: state.auth.user?.uid ? state.auth.user?.uid : undefined,
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
    data?: { list?: IMemberPopupReturnData[] },
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

export const useRemoveItem = () => {
  const dispatch = useDispatch()
  const { result } = useSelectorEq((state: ICommonsStore) => ({
    result: state.popups?.returnData?.[PopupType.MEMBER]?.list,
  }))

  const remove = (code: string) => {
    dispatch(
      rdxSetPopupData({
        type: PopupType.MEMBER,
        value: {
          list: (result as IMemberPopupReturnData[]).filter(i => i.code !== code),
        },
      }),
    )
  }

  return { result, remove }
}

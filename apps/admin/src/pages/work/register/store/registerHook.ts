import { useSelectorEq } from 'commons/store/common'
import type { IState } from 'store/modules'
import { WorkRegisterUiId, type IRegisterWorkVo } from './registerVo'
import { useDispatch } from 'react-redux'
import { rdxSetReferrerList } from './registerR'
import type { IMemberPopupReturnData } from 'components/popup/member/store/memberPopupVo'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WorkRepository from 'service/work-repository'
import { useIConPopup } from 'components/popup/popupHook'

export const useWorkRegister = () => {
  const iconPopup = useIConPopup()
  const workService = new WorkRepository()
  const navigate = useNavigate()
  const { user, title, startAt, endAt, priority, workState, writer, contents, referrer } = useSelectorEq(
    (state: IState) => ({
      user: state.auth.user,
      title: state.ui.inputText?.[WorkRegisterUiId.TITLE],
      startAt: state.ui.inputText?.dueDate_start,
      endAt: state.ui.inputText?.dueDate_end,
      priority: state.ui.selectbox?.priority,
      workState: state.ui.selectbox?.workState,
      writer: state.auth.user?.displayName,
      contents: state.ui.inputText?.[WorkRegisterUiId.CONTENTS],
      referrer: state.memberRegister.referrerList,
    }),
  )

  const register = () => {
    const data: IRegisterWorkVo = {
      contents: contents ? contents : '',
      createdAt: Date.now(),
      endAt: endAt ? endAt : '',
      startAt: startAt ? startAt : '',
      title: title ? title : '',
      priority: priority ? Number(priority) : 0,
      workState: workState ? Number(workState) : 0,
      writer: writer ? writer : '',
      updatedAt: '',
      referrer: [
        ...referrer!,
        { code: user!.uid, name: user?.displayName ? user?.displayName : '', team: '개발', theme: 'Gray' },
      ],
    }

    workService.saveWork(data)

    iconPopup(
      'alert',
      {
        iconColor: '3CADFF',
        iconType: 'Check',
        title: '등록완료',
        desc: '업무가 등록되었습니다.',
      },
      undefined,
      v => {
        v && navigate('/admin/work/manage')
      },
    )
  }

  return { register }
}

export const useReferrerListAction = () => {
  const dispatch = useDispatch()

  const change = (value: IMemberPopupReturnData[]) => {
    dispatch(rdxSetReferrerList(value))
  }

  return change
}

export const useReferrerList = () => {
  const { list } = useSelectorEq((state: IState) => ({
    list: state.memberRegister.referrerList,
  }))
  return list
}

export const useReferrerListReset = () => {
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(rdxSetReferrerList())
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])
}

export const useToList = () => {
  const navigate = useNavigate()
  return () => navigate('/admin/work/manage')
}

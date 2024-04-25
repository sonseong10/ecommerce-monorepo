import { useSelectorEq } from 'commons/store/common'
import type { IState } from 'store/modules'
import { WorkRegisterUiId } from './registerVo'

export const useWorkRegister = () => {
  const { title, startAt, endAt, priority, workState, writer } = useSelectorEq((state: IState) => ({
    title: state.ui.inputText?.[WorkRegisterUiId.TITLE],
    startAt: state.ui.inputText?.dueDate_start,
    endAt: state.ui.inputText?.dueDate_end,
    priority: state.ui.selectbox?.priority,
    workState: state.ui.selectbox?.workState,
    writer: state.auth.user?.uid,
  }))
  const register = () => {
    console.log(title, startAt, endAt, priority, workState, writer)
  }

  return { register }
}

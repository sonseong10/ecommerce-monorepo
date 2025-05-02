import type { IMemberPopupReturnData } from '../../../../components/popup/member/store/memberPopupVo'

export enum WorkRegisterUiId {
  TITLE = 'workTitle',
  DUE_DATE = 'dueDate',
  PRIORITY = 'priority',
  WORK_STATE = 'workState',
  CONTENTS = 'workContents',
}

export interface IRegisterWorkVo {
  title: string
  startAt: string
  endAt: string
  priority: number
  workState: number
  writer: string
  contents: string
  referrer: IMemberPopupReturnData[]
  createdAt?: string | number
  updatedAt?: string | number
  code?: string
}

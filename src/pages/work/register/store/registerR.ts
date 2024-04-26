import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IMemberPopupReturnData } from 'components/popup/member/store/memberPopupVo'

export interface IMemberRegisterState {
  referrerList?: IMemberPopupReturnData[]
}

const name = 'memberRegister'

const memberRegisterSlice = createSlice({
  name,
  initialState: {} as IMemberRegisterState,
  reducers: {
    rdxSetReferrerList(state: IMemberRegisterState, action: PayloadAction<IMemberPopupReturnData[] | undefined>) {
      state.referrerList = action.payload
    },
  },
})

export const { rdxSetReferrerList } = memberRegisterSlice.actions

export default memberRegisterSlice.reducer

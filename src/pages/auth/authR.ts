import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Grade } from 'store/storageVo'

const name = 'auth'
export interface IAuthState {
  isLogin: boolean
  grade?: Grade
}

const authSlice = createSlice({
  name,
  initialState: {
    isLogin: false,
  } as IAuthState,
  reducers: {
    rdxIsLogin(state: IAuthState, action: PayloadAction<boolean>) {
      state.isLogin = action.payload
    },
  },
})

// eslint-disable-next-line no-empty-pattern
export const { rdxIsLogin } = authSlice.actions

export default authSlice.reducer

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from 'firebase/auth'
import type { Grade } from 'store/storageVo'

const name = 'auth'
export interface IAuthState {
  isLogin: boolean
  grade?: Grade
  user?: User
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
    rdxInitUser(state: IAuthState, action: PayloadAction<User>) {
      state.user = action.payload
    },
  },
})

// eslint-disable-next-line no-empty-pattern
export const { rdxIsLogin, rdxInitUser } = authSlice.actions

export default authSlice.reducer

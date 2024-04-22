import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IProductVo } from './detailVo'

export const name = 'productDetail'

export interface IProductDetailState {
  //
  product: IProductVo
}

const productDetail = createSlice({
  name,
  initialState: {
    //
  } as IProductDetailState,
  reducers: {
    rdxSetProduct(state: IProductDetailState, action: PayloadAction<IProductVo>) {
      state.product = action.payload
    },
  },
})

export const { rdxSetProduct } = productDetail.actions

export default productDetail.reducer

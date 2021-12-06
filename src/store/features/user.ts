import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'store'
import { StoreSlices } from 'store/types'

export type UserState = {
  id: number
}

const initialState: UserState = {
  id: 1
}

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    }
  }
})

export const { saveId } = userSlice.actions

export const selectId = (state: RootState) => state.user.id

export default userSlice.reducer

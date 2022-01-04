import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RolesEnum } from 'models'
import type { RootState } from 'store'
import { StoreSlices } from 'store/types'

export type UserState = {
  id: number
  role: RolesEnum
}

const initialState: UserState = {
  id: 1,
  role: RolesEnum.ADMIN
}

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    saveRole: (state, action: PayloadAction<RolesEnum>) => {
      state.role = action.payload
    }
  }
})

export const { saveId, saveRole } = userSlice.actions

export const selectId = (state: RootState) => state.user.id
export const selectRole = (state: RootState) => state.user.role

export default userSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RolesEnum } from 'models'
import type { RootState } from 'store'
import { StoreSlices } from 'store/types'

export type UserState = {
  id: number
  role: RolesEnum
}

const initialState: UserState = {} as UserState

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserState>) => {
      return { ...action.payload }
    }
  }
})

export const { saveUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user
export const selectRole = (state: RootState) => state.user.role

export default userSlice.reducer

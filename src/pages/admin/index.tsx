import { RolesEnum } from 'models'
import { saveRole } from 'store/features/user'
import { useAppDispatch } from 'store/hooks'

export default function Home() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(saveRole(RolesEnum.CLIENT))
        }}
      >
        Change user
      </button>
    </div>
  )
}

Home.allowedRoles = [RolesEnum.ADMIN]

import { saveId, selectId } from 'store/features/user'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export default function Home() {
  const id = useAppSelector(selectId)
  const dispatch = useAppDispatch()

  return (
    <>
      <button
        onClick={() => {
          dispatch(saveId(id + 1))
        }}
      >
        Update id
      </button>
    </>
  )
}

import React from 'react'

import { CustomAppProps } from 'pages/_app'
import { selectRole } from 'store/features/user'
import { useAppSelector } from 'store/hooks'

const ComponentWrapper = ({ Component, pageProps }: CustomAppProps) => {
  const role = useAppSelector(selectRole)
  if (Component.allowedRoles?.length && !Component.allowedRoles.includes(role)) {
    return <h1>Unauthorized</h1>
  }

  return <Component {...pageProps} />
}

export default ComponentWrapper

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { CustomAppProps } from 'pages/_app'
import { selectRole } from 'store/features/user'
import { useAppSelector } from 'store/hooks'

const ComponentWrapper = ({ Component, pageProps }: CustomAppProps) => {
  const router = useRouter()
  const role = useAppSelector(selectRole)

  const [isLoading, setIsLoading] = useState(true)

  const verifyAuth = useCallback(() => {
    if (Component.allowedRoles?.length && !Component.allowedRoles.includes(role)) {
      return router.push('/')
    }

    setIsLoading(false)
  }, [Component, role, router])

  useEffect(() => {
    verifyAuth()
  }, [verifyAuth])

  return <>{!isLoading && <Component {...pageProps} />}</>
}

export default ComponentWrapper

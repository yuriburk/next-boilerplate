import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import ComponentWrapper from 'components/ComponentWrapper'
import { store, persistor } from 'store'
import { RolesEnum } from 'models'
import GlobalStyle from 'styles/global'
import { theme } from 'styles/theme'

export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { allowedRoles?: RolesEnum[] }
}

function App(props: CustomAppProps) {
  return (
    <>
      <Head>
        <title>Burk.dev Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#05092B" />
        <meta name="description" content="A boilerplate with Next JS" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ComponentWrapper {...props} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

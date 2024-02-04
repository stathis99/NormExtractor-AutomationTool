import '@/styles/globals.css'
import { Fragment } from 'react'

import { StyledEngineProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'

import Layout from '@/components/common/structural/layout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const name = 'DSP'

  return (
    <Fragment>
      <Head>
        <title>{`${name}${
          router.pathname !== '/'
            ? ` | ${router.pathname.split('/')[1].charAt(0).toUpperCase()}${router.pathname.split('/')[1].slice(1)}`
            : ' | Home'
        }`}</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
      <Toaster toastOptions={{ duration: 2500 }} />
    </Fragment>
  )
}

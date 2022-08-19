import { withTRPC } from '@trpc/next'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../src/styled-components/theme'
import { GlobalStyle } from '../src/styled-components/global'
import { AppRouter } from '../src/server/routers/app'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}

function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''
    }

    if (process.env.VERCEL_URL) {
        return `http://${process.env.VERCEL_URL}`
    }
    if (process.env.RENDER_INTERNAL_HOSTNAME) {
        return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
    }
    return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
    config({ ctx }) {
        return {
            url: `${getBaseUrl()}/api/trpc`,
        }
    },
    ssr: true,
    responseMeta({ clientErrors, ctx }) {
        if (clientErrors.length) {
            return {
                status: clientErrors[0].data?.httpStatus ?? 500,
            }
        }
        const ONE_DAY_IN_SECONDS = 60 * 60 * 24
        return {
            'Cache-Control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
        }
    },
})(MyApp)

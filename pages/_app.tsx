import Starlight from '@starlightcms/react-sdk'
import 'swiper/css'

Starlight.configure({
  workspace: process.env.NEXT_PUBLIC_STARLIGHT_WORKSPACE,
  baseUrl: process.env.NEXT_PUBLIC_STARLIGHT_BASE_URL,
  debug: process.env.NODE_ENV === 'development',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

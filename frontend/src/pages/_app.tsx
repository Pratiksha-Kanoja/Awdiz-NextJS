//to define the global layout

import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
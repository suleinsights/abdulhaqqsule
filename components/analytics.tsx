'use client'
import { useEffect } from 'react'
import Script from 'next/script'

const Analytics = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('121249922434750')
        ReactPixel.pageView()
      })
  }, [])
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-E3QKGLQ812' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-E3QKGLQ812');
        `}
      </Script>
    </>
  )
}
export default Analytics

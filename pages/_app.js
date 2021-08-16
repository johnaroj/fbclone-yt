import '../styles/globals.css'
import {Provider} from "next-auth/client"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
          <Component {...pageProps} />  
    </Provider>

  )
  

}

export default MyApp

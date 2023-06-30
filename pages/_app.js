import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/footer.css'
import { FormspreeProvider } from '@formspree/react'


export default function App({ Component, pageProps }) {
   return
  <FormspreeProvider project=''>
  <Component {...pageProps} />
  </FormspreeProvider>
}

import Layout from '@/components/layout/Main';
import UserContextProvider from '@/context/UserContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  )
}

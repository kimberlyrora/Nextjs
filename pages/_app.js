//just should be imported here!
import '../styles/globals.css';
import Layout from '../components/Layout';

//Component: PageComponent
function MyApp({ Component, pageProps }) {
  return <Layout>
	  <Component {...pageProps} />
  </Layout>
}

export default MyApp

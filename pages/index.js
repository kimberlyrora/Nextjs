// for custom titles, metatags, keywords
import Head from 'next/head';
import ArticleList from '../components/ArticleList.js';

export default function Home({articles}) {
  return (
    <div>
		<Head>
			<title>WebDev Newz</title>
			<meta name="keywords" content="web development, programming"></meta>
		</Head>
		<ArticleList articles={articles} />
    </div>
  )
}

//getStaticProps: allow us fetching data during build time
//getServerSideProps: allow us fetching data on every request, which is slower
//getStaticPaths: dynamically generate paths base on data fetching

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async () => {	
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
	const articles = await res.json()  // your fetch function here 
	return {
		props: {
			articles
		}
	}
}
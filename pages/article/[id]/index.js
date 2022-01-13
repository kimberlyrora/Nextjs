import {useRouter} from 'next/router'
import Link from 'next/link'
const article = ({article}) => {
	//const router = useRouter()
	//const {id} = router.query
	return (
		<>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br/>
			<Link href="/">Go back</Link>
		</>
	)
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
//export const getServerSideProps = async (ctx) => {
//	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
//	const article = await res.json()  // your fetch function here 
//	return {
//		props:{
//			article
//		}
//	}
//}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
	const article = await res.json()  // your fetch function here 
	return {
		props:{
			article
		}
	}
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const articles = await res.json()  // your fetch function here

	const ids = articles.map(article => article.id)
	const paths = ids.map(id => ({params: {id: id.toString()}}))
	return {
		paths,
		fallback: false,
	}
}

export default article

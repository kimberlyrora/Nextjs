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
export const getServerSideProps = async (ctx) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
	const article = await res.json()  // your fetch function here 
	return {
		props:{
			article
		}
	}
}

export default article

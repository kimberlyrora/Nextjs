// for custom titles, metatags, keywords
import Head from 'next/head'

export default function Home() {
  return (
    <div>
		<Head>
			<title>WebDev Newz</title>
			<meta name="keywords" content="web development, programming"></meta>
		</Head>
		<h1>Welcome to next</h1>
    </div>
  )
}

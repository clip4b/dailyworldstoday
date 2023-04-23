import type { NextPage } from 'next'
const Home: NextPage = () => {
 return ( <p>Hello</p> )
}
export default Home
import { NextPage } from "next"
import { useRouter } from "next/router"
import { withLayout } from "../components/Layout"

const Post: NextPage = () => {
  const router = useRouter()

  return <h1>Post: {router.query.title}</h1>
}
export default withLayout(Post)

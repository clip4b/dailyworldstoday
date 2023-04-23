import { NextPage } from "next"
import { useRouter } from "next/router"
import { withLayout } from "../../components/Layout"

const Post: NextPage = () => {
  const router = useRouter()

  return <h1>Post: {router.query.id}</h1>
}
export default withLayout(Post)

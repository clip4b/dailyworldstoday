import { NextPage } from "next"
import Link from "next/link"
import { withLayout } from "../components/Layout"
import useSWR from "swr"

const fetcher = async (url: string) => {
  const res = await fetch(url)
  return (await res.json()) as { name: string }
}

const PostLink = ({ id }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
)

const Index: NextPage = () => {
  const { data, error } = useSWR("/api/data", fetcher)

  let name = data?.name

  if (!data) name = "Loading..."
  if (error) name = "Failed to fetch data."

  return (
    <>
      <h1>Hello world!</h1>
      <h2>{name}</h2>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ol>
        <PostLink id="First-Post"></PostLink>
        <PostLink id="Second-Post"></PostLink>
        <PostLink id="Third-Post"></PostLink>
      </ol>
    </>
  )
}

export default withLayout(Index)

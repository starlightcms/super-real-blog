import Starlight, {
  Entry,
  ModelCategory,
  StarlightError,
} from '@starlightcms/react-sdk'
import { Post } from 'src/starlight'
import { Layout } from 'src/components/Layout'
import { Card } from 'src/components/Card'
import { CardList } from 'src/styles/home'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Title } from 'src/styles/search'

type SearchProps = {
  query: string
  posts: Entry<Post>[]
  categories: ModelCategory[]
}

const Search = ({ query, posts, categories }: SearchProps) => (
  <>
    <Head>
      <title>
        {`Busca por &#8220;${query}&#8221; — Blog Super Real do Starlight`}
      </title>
    </Head>
    <Layout categories={categories}>
      <Title>Busca por &#8220;{query}&#8221;</Title>
      <CardList>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardList>
    </Layout>
  </>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const [posts, categories] = await Promise.all([
      Starlight.posts.entries.list({
        query: params.query as string,
      }),
      Starlight.posts.categories.list(),
    ])

    return {
      props: {
        query: params.query,
        posts: posts.data,
        categories: categories.data,
      },
      revalidate: 15,
    }
  } catch (e) {
    if (e instanceof StarlightError && e.response.status === 404) {
      return {
        notFound: true,
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
})

export default Search

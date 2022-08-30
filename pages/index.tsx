import Starlight, { Entry, ModelCategory } from '@starlightcms/react-sdk'
import { Post } from 'src/starlight'
import { Layout } from 'src/components/Layout'
import { Card } from 'src/components/Card'
import { CardList } from 'src/styles/home'
import Head from 'next/head'
import { GetStaticProps } from 'next'

type HomeProps = {
  posts: Entry<Post>[]
  categories: ModelCategory[]
}

const Home = ({ posts, categories }: HomeProps) => (
  <>
    <Head>
      <title>Blog Super Real do Starlight</title>
    </Head>
    <Layout categories={categories}>
      <CardList>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardList>
    </Layout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const [posts, categories] = await Promise.all([
    Starlight.posts.entries.list(),
    Starlight.posts.categories.list(),
  ])

  return {
    props: {
      posts: posts.data,
      categories: categories.data,
    },
    revalidate: 15,
  }
}

export default Home

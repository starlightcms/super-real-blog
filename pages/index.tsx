import Starlight, {
  Entry,
  ModelCategory,
  Singleton,
  StarlightListResponse,
} from '@starlightcms/react-sdk'
import { HomeSingleton, Post } from 'src/starlight'
import { Layout } from 'src/components/Layout'
import { Card } from 'src/components/Card'
import { CardList } from 'src/styles/home'
import Head from 'next/head'
import { GetStaticProps } from 'next'

type HomeProps = {
  home: Singleton<HomeSingleton>
  featuredPosts: Entry<Post>[] | null
  posts: Entry<Post>[]
  categories: ModelCategory[]
}

const Home = ({ home, featuredPosts, posts, categories }: HomeProps) => (
  <>
    <Head>
      <title>{home.data.title}</title>
    </Head>
    <Layout
      title={home.data.title}
      subtitle={home.data.subtitle}
      featuredPosts={featuredPosts}
      categories={categories}
    >
      <CardList>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardList>
    </Layout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  let featuredPosts: StarlightListResponse<Entry<Post>> = null

  const [home, posts, categories] = await Promise.all([
    Starlight.singletons.get<HomeSingleton>('home'),
    Starlight.posts.entries.list(),
    Starlight.posts.categories.list(),
  ])

  if (
    home.data.data.is_featured_enabled &&
    home.data.data.featured_collection
  ) {
    featuredPosts = await Starlight.collection(
      home.data.data.featured_collection.object.slug
    ).items()
  }

  return {
    props: {
      home: home.data,
      featuredPosts: featuredPosts?.data ?? null,
      posts: posts.data,
      categories: categories.data,
    },
    revalidate: 15,
  }
}

export default Home

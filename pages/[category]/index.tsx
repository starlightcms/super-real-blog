import Starlight, {
  Entry,
  ModelCategory,
  StarlightError,
} from '@starlightcms/react-sdk'
import { Post } from 'src/starlight'
import { Layout } from 'src/components/Layout'
import { Card } from 'src/components/Card'
import { CardList } from '../_styles'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Title } from './styles'

type CategoryProps = {
  category: ModelCategory
  posts: Entry<Post>[]
  categories: ModelCategory[]
}

const Category = ({ category, posts, categories }: CategoryProps) => (
  <>
    <Head>
      <title>{`${category.title} — Blog Super Real do Starlight`}</title>
    </Head>
    <Layout categories={categories}>
      <Title>{category.title}</Title>
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
    const [category, posts, categories] = await Promise.all([
      Starlight.posts.categories.get(params.category as string),
      Starlight.posts.category(params.category as string).entries(),
      Starlight.posts.categories.list(),
    ])

    return {
      props: {
        category: category.data,
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

export default Category

import Starlight, {
  Entry,
  ModelCategory,
  ResponsiveImage,
  VisualContent,
} from '@starlightcms/react-sdk'
import { Post } from 'src/starlight'
import { Layout } from 'src/components/Layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FeaturedImage, Title, Info, Content } from './styles'
import { toRelativeDate } from 'src/helpers/date'

type PostProps = {
  post: Entry<Post>
  categories: ModelCategory[]
}

const Post = ({ post, categories }: PostProps) => (
  <>
    <Head>
      <title>{`${post.title} — Blog Super Real do Starlight`}</title>
    </Head>
    <Layout categories={categories}>
      <Content>
        <FeaturedImage>
          <ResponsiveImage image={post.data.featured_image} />
        </FeaturedImage>
        <Title>{post.title}</Title>
        <Info>
          Por {post.author.name} • Publicado{' '}
          {toRelativeDate(new Date(post.published_at))}
        </Info>
        <VisualContent content={post.data.content} />
      </Content>
    </Layout>
  </>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [post, categories] = await Promise.all([
    Starlight.posts.entries.get(params.post as string),
    Starlight.posts.categories.list(),
  ])

  return {
    props: {
      post: post.data,
      categories: categories.data,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
})

export default Post

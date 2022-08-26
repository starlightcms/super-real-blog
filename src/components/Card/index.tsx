import { Wrapper, Content, Title, Excerpt, Info } from './styles'
import { Post } from 'src/starlight'
import { ResponsiveImage, Entry, VisualContent } from '@starlightcms/react-sdk'
import { toRelativeDate } from 'src/helpers/date'
import Link from 'next/link'

type CardProps = {
  post: Entry<Post>
}

export const Card = ({ post }: CardProps) => {
  return (
    <Wrapper>
      <Link href={`/post/${post.slug}`}>
        <a>
          <ResponsiveImage image={post.data.featured_image} />
          <Content>
            <Title>{post.title}</Title>
            <Excerpt>
              <VisualContent content={post.data.content} excerpt />
            </Excerpt>
            <Info>
              Por {post.author.name} • Publicado{' '}
              {toRelativeDate(new Date(post.published_at))}
            </Info>
          </Content>
        </a>
      </Link>
    </Wrapper>
  )
}

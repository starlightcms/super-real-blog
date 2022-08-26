import '@starlightcms/react-sdk'
import { MediaField, VisualField } from '@starlightcms/react-sdk'

type Post = {
  content: VisualField
  featured_image: MediaField
}

declare module '@starlightcms/react-sdk' {
  export interface DefaultModelDefinition {
    posts: Post
  }
}

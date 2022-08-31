import '@starlightcms/react-sdk'
import {
  MediaField,
  RelationField,
  VisualField,
  Collection,
  StringField,
  BooleanField,
} from '@starlightcms/react-sdk'

type HomeSingleton = {
  title: StringField
  subtitle: StringField
  is_featured_enabled: BooleanField
  featured_collection: RelationField<Collection<Post>>
}

type Post = {
  content: VisualField
  featured_image: MediaField
}

declare module '@starlightcms/react-sdk' {
  export interface DefaultModelDefinition {
    posts: Post
  }
}

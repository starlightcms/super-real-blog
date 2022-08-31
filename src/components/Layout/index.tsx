import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Global } from '@emotion/react'
import { globalStyles } from 'src/styles'
import {
  Container,
  Header,
  Main,
  LogoWrapper,
  LogoImageWrapper,
  LogoText,
  Content,
  Sidebar,
  SidebarItem,
  CategoryList,
  Category,
  Search,
  Carousel,
  CarouselPad,
} from './styles'
import { Logo } from 'src/components/Logo'
import { Entry, ModelCategory, ResponsiveImage } from '@starlightcms/react-sdk'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Post } from 'src/starlight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

type LayoutProps = {
  title?: string
  subtitle?: string
  featuredPosts?: Entry<Post>[] | null
  categories: ModelCategory[]
  children: ReactNode
}

export const Layout = ({
  title,
  subtitle,
  featuredPosts,
  categories,
  children,
}: LayoutProps) => {
  const { push } = useRouter()
  const [query, setQuery] = useState('')
  const swiperRef = useRef(null)

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      if (query) push(`/busca/${encodeURIComponent(query)}`)
    },
    [query, push]
  )

  return (
    <>
      {featuredPosts?.length && (
        <>
          <Carousel>
            <Swiper
              // @ts-ignore - swiper type is currently missing the ref prop
              ref={swiperRef}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{ nextEl: '.swipe-next', prevEl: '.swipe-prev' }}
            >
              {featuredPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <ResponsiveImage
                    image={post.data.featured_image}
                    sizes="100vw"
                    lazyRoot={swiperRef}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Carousel>
        </>
      )}
      <Global styles={globalStyles} />
      <Container>
        <Header>
          <LogoWrapper>
            <Link href="/">
              <a>
                <LogoImageWrapper>
                  <Logo />
                </LogoImageWrapper>
                <LogoText>
                  <h2>{title || 'Blog Super Real do Starlight'}</h2>
                  <h3>
                    {subtitle || 'Esse absolutamente não é um site de exemplo'}
                  </h3>
                </LogoText>
              </a>
            </Link>
          </LogoWrapper>
        </Header>
        {featuredPosts?.length && (
          <>
            <CarouselPad />
            <Swiper
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{ nextEl: '.swipe-next', prevEl: '.swipe-prev' }}
              allowTouchMove={false}
            >
              {featuredPosts.map((post) => (
                <SwiperSlide key={post.id}>{post.title}</SwiperSlide>
              ))}
            </Swiper>
            <button type="button" className="swipe-prev">
              prev
            </button>
            <button type="button" className="swipe-next">
              next
            </button>
          </>
        )}
        <Main>
          <Content>{children}</Content>
          <Sidebar>
            <Search onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Pesquisar"
                value={query}
                onChange={handleQueryChange}
              />
              <button />
            </Search>
            <SidebarItem>
              <h3>Categorias</h3>
              <CategoryList>
                {categories.map((category) => (
                  <Category key={category.id}>
                    <Link href={`/${category.slug}`}>
                      <a>
                        <h4>{category.title}</h4>
                        <span>{category.entry_count}</span>
                      </a>
                    </Link>
                  </Category>
                ))}
              </CategoryList>
            </SidebarItem>
          </Sidebar>
        </Main>
      </Container>
    </>
  )
}

export { Container }

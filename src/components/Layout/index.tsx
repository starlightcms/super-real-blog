import { ChangeEvent, FormEvent, ReactNode, useCallback, useState } from 'react'
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
} from './styles'
import { Logo } from 'src/components/Logo'
import { ModelCategory } from '@starlightcms/react-sdk'
import Link from 'next/link'
import { useRouter } from 'next/router'

type LayoutProps = {
  categories: ModelCategory[]
  children: ReactNode
}

export const Layout = ({ categories, children }: LayoutProps) => {
  const { push } = useRouter()
  const [query, setQuery] = useState('')

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
                  <h2>Blog Super Real do Starlight</h2>
                  <h3>Esse absolutamente não é um site de exemplo</h3>
                </LogoText>
              </a>
            </Link>
          </LogoWrapper>
        </Header>
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

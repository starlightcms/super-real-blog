import styled from '@emotion/styled'

export const Wrapper = styled.article`
  > a {
    display: block;
    background: #ffffff;
    box-shadow: 0 10px 35px -20px rgba(79, 88, 100, 0.35);
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;

    > img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
  }
`

export const Content = styled.div`
  padding: 1.5rem;
`

export const Title = styled.h2`
  margin: 0 0 0.625rem;
  font-family: 'Overpass', sans-serif;
  font-size: 1.5rem;
  letter-spacing: -0.025rem;
  color: hsla(215, 12%, 25%, 1);
`

export const Excerpt = styled.div`
  margin: 0 0 0.625rem;
  font-family: 'Cabin', sans-serif;
  font-weight: 400;
  color: hsla(215, 12%, 35%, 1);
`

export const Info = styled.div`
  font-family: 'Cabin', sans-serif;
  font-size: 0.875rem;
  color: hsla(215, 10%, 55%, 1);
`

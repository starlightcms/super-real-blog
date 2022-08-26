import styled from '@emotion/styled'

export const FeaturedImage = styled.div`
  > img {
    width: 100%;
    max-height: 30rem;
    margin-bottom: 2rem;
    border-radius: 0.9375rem;
    object-fit: cover;
  }
`

export const Title = styled.h2`
  margin: 0 0 0.625rem;
  font-family: 'Overpass', sans-serif;
  font-size: 2.5rem;
  letter-spacing: -0.045rem;
  color: hsla(215, 12%, 25%, 1);
`

export const Info = styled.div`
  margin-bottom: 2rem;
  font-family: 'Cabin', sans-serif;
  font-size: 0.875rem;
  color: hsla(215, 10%, 55%, 1);
`

export const Content = styled.article`
  font-family: 'Cabin', sans-serif;
  font-weight: 400;
  margin-bottom: 8rem;

  * {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
  }
`

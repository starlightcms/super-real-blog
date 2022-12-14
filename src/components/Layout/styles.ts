import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
`

export const Header = styled.header`
  display: flex;
  padding: 2rem 0;
`

export const LogoWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.94);
  border-radius: 0.4375rem;

  > a {
    display: flex;
    text-decoration: none;
  }
`

export const LogoImageWrapper = styled.div`
  padding: 1rem;
  background-color: #f07319;
  border-radius: 0.4375rem;

  > svg {
    display: block;
  }
`

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.75rem;

  h2 {
    margin: 0;
    font-family: 'Overpass', sans-serif;
    font-size: 1.125rem;
    color: hsla(215, 12%, 20%, 1);
    letter-spacing: -0.035em;
  }

  h3 {
    margin: 0;
    font-family: 'Cabin', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: hsla(215, 10%, 45%, 1);
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
`

export const Content = styled.div`
  //
`

export const Sidebar = styled.div`
  //
`

export const Search = styled.form`
  position: relative;
  width: 100%;

  input {
    display: block;
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 2rem;
    background: #ffffff;
    border: none;
    border-radius: 15px;
    font-family: 'Overpass', sans-serif;
    font-size: 1rem;
    box-shadow: 0 9px 23px -5px rgba(79, 88, 100, 0.11);
  }

  button {
    display: block;
    position: absolute;
    top: calc(50% - 1rem);
    right: 1.5rem;
    height: 2rem;
    width: 2rem;
    background: url("data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.37 13.7a4.26 4.26 0 0 0 4.31-4.2c0-2.28-1.89-4.2-4.31-4.2a4.26 4.26 0 0 0-4.32 4.2c0 2.28 1.9 4.2 4.32 4.2Zm0 2.4c3.7 0 6.71-2.95 6.71-6.6 0-3.65-3-6.6-6.71-6.6a6.66 6.66 0 0 0-6.72 6.6c0 3.65 3 6.6 6.72 6.6Z' fill='%234F5864'/%3E%3Crect x='13.7' y='12.5' width='11.16' height='2.4' rx='1.2' transform='rotate(45 13.7 12.5)' fill='%234F5864'/%3E%3C/svg%3E")
      center no-repeat;
    border: none;
    cursor: pointer;
  }
`

export const SidebarItem = styled.div`
  width: 100%;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 9px 23px -5px rgba(79, 88, 100, 0.11);

  > h3 {
    margin: 0 0 1rem;
    font-family: 'Overpass', sans-serif;
    font-size: 1.5rem;
    color: hsla(215, 12%, 25%, 1);
  }
`

export const CategoryList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Category = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.625rem;
  }

  > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Cabin', sans-serif;
    font-size: 0.875rem;
    text-decoration: none;

    > h4 {
      margin: 0;
      font-weight: 400;
      color: hsla(215, 12%, 35%, 1);
    }

    > span {
      padding: 0.25rem 0.625rem;
      border-radius: 1rem;
      background-color: hsla(215, 12%, 96%, 1);
      font-weight: 700;
      color: hsla(215, 12%, 20%, 1);
    }
  }
`

export const Carousel = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 80vh;

  .swiper {
    height: 100%;

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.0086472) 6.67%,
        rgba(255, 255, 255, 0.03551) 13.33%,
        rgba(255, 255, 255, 0.0816599) 20%,
        rgba(255, 255, 255, 0.147411) 26.67%,
        rgba(255, 255, 255, 0.231775) 33.33%,
        rgba(255, 255, 255, 0.331884) 40%,
        rgba(255, 255, 255, 0.442691) 46.54%,
        rgba(255, 255, 255, 0.557309) 53.33%,
        rgba(255, 255, 255, 0.668116) 60%,
        rgba(255, 255, 255, 0.768225) 66.67%,
        rgba(255, 255, 255, 0.852589) 73.33%,
        rgba(255, 255, 255, 0.91834) 80%,
        rgba(255, 255, 255, 0.96449) 86.67%,
        rgba(255, 255, 255, 0.991353) 93.33%,
        #ffffff 100%
      );
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CarouselPad = styled.div`
  width: 100%;
  height: 50vh;
  pointer-events: none;
`

export const FeaturedPost = styled.div`
  position: relative;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 0.9375rem;
  box-shadow: 0 10px 35px -20px rgba(79, 88, 100, 0.35);

  a {
    text-decoration: none;
  }

  h2 {
    margin: 0 0 0.625rem;
    font-family: 'Overpass', sans-serif;
    font-size: 2.25rem;
    letter-spacing: -0.025em;
    color: hsla(215, 12%, 25%, 1);
  }

  span {
    font-family: 'Cabin', sans-serif;
    font-size: 0.875rem;
    color: hsla(215, 10%, 55%, 1);
  }
`

export const FeaturedButtons = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 1.5rem;
  right: 1.5rem;

  > button {
    width: 2.25rem;
    height: 2.25rem;
    background: #dde0e4
      url("data:image/svg+xml,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='14' height='2' rx='1' transform='matrix(-1 0 0 1 16 9)' fill='%234F5864'/%3E%3Cpath d='M17.3 10.7a1 1 0 0 0 0-1.4l-4.25-4.25a1 1 0 1 0-1.41 1.41l4.24 4.25a1 1 0 0 0 1.41 0Z' fill='%234F5864'/%3E%3Cpath d='M17.3 9.3a1 1 0 0 1 0 1.4l-4.25 4.25a1 1 0 1 1-1.41-1.41l4.24-4.25a1 1 0 0 1 1.41 0Z' fill='%234F5864'/%3E%3C/svg%3E")
      center no-repeat;
    border: none;
    border-radius: 0.625rem;
    cursor: pointer;

    &:first-of-type {
      margin-right: 0.625rem;
      transform: rotate(180deg);
    }
  }
`

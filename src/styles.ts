import { css } from '@emotion/react'

export const globalStyles = css`
  html {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    margin: 0;
    background: hsla(0, 0%, 100%, 1);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

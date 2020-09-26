import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center center;
`

// Loading Spinner by Mimoh Shrestha at https://codepen.io/mimoh/pen/VmVqPB
const Spinner = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.color.primary};
  animation: rotate-object 800ms infinite linear;

  @keyframes rotate-object {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
`

export const LoadingPage = () => (
  <Page>
    <Spinner />
  </Page>
)

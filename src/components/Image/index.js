import React from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'

const Wrapper = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Image = styled.img`
  ${layout}
  margin-bottom: 50px;
`

export default (props) => (
  <Wrapper>
    <Image {...props} />
  </Wrapper>
)

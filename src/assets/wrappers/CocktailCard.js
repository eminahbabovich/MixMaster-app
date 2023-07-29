import styled from 'styled-components'

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }

  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .info {
    padding: 1.5rem;
  }
  h4 {
    font-weight: 700;
    letter-spacing: var(--letterSpacing);
    margin-bottom: 0.5rem;
  }

  p:first-of-type {
    letter-spacing: var(--letterSpacing);
    font-size: 14px;
  }

  p {
    margin-bottom: 0.5rem;
    color: var(--grey-600);
  }
`

export default Wrapper

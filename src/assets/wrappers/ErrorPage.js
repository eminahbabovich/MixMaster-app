import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  img {
    width: 90vw;
    max-width: 600px;
    height: 25rem;
    display: block;
    object-fit: cover;
  }

  p {
    color: var(--grey-500);
  }

  .link {
    color: var(--primary-500);
  }
`

export default Wrapper

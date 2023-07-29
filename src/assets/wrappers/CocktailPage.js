import styled from 'styled-components'

const Wrapper = styled.div`
  .drink {
    display: grid;
  }
  header {
    text-align: center;
    margin-bottom: 3rem;
  }
  h3 {
    margin-top: 1rem;
  }
  img {
    border-radius: var(--borderRadius);
  }

  .drink-info {
    margin-top: 2rem;
    text-align: left;
  }
  p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 2;
    margin-top: 1rem;
  }

  p:last-of-type {
    text-transform: capitalize;
    line-height: 2;
  }

  .ingredients {
    text-transform: capitalize;
  }

  span:not(.ingredients) {
    background-color: var(--primary-300);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
    margin-left: 0;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 992px) {
    .drink {
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .drink-info {
      margin-top: 0;
    }
  }
`

export default Wrapper

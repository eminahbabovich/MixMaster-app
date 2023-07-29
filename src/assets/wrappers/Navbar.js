import styled from 'styled-components'

const Wrapper = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  z-index: 2;

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    height: auto;
  }

  .logo {
    color: var(--primary-500);
    font-size: clamp(1.5rem, 3vw, 3rem);
    letter-spacing: 2px;
    font-weight: 700;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.25rem;
  }

  .nav-link {
    color: var(--grey-900);
    font-weight: 600;
    letter-spacing: 2px;
    transition: var(--transition);
    padding: 0.25rem 0;
  }

  .nav-link:hover {
    color: var(--primary-500);
  }

  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
    }
    .nav-links {
      flex-direction: row;
      align-items: center;
      margin-top: 0;
    }
  }
`

export default Wrapper

import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const value = 'someValue'
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading">.</div>
        ) : (
          <Outlet context={value} />
        )}
      </section>
    </>
  )
}
export default HomeLayout

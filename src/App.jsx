import './App.css'
import Add1 from './components/Add1/Add1'
import Categories from './components/Categories/Categories'
import Header from './components/Header/Header'
import LatestPost from './components/LatestPost/LatestPost'
import NavigationBar from './components/NavigationBar/NavigationBar'
import PopularPost from './components/PopularPost/PopularPost'

function App() {

  return (
    <>
      <NavigationBar /> 
      <Header />
      <Categories />
      <LatestPost />
      <Add1 />
      <PopularPost />
    </>
  )
}

export default App

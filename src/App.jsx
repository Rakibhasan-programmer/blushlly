import './App.css'
import Categories from './components/Categories/Categories'
import Header from './components/Header/Header'
import LatestPost from './components/LatestPost/LatestPost'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {

  return (
    <>
      <NavigationBar /> 
      <Header />
      <Categories />
      <LatestPost />
    </>
  )
}

export default App

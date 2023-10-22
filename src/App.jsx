import "./App.css";
import Add1 from "./components/Add1/Add1";
import Categories from "./components/Categories/Categories";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import LatestPost from "./components/LatestPost/LatestPost";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PopularPost from "./components/PopularPost/PopularPost";
import RandomPost from "./components/RandomPost/RandomPost";
import RandomSection from "./components/RandomSection/RandomSection";

function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <Categories />
      <LatestPost />
      <Add1 />
      <PopularPost />
      <RandomSection />
      <RandomPost />
      <Feed />
    </>
  );
}

export default App;

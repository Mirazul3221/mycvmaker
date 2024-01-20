import Background from "./components/Background";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import DeviceApp from "./components/DeviceApp";
import LatestArticles from "./components/LatestArticles";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
// import Section03 from "./components/Section03";
// import Section04 from "./components/Section04";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
// import useLocoScroll from "./useLocoScroll";

function App() {
  // useLocoScroll(true);
  return (
    <main className="App main-container">
      <Header />
      <Banner />
      <Section01 />
      <Section02 />
      {/* <Section03 /> */}
      {/* <Section04 /> */}
      <LatestArticles />
      <Counter />
      <Background />
      {/* <div className="h-screen"></div> */}
      <DeviceApp />
      <Footer />
    </main>
  );
}

export default App;

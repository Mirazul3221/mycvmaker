import Banner from "./components/Banner";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="App mx-20">
      <Header />
      <Banner />
      <Section01 />
      <Section02 />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./container/navbar/navbar";
import Hero from "./container/main/main";
import Footer from "./container/footer/footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

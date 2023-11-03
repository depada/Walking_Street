import "./App.css";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { CarouselProvider } from "./context/Context";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <CarouselProvider>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Booking />
        <Contact />
      </CarouselProvider>
    </>
  );
}

export default App;

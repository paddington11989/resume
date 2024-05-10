import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Projects from "./components/my-projects/projects";


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

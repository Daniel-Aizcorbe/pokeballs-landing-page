import './App.css';
import NavBar from "./components/NavBar/src/NavBar";
import Titulo from "./components/Titulo/src/Titulo";
import Beneficios from "./components/Beneficios/src/Beneficios";
import Planes from "./components/Planes/src/Planes";
import Footer from "./components/Footer/src/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo />
      <Beneficios />
      <Planes />
      <Footer />
    </div>
  );
}

export default App;

import Canvas from "./pages/CanvasModel.tsx";
import Home from "./pages/Home.tsx";
import Customizer from "./pages/Customizer.tsx";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  )
}

export default App

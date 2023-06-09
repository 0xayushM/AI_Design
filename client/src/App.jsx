import CanvasModel from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home/>
      <CanvasModel/>
      <Customizer/>
    </main>
  )
}

export default App

// threejs project for ZScalar whiteboard presentation and interview and main project

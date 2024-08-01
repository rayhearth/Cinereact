import {BrowserRouter, Route, Rotes} from "react-router-dom"
import Home from "./pages/Home"
import Favoris from "./pages/Favoris"
import NotFound from "./pages/NotFound"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favoris" element={<Favoris/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

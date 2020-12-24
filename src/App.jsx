import {Switch, Route} from "react-router-dom"
import Photos from "./Componints/Photos/Photos.jsx"

import './App.css'

function App() {
  return (
    <>
      <h1>App.</h1>

      <Switch>
        <Route path="/" exact >
          <Photos count={5} />
        </Route>
      </Switch>
    </>
  )
}

export default App

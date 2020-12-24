import {Switch, Route} from "react-router-dom"
import Commits from "./Componints/Posts/Posts.jsx"


import './App.css'

function App() {
  return (
    <>
      <h1>App.</h1>

      <Switch>
        <Route path="/" exact >
          <Commits count={5} />
          
        </Route>
      </Switch>
    </>
  )
}

export default App

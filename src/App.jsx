import {Switch, Route} from "react-router-dom"
import Posts from "./Componints/Posts/Posts.jsx"
import Comments from './Componints/Comments/Comments'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import './App.css'

function App() {
  return (
    <div className="mt-5">
      <Switch>
        <Route path="/" exact >
          <Posts count={500} />
        </Route>
        <Route path="/comments/:page?" component={Comments} exact />

      </Switch>
    </div>
  )
}

export default App

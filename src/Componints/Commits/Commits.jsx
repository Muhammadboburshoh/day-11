import {useEffect, useState} from "react"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../App.css"

function Commits ({count}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [commitData, setcommitData] = useState([])

  useEffect(() => {

    async function getCommits () {

      try {
        const response = await fetch("http://jsonplaceholder.typicode.com/posts")
        const json = await response.json()

        setLoading(false)
        setcommitData([...json].splice(0, count))
      }
      catch(error) {
        setError(error)
      }
    }
    getCommits()

  },[count])

  return (
    <div className="container">
      {
        loading && !error && <h1>Loading...</h1>
      }
      {
        error && <>{error.message}</>
      }
      {
        commitData.length > 0 && (<ul className="list-group">
          {
            commitData.map(commit => (<li className=
              {
                commit.id % 2 === 0 ? "list-group-item list-group-item-secondary": "list-group-item list-group-item-warning"
              }
              key={commit.id}>
              <h3>{commit.title}</h3>

              <details>
                abdulloh
              </details>
              {/* <a href={"/comments/" + photo.id}>title</a> */}
            </li>))
          }
        </ul>)
      }
    </div>
  )
}

export default Commits
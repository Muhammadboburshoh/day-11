import { NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../App.css"

function Posts ({count}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [postsData, setpostsData] = useState([])

  useEffect(() => {

    async function renderPost () {
      try {
        const response = await fetch("http://jsonplaceholder.typicode.com/posts")
        const json = await response.json()

        setLoading(false)
        setpostsData([...json].splice(0, count))
      }
      catch(error) {
        setError(error)
      }
    }

    renderPost()

  },[count])

  console.log();

  return (
    <div className="container">
      {
        loading && !error && <h1>Loading...</h1>
      }
      {
        error && <>{error.message}</>
      }
      <h1 className="text-center mb-3">Posts</h1>
      {
        postsData.length > 0 && (<ul className="list-group">
          {
            postsData.map(post => (<li className=
              {
                post.id % 2 === 0 ? "list-group-item list-group-item-secondary": "list-group-item list-group-item-warning"
              }
              key={post.id}>
              <h3>{post.id}.{post.title}</h3>
              <NavLink to={'/comments/'+post.id}>See More</NavLink>
            </li>))
          }
        </ul>)
      }

    </div>
  )
}

export default Posts
import {useEffect, useState} from "react"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../App.css"

function Posts ({count}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [postsData, setpostsData] = useState([])
  const [commentsData, setCommentsData] = useState([])

  useEffect(() => {

    (async function () {

      try {
        const response = await fetch("http://jsonplaceholder.typicode.com/comments")
        const json = await response.json()
  
        setLoading(false)
        setCommentsData([...json])
        console.log(json);
      }
      catch(error) {
        setError(error)
      }
    })()

    async function Post () {
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

    Post()

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
      {
        postsData.length > 0 && (<ul className="list-group">
          {
            postsData.map(post => (<li className=
              {
                post.id % 2 === 0 ? "list-group-item list-group-item-secondary": "list-group-item list-group-item-warning"
              }
              key={post.id}>
              <h3>{post.title}</h3>

              {
                commentsData.length > 0 && (<details>
                  <ul>
                    {
                      commentsData.filter(comment => post.id === comment.postId).map(comment => (<li key={comment.id}>
                        {comment.body}
                      </li>))
                    }
                  </ul>
                </details>)
              }
              {/* <a href={"/comments/" + photo.id}>title</a> */}
            </li>))
          }
        </ul>)
      }
    </div>
  )
}

export default Posts
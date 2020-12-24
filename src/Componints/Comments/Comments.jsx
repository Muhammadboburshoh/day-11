import { useParams, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Comments () {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [CommentsData, setCommentsData] = useState([])

  useEffect(()=>{
    async function getComment () {

      try {
        const response = await fetch("http://jsonplaceholder.typicode.com/comments")
        const json = await response.json()
  
        setLoading(false)
        setCommentsData([...json])
      }
      catch(error) {
        setError(error)
      }
    }
    getComment()
  }, [])

  return (
    <div className="container">
      {
        loading && !error && <h1>Loading...</h1>
      }
      {
        error && <>{error.message}</>
      }
      <h3 className="text-center">{params.page}-post coomints</h3>
      {
        CommentsData.length > 0 && <ul className="list-group">
        {
          CommentsData.filter(comment => Number(params.page) === comment.postId).map((comment, i) => {

             return (

             <li key={comment.id} className={comment.id % 2 === 0 ? "list-group-item list-group-item-secondary": "list-group-item list-group-item-dark"}>
            <h5>{i+1}.{comment.body}</h5>
            </li>
            
            )
          })
        }
        </ul>
      }

      <NavLink className="mt-5 d-inline-block" to="/"> {`<-`} Back</NavLink>
    </div>
  )
}

export default Comments
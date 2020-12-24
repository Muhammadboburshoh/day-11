import {useEffect, useState} from "react"

function Photos ({count}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {

    async function getPhotos () {

      try {
        const response = await fetch("http://jsonplaceholder.typicode.com/photos")
        const json = await response.json()

        setLoading(false)
        setData([...json].splice(0, count))
      }
      catch(error) {
        setError(error)
      }
    }
    getPhotos()

  },[count])

  return (
    <>
      Photos.

      {
        loading && !error && <h1>Loading...</h1>
      }
      {
        error && <>{error.message}</>
      }
      {
        data.length > 0 && (<ul>
          {
            data.map(photo => (<li key={photo.id}>
              <a href={"/comments/" + photo.id}>title</a>
              <img src={photo.url} alt={photo.title} />
            </li>))
          }
        </ul>)
      }
    </>
  )
}

export default Photos
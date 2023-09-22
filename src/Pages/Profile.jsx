import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const Profile = () => {

  const { id } = useParams()

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

      let user = res.data


      setData(user)
    }
    getUsers()
  }, [id])

  const [data, setData] = useState([])




  return (data.map((post, idx) =>
  (
    <Link key={idx} to={`/post/${post.id}`}>
      <div className="card">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Link>
  )
  )

  )


}

export default Profile
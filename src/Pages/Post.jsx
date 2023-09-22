import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Post = () => {
    const { id } = useParams()

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

            let post = res.data


            setData(post)
        }
        getPost()
    }, [id])

    const [data, setData] = useState([])


    return (data.map((comment, idx) => {
        return (
            <div key={idx}>
                <h1>{comment.email}</h1>
                <p>{comment.body}</p>
            </div>
        )
    }))


}

export default Post
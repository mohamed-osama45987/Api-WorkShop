import { useEffect, useState } from "react"
import axios from "axios"

import User from "./User"

const UserList = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
    }



    useEffect(() => {

        getUsers()
    }, [])

    return (

        <section>
            <h1>UserList</h1>
            <div className="list">
                {users.map((item, idx) => <User key={idx} obj={item} />)}
            </div>
        </section>
    )
}

export default UserList
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const User = ({ obj }) => {

    const { address, company, email, id, name, phone, username, website } = obj

    return (
        <Link to={`/profile/${id}`}>
            <div className="card">
                <h1>{name}</h1>
                <h1>{username}</h1>
                <h2>{email}</h2>
            </div>
        </Link>
    )
}

export default User
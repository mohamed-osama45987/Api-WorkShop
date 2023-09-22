import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Post from "./Pages/Post"
import Profile from "./Pages/Profile"
import Error from "./Pages/Error"

function App() {

  return (



    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<Error />} />

    </Routes>

  )
}

export default App

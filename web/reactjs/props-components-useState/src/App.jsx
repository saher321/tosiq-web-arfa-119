
import { useState } from 'react'
import {users} from './utils/common.js'
const App = () => {
  // const [ variable, setVariable ] = useState(1)
  // const [ variable, setVariable ] = useState("Pakistan")
  // const [ variable, setVariable ] = useState(false)
  // const [ variable, setVariable ] = useState({ salary: 40000, id: 10232 })
  const [ userData, setUserData ] = useState(users)
  return (
    <div>
      <h2>User list ({userData.length}) </h2>
      <table border={1} cellPadding={"16px"} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              )
            })

          }
        </tbody>
      </table>
    </div>
  )
}

export default App

import { useState } from 'react'
import {users} from './utils/common.js'
import PageTitle from './components/PageTitle.jsx'
import Status from './components/Status.jsx'
const App = () => {
  // const [ variable, setVariable ] = useState(1)
  // const [ variable, setVariable ] = useState("Pakistan")
  // const [ variable, setVariable ] = useState(false)
  // const [ variable, setVariable ] = useState({ salary: 40000, id: 10232 })
  const [toggle, setToggle] = useState(false)
  const [ userData, setUserData ] = useState(users)

  const togglePassword = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <PageTitle title={`User data ${userData.length}`} />
      <div>
        
        <label htmlFor="">Password</label>
        
        <input type={toggle ? "text": "password"}/>
        
        <button onClick={togglePassword} >
          {toggle ? "Hide": "Show"} password
        </button>

      </div>
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
                  <td><Status status={user.status} /></td>
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
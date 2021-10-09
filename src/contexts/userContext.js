import axios from 'axios'
import react, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(undefined)

  const login = async (email, password) => {
    if (email && password) {
      // Login Request

      const loginInfo = {
        email: email,
        password: password,
      }

      try {
        const { data } = await axios.post('/api/users/signin', loginInfo)
        console.log(data)
        // Update Localstorage
        localStorage.setItem('userInfo', JSON.stringify(data))
        // update State
        setUserInfo(data)
        toast.success('Login Successfull')
      } catch (e) {
        // console.log(e.response.data.errors)
        e.response.data?.errors.map((err) => {
          toast.error(err.message)
        })

        // Alert Errors
      }
    } else {
      toast.error('Email and Password required')
    }
  }

  const logout = () => {
    localStorage.removeItem('userInfo')
    setUserInfo(undefined)
    toast.success('Logout Successful')
  }

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
    }
  }, [])

  return (
    <UserContext.Provider
      value={{ user: userInfo, login: login, logout: logout }}
    >
      {{ ...props.children }}
    </UserContext.Provider>
  )
}

export default UserContextProvider

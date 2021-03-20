import axios from 'axios'
import {setUser} from '../reducers/userReducer'

export const registration = async(email, password, name, phone) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/register`, {
            email,
            password,
            name,
            phone
        })
    } catch(e) {
        alert('Відбулася помилка')
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch(e) {
            alert('Відбулася помилка')
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch(e) {
            localStorage.removeItem('token')
        }
    }
}
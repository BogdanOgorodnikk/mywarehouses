import axios from 'axios'

export const postProduct = async(id, title, characteristicks, number, price) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/product/${id}`, {
            title, 
            characteristicks, 
            number, 
            price
        },
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    } catch(e) {
        alert('Відбулася помилка' + e)
    }
}


export const putProduct = async(id, title, characteristicks, number, price) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/product/${id}`,
         {
            title, 
            characteristicks, 
            number,
            price
        },
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    } catch(e) {
        alert('Відбулася помилка' + e)
    }
}
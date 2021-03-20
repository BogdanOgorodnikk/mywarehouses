import axios from 'axios'

export const postWarehouse = async(town, region, rent) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/createwarehouse`,
         {
            town,
            region,
            rent
        },
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    } catch(e) {
        alert('Відбулася помилка')
    }
}

export const putManagerWarehouse = async(id, manager_id) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/updatemanager/${id}`,
         {
            manager_id
        },
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    } catch(e) {
        alert('Відбулася помилка' + e)
    }
}

export const putWarehouse = async(id, town, region, rent) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/updatewarehouse/${id}`,
         {
            town,
            region,
            rent
        },
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    } catch(e) {
        alert('Відбулася помилка' + e)
    }
}
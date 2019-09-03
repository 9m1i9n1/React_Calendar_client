import axios from 'axios'

export const getReminderAPI = (year, month) => {
    return axios.get(`http://localhost:4000/api/reminders/?year=${year}&month=${month}`)
}

export const addReminderAPI = (year, month, dayNum, discription) => {
    console.log('#addReminderapi: ', year, month, dayNum, discription);
    
    return axios.post('http://localhost:4000/api/reminders/', {year, month, dayNum, discription})
}

export const removeReminderAPI = (id) => {
    console.log('#removeReminderapi:', id);

    return axios.delete(`http://localhost:4000/api/reminders/${id}`)
}
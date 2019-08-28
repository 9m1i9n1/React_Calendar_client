import axios from 'axios'

export const getReminderAPI = (year, month) => {
    console.log('#getreminderapi year, month:', year, month);
    
    return axios.get(`http://localhost:4000/api/reminders/?year=${year}&month=${month}`)
}
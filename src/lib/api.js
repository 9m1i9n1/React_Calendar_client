import axios from 'axios'

export const writeReminder = ({year, month, dayNum, discription}) => axios.reminder('/api/reminders', {year, month, dayNum, discription})
export const getReminder = ({year, month}) => axios.get(`/api/posts/?year=${year}&month=${month}`)
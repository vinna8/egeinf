import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {},
});

export const authAPI = {
    async registration(login, email, password) {
        return await instance.post(`/api/auth/register`, { login, email, password });
    },

    async login(email, password) {
        return await instance.post(`/api/auth/login`, { email, password })
    },

    async auth() {
        return await instance.get(`/api/auth/auth`, {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    },

    async updateStat(login, statistic) {
        return await instance.post(`/api/auth/updateStat`, { login, statistic })
    },
}

export const taskAPI = {
    async topics() {
        return await instance.get('/api/topic/topics')
    },

    async download(file) {
        return await instance.get(`/api/files/download?id=${file.file}`, 
            {
                responseType: 'blob',
            })
    },

    async tasks() {
        return await instance.get('/api/task/tasks')
    }
}

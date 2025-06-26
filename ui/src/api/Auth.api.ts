
import api from './axios';


export class AuthApi {
    static login = async (email: string, password: string) => {
        return api.post('/v1/login', { email, password });
    }

    static logout = async () => {
        return api.post('/v1/logout');
    }

    static getUser = async () => {
        return api.get('/v1/user');
    }
}


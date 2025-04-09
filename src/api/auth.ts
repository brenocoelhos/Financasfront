import api from './index';

export const login = async ( email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Erro ao fazer login';
  }
};

export const logout = async () => {
  try {
    await api.post('/auth/logout');
    localStorage.removeItem('token');
  } catch (error: any) {
    throw error.response?.data?.message || 'Erro ao fazer logout';
  }
};

export const register = async (name:string,email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {name, email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Erro ao registrar';
  }
};

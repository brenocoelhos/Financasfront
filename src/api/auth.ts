import api from './index';

export const login = async (usuario: string, senha: string) => {
  try {
    const response = await api.post('/login', { usuario, senha });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Erro ao fazer login';
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
  } catch (error: any) {
    throw error.response?.data?.message || 'Erro ao fazer logout';
  }
};

export const register = async (usuario: string, senha: string) => {
  try {
    const response = await api.post('/register', { usuario, senha });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Erro ao registrar';
  }
};
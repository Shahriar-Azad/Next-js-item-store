import Cookies from 'js-cookie';

// Mock credentials
const MOCK_USER = {
  email: 'admin@example.com',
  password: 'password123',
  name: 'Admin User'
};

export const login = (email, password) => {
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const user = { email: MOCK_USER.email, name: MOCK_USER.name };
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
    return { success: true, user };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const logout = () => {
  Cookies.remove('user');
};

export const getUser = () => {
  const userCookie = Cookies.get('user');
  return userCookie ? JSON.parse(userCookie) : null;
};

export const isAuthenticated = () => {
  return !!getUser();
};

import { Cookies } from 'react-cookie';

// get Cookies
export const getUser = () => {
    const cookies = new Cookies();
    const user = cookies.get('user');
  
    return typeof user === 'object' ? user : null;
};

// Check if user is logged in
export const isAuth = () => {
    const cookies = new Cookies();
    const user = cookies.get('user');
  
    return !user ? false : user.token ? true : false;
};
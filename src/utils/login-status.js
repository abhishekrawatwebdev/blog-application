/* eslint-disable no-unused-vars */
import { sendFailureNotification, sendSuccessNotification } from '../services/notifications';
import { getLocalStorageKey } from './local-storage';

export const checkLoginStatus = (location, navigate) => {
    const now = Date.now();
    const token = getLocalStorageKey('token');
    const email = getLocalStorageKey('email');
    const exemptedList = ['/login/', '/signup/', '/reset-password/', '/login', '/signup', '/reset-password'];

    if (!exemptedList.includes(location.pathname)) {
        if (!(token && email)) {
            navigate('/login');
            sendFailureNotification('Access has expired please login again.');
        }
    } else if (token && email) {
        navigate('/');
        sendSuccessNotification('Redirecting to the dashboard.');
    }
};

export const checkIsUserLoggedIn = () => {
    const now = Date.now();
    const token = getLocalStorageKey('token');
    const email = getLocalStorageKey('email');
    if (!(token && email)) {
        return false;
    }
    return true;
};

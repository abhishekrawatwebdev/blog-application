/* eslint-disable no-console */
import { sendFailureNotification } from '../services/notification';

export const fetchUrl = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('API failed', url);
        console.log('API failed', error);
        sendFailureNotification('Please try again after sometime. Contact support if the problem persists.');
        return { error };
    }
};

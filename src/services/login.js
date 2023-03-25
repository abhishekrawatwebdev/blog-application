// import { fetchUrl } from '../utils/fetch';
// import { getLocalStorageKey } from '../utils/localstorage';

// export const loginUser = async (email,password) => {
//     const token = getLocalStorageKey('token');
//     const url = process.env.REACT_APP_LOGIN_URL;
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Authorization', token);
//     const details = { email,password };
//     const requestOptions = { method: 'POST', headers, body: JSON.stringify(details), redirect: 'follow' };
//     const data = await fetchUrl(url, requestOptions);

//     return data;
// }

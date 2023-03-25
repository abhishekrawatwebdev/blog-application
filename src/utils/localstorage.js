export const getLocalStorageKey = (key) => window.localStorage[key];

export const setLocalStorageKey = (key, value) => {
    window.localStorage[key] = value;
    return true;
};

export const removeLocalStorageKey = (key) => {
    delete localStorage.removeItem(key);
};

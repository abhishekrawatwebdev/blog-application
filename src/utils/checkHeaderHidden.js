export const isHeaderHidden = (pathname) => {
    if (pathname.indexOf('/login') !== -1) {
        return true;
    }
    if (pathname.indexOf('/signup') !== -1) {
        return true;
    }

    return false;
};
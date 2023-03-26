const navigateToRoute= (navigate,route)=> {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email) {
       console.log('Token or email key not found in local storage.');
        console.log("not authorized");
    } else {
        navigate(route);
        
    }
}

export default navigateToRoute;
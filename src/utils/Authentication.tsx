
function  isAuthenticated() {
     if (localStorage.getItem("logged")) {
        return true
    } return false;}

 export default isAuthenticated;
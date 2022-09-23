var axios = require("axios")

export class AuthService {
    constructor() {
    }

    testFunc(){
        console.log("Test");
    }
}

export const signup = (prenom, nom, mail, mdp, mdpConfirm) => {
    //confirmer que mdp sont égaux
    if(mdp == mdpConfirm){
        //jsp
    }
    var reponse = ""
    const recruiter = {
        email: mail,
        firstname: prenom,
        lastname: nom,
        password: mdp
    }
    axios.post("http://localhost:3000/recruiters/signup", recruiter)
        .then(response => reponse = response.statusText)
    alert(reponse)
    //Faire qqch en fonction de la réponse
}


export const login = (mail, mdp) => {
    var reponse = ""
    const recruiter = {
        email: mail,
        password: mdp
    }
    axios.post("http://localhost:3000/recruiters/login", recruiter)
        .then(response => reponse = response.statusText)
    alert(reponse)
}
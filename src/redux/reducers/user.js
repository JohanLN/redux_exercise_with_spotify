let initialState = {
    access_token: "",
    username: ""
};

// Voilà un reducer.
// Le reducer va gérer nos données et nous permettre de l'utiliser dans notre application sous la forme de "states".
// Les states en react ont l'avantage de pouvoir se modifier sans perdre leur valeur durant le runtime.

const user = (state = initialState, action) => {
    
    // On vérifi dans le switch quelle action est appelée.
    switch (action.type) {
        case "SAVE":
            // En fonction de cette action on retourne une copy de notre variable d'état (state = initialState) et on y affecte la ou les valeurs.
            return {
                ...state,
                access_token: action.payload
            }
        case "DELETE":
            return {
                ...state
            }
        case "USERNAME":
            return {
                ...state,
                username: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default user;

// Pour mieux comprendre comment nos reducers sont appelés il faut aller voir dans nos actions (../actions/userActions.js)
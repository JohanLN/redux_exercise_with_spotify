import axios from 'axios';

// Nos actions sont des fonctions qui nous permetterons à la fin de leur éxécution d'appeler un reducer pour pouvoir stocker l'information.

// Pour appeler notre réducer on utilise dispatch afin de retourner un objet utilisable par notre reducer.

// Un dispatch est de la forme suivante : 
//    return {
//       type: "Le nom de notre action qui sera traité par notre reducer",
//       payload: "notre nouvelle valeur que l'on souhaite stocker"
//    }

export const getTokenFromURL = () => { 
    let access_token = window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
    }, {});

    console.log("test on getToken", access_token);
    return {
        type: "SAVE",
        payload: access_token.access_token
    }
};

export const getUsername = (access_token) => {
    return (dispatch) => {
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            console.log("SUCCESS", response)
            dispatch({
                type: "USERNAME",
                payload: response.data.display_name
            })
        }).catch(err => {
            console.log("ERROR", err)
        })    
    }
};
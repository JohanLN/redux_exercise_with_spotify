const CLIENT_ID = "cc82e43ea4f842d280be69bf9aff76cb";
const REDIRECT_URI = "http://localhost:3000/";

const scopes = [
    "user-read-private",
    "user-read-email"
]

export const signIn = () => {
    return(
        "https://accounts.spotify.com/authorize?client_id=" +
        CLIENT_ID +
        "&redirect_uri=" + 
        REDIRECT_URI + 
        "&scope=" + scopes.join("%20") +
        "&response_type=token&show_dialog=true"
    );
};


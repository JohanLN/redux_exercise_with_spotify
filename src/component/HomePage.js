import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/userActions';
import { Button } from '@material-ui/core';
import { signIn } from "../spotifyLoginService.js/spotifyLogin";

class HomePage extends React.Component {


    render() {
        console.log(this.props);

        if (window.location.hash !== "") {
            console.log("can have access token", window.location.hash);
            this.props.getTokenFromURL();
            window.location.hash = "";
        }

        return (

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 1000}}>
    
                <h1>Test of redux with spotify api</h1>
    
                <Button variant="contained" color="primary" href={signIn()}>Login</Button>

                <h2>access_token = {this.props.user.access_token}</h2>
    
                <button onClick={() => this.props.getUsername(this.props.user.access_token)}>Get user infos</button>
    
                <h2>Welcome {this.props.user.username}</h2>

            </div>
    
        )
    
    }

}

// J'ai pas encore tout a fait compris comment ça marche exactement, mais cela nous permet de connecter nos actions et nos états à notre composant pour pouvoir l'utiliser sous la forme de prop :
//
//                                    (this.props.uneAction()) ou (this.props.unReducer.unEtatDeNotreReducer)

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actions)(HomePage);
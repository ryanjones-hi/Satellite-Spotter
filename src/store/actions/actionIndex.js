import * as constants from '../constants/constants';
import axios from 'axios'; 

const Res = require('../../components/Response.json');

export function getData(){

    let noIfPasses = 15;
    let url = `http://api.open-notify.org/iss-pass.json?lat=30.3321840&lon=-81.6556510&alt=100&n=${noIfPasses}`;

    console.log("urrrrrl", url)

    return dispatch => {
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch(getDataSuccess(responseJson));
        })
        .catch((error) => {
          console.error(error);
        });
    }
} 

function getDataSuccess(responseJson){
    return { type: constants.GET_DATA, payLoad: responseJson}
}
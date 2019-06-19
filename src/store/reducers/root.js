import * as constants from '../constants/constants';

const initialState = {
    CompleteData: ''
}


const reducer = (state = initialState, action) => {

    switch(action.type){

        case constants.GET_DATA:
            return {'CompleteData': action.payLoad};

        default:
            return state;
    }
}

export default reducer;
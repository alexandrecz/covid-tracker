

const initialState = { loading: false, data: [] };


export const covid = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case 'REQUEST_COVID_INFO':
            const { countryName } = payload;     
            return {
                ...state,
                loading: true,
                data: state.data === countryName,
            }
        case 'SUCCESS_COVID_INFO':
            const { covidData } = payload;    
            return {
                ...state,
                loading: false,
                data: covidData,
            };        
        case 'FAILURE_COVID_INFO':
            return {
                ...state,
                loading: false,              
            };
        
        default:
            return state;
    }

}
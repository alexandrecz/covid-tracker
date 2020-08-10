
// import { takeLatest, put, call, select, delay } from 'redux-saga/effects';
import { takeLatest, put, call, all  } from 'redux-saga/effects';


function* requestCovidAsync({ payload }) {
    
    try {

        const countryName = payload;
        
        const COVID_API_URL = 'https://coronavirus-19-api.herokuapp.com/countries/';       
        
        const response = yield call(
            fetch,
            `${COVID_API_URL}${countryName}`
        );
        
        const data = yield call([response, response.json]);     

        const covidData = data;        
        
        yield put({ type: 'SUCCESS_COVID_INFO', payload: { covidData } });

    } catch(error) {
        console.log(
            "%cERROR",
            "text-transform: uppercase; padding: 10px; background: red; color: white;",
            `requestCovidInfoAsync: ${error}`
        );

        yield put({ type: 'FAILURE_COVID_INFO' });
    }
}


function* watchRequestCovidAsync() {
    yield takeLatest('REQUEST_COVID_INFO', requestCovidAsync)
}


export default function* rootSaga() {
    yield all([
        watchRequestCovidAsync(),  
    ])
};
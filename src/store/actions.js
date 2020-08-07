
export const requestCovidInfo = countryName => ({
    type: 'REQUEST_COVID_INFO',     
    payload: countryName,
});

export const successCovidInfo = covidData => ({
    type: 'SUCCESS_COVID_INFO',     
    payload: { covidData },
});

export const failureCovidInfo = () => ({
    type: 'FAILURE_COVID_INFO',     
});
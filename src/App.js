import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCovidInfo } from './store/actions';
import { Input, AppButton, Wrap, Box, Title, ContentText, Content, Label } from './components';


function App({ covid = {}}) {

    covid = useSelector(state => state.covid);
    
    const dispatch = useDispatch();

    const [countryName, setName] = useState('');   

    const [wrapVisibility, setWrapVisibility] = useState(false);
    const toggleVisibility = () => setWrapVisibility(!wrapVisibility||true);   
        
    const updateName = e => {
        setName(e.target.value);
    };  
    
    const searchCovid = () => {
      
      dispatch(requestCovidInfo(countryName));
      
      setTimeout(() => {
        toggleVisibility();
      }, 250); 
                        
      setName('');
    }    

  return (
    <>
      <Input
          type="text"
          autocomplete="off"
          placeholder="Type country name here"
          name="countryName"
          value={countryName} 
          onChange={updateName}/>
      <AppButton onClick={() => searchCovid()}>Search</AppButton>
      <Wrap isVisible={wrapVisibility}>
        <Box>
          <Title>{covid.data.Country}</Title>
          <ContentText>Active {covid.data.Active}</ContentText>
          <ContentText>Confirmed {covid.data.Confirmed}</ContentText>
          <ContentText>Deaths {covid.data.Deaths}</ContentText>
          <Label>Recovered {covid.data.Recovered}</Label>
        </Box>
      </Wrap>      

    </>
  );
}

export default App;

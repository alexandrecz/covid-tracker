import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCovidInfo } from './store/actions';
import { countryList } from './data';
import { Header, Select, List, ListItem, Title, Circle, Label } from './components';


function App({ covid = {}}) {

    covid = useSelector(state => state.covid);  
  
    const counterDelay = 200;
    const countries = countryList;
   
    const dispatch = useDispatch();    

    const [listVisibility, setListVisibility] = useState(false);
    const toggleVisibility = () => setListVisibility(!listVisibility || true);      

    const handleChange = (e) => {
      const countryName = e.target.value;     
      
      dispatch(requestCovidInfo(countryName));
      
      setTimeout(() => {
        toggleVisibility();
      }, 250); 
    }
    

  return (
    <>
      <Header>
        <Title>COVID-19 Tracker</Title>

        <Select onChange={handleChange}>
          {countries.map((country, index)=> (           
           <option key={index} value={country}>               
              {country}
           </option>
       ))}

        </Select>
      </Header>      

      <List>
        <ListItem key={1} isVisible={listVisibility} delay={1*counterDelay}>
            <Label>Active</Label>
            <Circle>{covid.data.active}</Circle>
        </ListItem>
        <ListItem key={2} isVisible={listVisibility} delay={2*counterDelay}>
            <Label>Critical</Label>
            <Circle>{covid.data.critical}</Circle>
        </ListItem>
        <ListItem key={3} isVisible={listVisibility} delay={3*counterDelay}>
            <Label>Deaths</Label>
            <Circle>{covid.data.deaths}</Circle>
        </ListItem>
        <ListItem key={4} isVisible={listVisibility} delay={4*counterDelay}>
            <Label>Recovered</Label>
            <Circle>{covid.data.recovered}</Circle>
        </ListItem>         
      </List>      

    </>
  );
}

export default App;

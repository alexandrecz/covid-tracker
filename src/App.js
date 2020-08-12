import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCovidInfo } from './store/actions';
import { countryList } from './data';
import * as Comp from './components';
import globe from './img/globe.svg';


function App({ covid = {}}) {

    covid = useSelector(state => state.covid);
  
    const counterDelay = 200;
    const countries = countryList;
   
    const dispatch = useDispatch();    

    const [listVisibility, setListVisibility] = useState(false);
    const toggleVisibility = () => setListVisibility(!listVisibility || true);      

    const setToogle = () => {
      setTimeout(() => {
        toggleVisibility();
      }, 250);
    };   

    const handleChange = (e) => {
      const countryName = e.target.value;     
      
      if(!countryName.match('Select')){
        dispatch(requestCovidInfo(countryName));
        setToogle();
      }      
    };   
    
    

  return (
    <>
      <Comp.Header>
        <Comp.Logo alt="" src={globe}/>
        
        <Comp.Title>COVID-19 Tracker</Comp.Title>

        <Comp.Select onChange={handleChange}>
          {countries.map((country, index)=> (           
           <option key={index} value={country}>               
              {country}
           </option>
         ))}

        </Comp.Select>
      </Comp.Header>  

      <Comp.List>
        <Comp.ListItem key={1} isVisible={listVisibility} delay={1*counterDelay}>
            <Comp.Label>Active</Comp.Label>
            <Comp.Circle>{covid.data.active}</Comp.Circle>
        </Comp.ListItem>
        <Comp.ListItem key={2} isVisible={listVisibility} delay={2*counterDelay}>
            <Comp.Label>Critical</Comp.Label>
            <Comp.Circle>{covid.data.critical}</Comp.Circle>
        </Comp.ListItem>
        <Comp.ListItem key={3} isVisible={listVisibility} delay={3*counterDelay}>
            <Comp.Label>Deaths</Comp.Label>
            <Comp.Circle>{covid.data.deaths}</Comp.Circle>
        </Comp.ListItem>
        <Comp.ListItem key={4} isVisible={listVisibility} delay={4*counterDelay}>
            <Comp.Label>Recovered</Comp.Label>
            <Comp.Circle>{covid.data.recovered}</Comp.Circle>
        </Comp.ListItem>         
      </Comp.List>      
      <Comp.Footer>Developed by Alexandre Czechowicz</Comp.Footer>
    </>
  );
}

export default App;

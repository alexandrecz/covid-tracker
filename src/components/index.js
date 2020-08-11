import style from 'styled-components';


export const Header = style.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 20vh;
    width: 90%;    
    margin: auto;
    @media screen and (min-width: 600px) {
        flex-direction: row;
        width: 80%;        
    }
`;


export const List = style.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2px;    
    width: 100%;    
    @media screen and (min-width: 600px) {
        width: 90%;
        margin: auto;
    }
`;

export const ListItem = style.li`
    list-style: none;    
    background-color: rgba(255, 255, 255, 0.795);
    display: flex;
    justify-content: space-around;    
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.1);
    font-size: 1.4rem;
    font-weight: bold;    
    padding:2px;
    margin: 5px 0 5px 0;    
    width: 90%; 
    height: 80px;   
    transition: opacity .3s;     
    transition-delay: ${({delay}) => `${delay}ms`};     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};     
`;

export const Logo = style.img`
    width: 20%;
`;

export const Title = style.h1`
	color: rgba(0,0,0,0.8);
	padding: 2px;
	margin-top: 10px;
	text-align: left;
	font-weight: 100;
	font-size: 25px;    
    width: 100%;
    @media screen and (min-width: 600px) {
        width: 300px;
    }	
`;

export const Label = style.h4`
    color: rgba(0,0,0,0.8);
    padding-bottom: 4px;
    height: 34px;
    margin-top: 20px;
    margin-left: 4px;
    text-align: left;
    font-weight: 100;
    font-size: 25px;
    border-bottom: 1px solid #ddd; 
    width: 80%;
    @media screen and (min-width: 600px) {
        margin-left: none;
    }	
`;

export const Select = style.select`
    appearance: none;   
    height: 50px;
    font-size: 20px;
    font-weight: 100;
    cursor: pointer;    
    border: none;
    border-bottom: 2px solid #ddd;
    color: rgba(0,0,0,0.8);
    margin-top: 10px;
    padding: 10px;
    padding-right: 38px;    
     
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;  

    &:hover,
    &:focus {
      outline: none;
      color: #c0392b;      
      border-bottom-color: rgba(0,0,0,0.8);
    }

    width: 100%;
    @media screen and (min-width: 600px) {
        width: 240px;        
    }
`;

export const Circle = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;    
    color: #fff;
    font-size: 1rem;    
    font-weight: 100;
    background: rgba(0,0,0,0.8);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin:10px;
    overflow:hidden;
    padding:2px;
    position:relative;
`;

export const Footer = style.footer`
    display: flex;
    justify-content: center;    
    font-size: 0.8rem;
    margin-top: 30px;
`;
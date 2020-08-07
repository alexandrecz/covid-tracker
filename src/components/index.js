import style from 'styled-components';




export const AppButton = style.button`    
    cursor: pointer;
    outline: none;
    margin-left: 8px;
    display:inline-block;
    padding: 8px;
    border-radius:2px;   
    height:50px;
    width: 150px;
    border:none;
    background-color:rgb(44, 58, 71);
    color:white;
    font-size:16px;    
    transition: .5s ease-in;   

    &:hover{
        background-color:#727883;
        transition: background-color .5s;
      }
  `;
  



export const Input = style.input`
    margin: auto;
    font-size: 16px;
    padding: 14px;
    margin-right: 30px;
    border: none;
    border-bottom: 2px solid #ddd;    
    width: 350px;
    outline: none;
`;

export const Wrap = style.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
    flex-direction: row;
    transition: opacity .3s;     
    transition-delay: 150ms;     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};  
`;

export const Box = style.div`
    margin: 12px auto;
	width: 290px;
	height: 390px;
	text-align: center;
	border-radius: 3px;
	transition: 200ms ease-in-out;
    box-shadow: 0 0 15px rgba(0,0,0,0.7);
    background: url('https://source.unsplash.com/daily?nature');    
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
    
    &:hover {
        cursor: pointer;
          margin-bottom: -10px;
          box-shadow: 0 0 5px rgba(0,0,0,0.7);
      }
`;

export const Title = style.h1`
	color: #fff;
	padding: 20px;
	margin-top: 20px;
	text-align: center;
	font-weight: 100;
	font-size: 25px;
	background: rgba(0,0,0,0.8);
	box-shadow: 0 0 30px rgba(0,0,0,0.7);
`;

export const ContentText = style(Title)`
	color: #fff;
	padding: 8px;
	margin-top: 2px;
	text-align: left;
	font-weight: 100;
	font-size: 14px;
	background: rgba(0,0,0,0.8);
	box-shadow: 0 0 30px rgba(0,0,0,0.7);
`;


export const Content = style.div`
    width: 80px;
    height: 40px;
    position: relative;
    border-radius: 1px;
    margin: 2px auto;

    // background: #2b5876;  /* fallback for old browsers */
	// background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
	// background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	// box-shadow: 0 0 20px darkblue;
`;

export const Label = style.h4`
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-weight: 100;   
    top: 1px; 
`;
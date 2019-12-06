import React from 'react';

function Index(props){
    const loginValue = JSON.parse(localStorage.getItem('LoginValue'));
    
    return(
        <div style={{color:"blue"}}>
            <div>{loginValue[0].name}</div>
            <div>balabala</div>
        </div>
    );
}

export default Index;
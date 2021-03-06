import React from 'react'

//capitalize word
const capitalize = (word) =>{
    const new_word = word.toLowerCase();
    return new_word.charAt(0).toUpperCase() + new_word.slice(1);
}
function Alert(props) {
    return (
        <div style={{height:"50px"}}>
            {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
             {capitalize(props.alert.type)} : {props.alert.msg}
             </div>}
        </div>
     )
    
}

export default Alert




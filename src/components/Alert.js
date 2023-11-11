import React from 'react'

export default function Alert(props) {
    const capitalise = (word) =>{
        const lowerword = word.toLowerCase();
        return lowerword.charAt(0).toUpperCase() + lowerword.slice(1);
    }
    return (
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalise(props.alert.type)}: </strong>{props.alert.msg}
            </div>
    )
}

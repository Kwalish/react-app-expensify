import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is an admin warning</p> }
            
            <WrappedComponent {...props}/>
        </div>
    )
}

const withAuthenticationWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
            <WrappedComponent {...props}/> 
            ) : ( 
            <p>Please log in or register</p>
            ) 
            }            
        </div>
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = withAuthenticationWarning(Info)

// ReactDOM.render( <AdminInfo isAdmin={true} info="test"/>, document.getElementById('app'))
ReactDOM.render( <AuthInfo isAuthenticated={false} info="test"/>, document.getElementById('app'))


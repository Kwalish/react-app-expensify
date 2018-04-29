import React from 'react'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            Edit the expense with edit with {props.match.params.id}
        </div>
    )
}

export default EditExpensePage
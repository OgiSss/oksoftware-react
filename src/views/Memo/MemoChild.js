import React from 'react'

const MemoChild = (props) => {
    console.log('MEMO CHILD EXECUTED')
    return (
        <div style={{ border: '1px solid red' }}>
            <p>{props.title}</p>
        </div>
    )
}

export default React.memo(MemoChild)

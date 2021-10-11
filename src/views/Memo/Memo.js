import Button from 'components/UI/Button/Button';
import React, { useCallback, useState } from 'react'
import MemoChild from './MemoChild'

const Memo = () => {

    const [title, setTitle] = useState('123');

    const changeTitle = useCallback(() => {
        setTitle(prevState => prevState + prevState)
    }, [])
    return (
        <div style={{ border: '1px solid green', padding: 10 }}>
            <MemoChild title={title}></MemoChild>
            <Button onClick={changeTitle} >Change title</Button>
        </div>
    )
}

export default Memo

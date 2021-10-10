import { Paper } from '@material-ui/core';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #3f51b5; /* Green */
  border: none;
  color: white;
  padding: 11px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;  
`;

const UncontrolledComp = () => {

    const inputRef = useRef();

    const submitHandle = (event) => {
        event.preventDefault();
        alert('Submitted value ' + inputRef.current.value)
    }

    return (
        <Paper>
            <form no-validate="true" onSubmit={submitHandle}>

                <Input ref={inputRef} />
                <Button type="submit" >SUBMIT</Button>
            </form>
        </Paper>
    )
}

export default UncontrolledComp;
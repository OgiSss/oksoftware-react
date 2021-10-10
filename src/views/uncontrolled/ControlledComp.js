import Title from 'components/UI/Title/Title';
import React, { Fragment, useState } from 'react';
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

const ControlledComp = () => {

  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const inputChangeHandle = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <Input value={inputValue} onChange={inputChangeHandle} />
        <Button type="submit" >SUBMIT</Button>
      </form>
      <Title>{inputValue}</Title>
    </Fragment>
  )
}

export default ControlledComp;
import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/memberSlice";
import axios from "axios";

import { Context } from '../index';
import { useContext } from 'react';

const Login = () => {

  const navigate = useNavigate();

  // dispatch: 스토어의 state를 변경하기 위한 도구
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  // 컨텍스트에서 host 데이터 가져오기
  const { host } = useContext(Context);

  const handleChange = (event) => {

    // 이벤트가 발생한 엘리먼트에서 name과 value를 추출
    const { name, value } = event.target;

    // 복제본 생성
    const newUser = {...user};

    // state에 새로운 데이터 업데이트
    newUser[name] = value;
    
    setUser(newUser);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const response = await axios.post(
      `${host}/login`,
      user
    );

    // 로그인에 성공했으면, 응답받은 토큰과 회원정보를 state에 업데이트
    // 메인화면으로 이동
    if (response.status === 200) {
      // 디스패치를 사용하여 login 액션함수를 호출 => 리듀서 실행
      dispatch(login(response.data));
      navigate('/');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  };
  
  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" name="id" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            로그인
          </Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default Login
import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../index';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// 해당 게시물 데이터를 출력
// 제목과 내용은 수정 가능

const BoardModify = () => {
  
  const token = useSelector((state) => state.member.token);

  const navigate = useNavigate();

  // 기존 게시물 데이터를 state에 저장
  let [board, setBoard] = useState(null);

  // 파라미터 > 게시물 번호
  const params = useParams();

  // host
  const {host} = useContext(Context);

  // 게시물 조회 API 호출
  useEffect(()=>{

    // 함수 정의
    const apiCall = async () => {

      // 조회는 get
      const response = await axios.get(
        `${host}/board/read?no=${params.no}`, {
        headers: {
          Authorization: token
        }
      });

      if(response.status === 200){
        setBoard(response.data); // state 업데이트
      }else{
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      }

    }

    // 함수 호출
    apiCall();

  }, [host, params.no, token]);

  // 입력필드의 이벤트 함수
  const handleChange = (event) => {

    // 이벤트가 발생된 필드에서 name과 value를 추출
    const {name, value} = event.target;

    // 현재 value가 state로 설정되어 사용자가 값을 바꿔도 수정이 안됨, state 자체를 수정해야함.

    const newBoard = { ...board };
    newBoard[name] = value;
    setBoard(newBoard);
  }

  
  // 폼 이벤트 함수
  const handleSubmit = async (event) => {

    event.preventDefault();

    // 게시물 수정 API 호출
    // 수정은 put
    // 인자: 주소, 파라미터, 헤더
    const response = await axios.put(
      `${host}/board/modify`,
      board,
      {
        headers: {
          Authorization: token
        }
      }
    );
    
    // 요청에 성공했으면 상세화면으로 이동
    // 실패했으면 에러 발생시키기
    if(response.status === 204){
      navigate(`/board/read/${params.no}`);
    }else{
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  }

  // 게시물 삭제 버튼의 이벤트 함수
  const handleRemove = async () => {

    // 삭제 API 호출
    // 삭제는 delete
    // 인자: 주소와 헤더
    const response = await axios.delete(
      `${host}/board/remove?no=${board.no}`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    // 삭제 요청에 성공했으면 리스트로 이동
    if(response.status === 204){
      navigate('/board/list');
    }else{
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  }

  // 입력필드에 state 값을 설정하면 state의 우선순위가 더 높아서 사용자가 값을 바꿔도 수정이 안됨... state는 set함수로 수정해야함.
  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>
        { 
          board!==null && 
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="board.no">
              <Form.Label>번호</Form.Label>
              <Form.Control type="text" value={board.no} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.title">
              <Form.Label>제목</Form.Label>
              <Form.Control type="text" value={board.title} name='title' onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.content">
              <Form.Label>내용</Form.Label>
              <Form.Control as="textarea" rows={3} value={board.content} name='content' onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.writer">
              <Form.Label>작성자</Form.Label>
              <Form.Control type="text" value={board.writer} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.regDate">
              <Form.Label>등록일</Form.Label>
              <Form.Control type="text" value={board.regDate} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.modDate">
              <Form.Label>수정일</Form.Label>
              <Form.Control type="text" value={board.modDate} readOnly/>
            </Form.Group>
            <Button variant="primary" type="submit">
              저장
            </Button>
            <Button variant="danger" onClick={handleRemove}>삭제</Button>
          </Form>        
        }
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify
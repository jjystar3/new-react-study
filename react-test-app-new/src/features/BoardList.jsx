import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { Context } from '../index';

const BoardList = () => {
  
  // 게시물 리스트를 state에 저장
  let [data, setData] = useState(null);

  const navigate = new useNavigate();

  // Context에서 host 데이터 가져오기
  const {host} = useContext(Context);

  async function callAPI(){
    const response = await axios.get(
      `${host}/board/list`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwNzM3ODUsImV4cCI6MTczNDY2NTc4NSwic3ViIjoiYWRtaW4ifQ.Tt-4ddP4h9UeZiyrFs-uPnXLKpOFe2uTvHsQPaSqdbc',
      }
    });
  
    if(response.status !== 200){
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
    
    return response.data;
  }

  useEffect(()=>{

    const getData = async () => {
      const data = await callAPI();
      setData(data);
    }

    getData();
  }, []);

  return (
    <CustomCard>
      <CustomContainer>
        <Row>
            <Col sm={8}>
              <h3>게시물 리스트</h3>
            </Col>
            <Col sm={4}>
              <Button variant="secondary" onClick={ ()=>{
                navigate('/board/register');
              } } >게시물 등록</Button>
            </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {
              data !== null && data.map( (board)=>{
                const formattedDate = new Date(board.regDate).toLocaleString('en-GB', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                }).replace(',', '');

                return (
                      <tr key={board.no}>
                        <td><Link to={ '/board/read/'+board.no  }>{board.no}</Link></td>
                        <td>{board.title}</td>
                        <td>{board.writer}</td>
                        <td>{formattedDate}</td>
                      </tr>
                );
              })
            }
          </tbody>
        </Table>

      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList
import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { Context } from '../index';

const BoardList = () => {
  
  const token = useSelector((state) => state.member.token);

  // 게시물 리스트를 state에 저장
  let [data, setData] = useState(null);

  const navigate = new useNavigate();

  // Context에서 host 데이터 가져오기
  const {host} = useContext(Context);

  useEffect(()=>{

    const apiCall = async () => {
      
      const response = await axios.get(
        `${host}/board/list`, {
        headers: {
          Authorization: token
        }
      });
    
      if(response.status !== 200){
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      }
      
      setData(response.data); // 데이터를 상태에 저장
    }
    apiCall();
  }, [host, token]);

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
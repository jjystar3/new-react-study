// rafce => 자동완성
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

// 아이템을 비율로 배치
const Row = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
`;

// async~await: 비동기함수를 호출할 때 사용하는 문법
// 비동기함수는 코드를 순차적으로 처리하지 않고, 응답이 오면 실행된다

// axios.get함수는 서버에 응답을 받는 순간 완료
async function callAPI(){
    const response = await axios.get(
        'http://localhost:8080/board/list', {
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1NjgyMjIsImV4cCI6MTczNDE2MDIyMiwic3ViIjoidXNlciJ9.Kz0saorlklGD5abRk0lAOUw-S6Mh28B1iuJZbjz-ybk',
        }
    });

    // 응답코드가 200이 아니라면 에러 발생시키기
    if(response.status !== 200){
        throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
    console.log(response);
    console.log(response.data);
    
    return response.data;
}

function BoardList(){

    const navigate = new useNavigate();

    // 게시물 리스트를 state로 생성
    const [data, setData] = useState([]);

    useEffect(()=>{

        const getData = async () => {
            const data = await callAPI();
            setData(data); // state 업데이트
            console.log(data);            
        }

        getData();
    }, []);

    return (
        <CustomCard>
            <CustomContainer>
                <Row>
                    <h3>게시물 목록</h3>
                    <Button variant="primary" onClick={()=>{
                        navigate('/board/register');
                    }}>게시물 등록</Button>
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
                            data !== null && data.map((board)=>{
                                const formattedDate = new Date(board.regDate).toLocaleString('en-GB', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                }).replace(',', '');

                                return <tr>
                                    <td><Link to={'/board/read/'+board.no}>{board.no}</Link></td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                    <td>{formattedDate}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </CustomContainer>
        </CustomCard>
    );
}

export default BoardList;
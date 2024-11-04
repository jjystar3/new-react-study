import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: aliceblue;
`;

const Home = () => {
  
  console.log('Home..');  

  return(
    <HomeDiv>
      <h1>Home</h1>
      Home Page...
    </HomeDiv>
  );
};

// default 키워드를 사용하면 외부에서 다른이름으로 사용 가능
export default Home;

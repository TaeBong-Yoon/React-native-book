import React from 'react';
//@ts-ignore
import styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <Container>
      <Counter title="This is a Counter App" initValue={5} />
    </Container>
  );
};
export default App;

import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Label = Styled.Text``;
interface Props {}

const EmptyItem = ({}: Props) => {
  return (
    <Container>
      <Label>Press "+" button and add Todo Item</Label>
    </Container>
  );
};

export default EmptyItem;

import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    position: absolute;
    bottom: 0;
    align-self: center;
    justify-content: flex-end;
`;
const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
    margin-bottom: 40px;
`;
const Icon = Styled.Image``;

interface Props {
  onPress?: () => void;
}

const AddButton = ({onPress}: Props) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('~/Assets/Images/add.png')} />
      </ButtonContainer>
    </Container>
  );
};

export default AddButton;

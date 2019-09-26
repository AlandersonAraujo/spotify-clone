import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #292929;
`;


export const ContainerHeader = styled.View`
  display: flex;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-family: Arial;
  color: #FFF;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const View = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#121212',
})`
  margin-left: 10px;
  margin-right: 10px;
  height: 40px;
  width: 390px;
  background: #FFF;
  border-radius: 8px;
  border: 1px solid #7F8698;
`;

export const Text = styled.Text`
  margin-left: 10px;
  font-family: Arial;
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 200px;
  max-width: 200px;
  z-index: 5;
  margin-top: 15px;
  margin-left: 3px;
`;

export const Card = styled.View`
  flex: 1;
  background: #E39B41;
  border-radius: 5px;
  margin: 0 10px;
  height: 80px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const Annotation = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
  position: absolute;
  margin-left: 10px;
  margin-top: 7px;
`;

export const ContanerCard = styled.View`
  flex-direction: row;
  flex: 1;
`;
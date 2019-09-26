import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background: #292929;
`;
export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row
  margin-top: 15px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-family: Arial;
  color: #FFF;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Title2 = styled.Text`
  margin-left: 10px;
  font-family: Arial;
  color: #7a7a7a;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Title3 = styled.Text`
  margin-left: 10px;
  font-family: Arial;
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Title4 = styled.Text`
  margin-left: 10px;
  font-family: Arial;
  color: #7a7a7a;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const ContainerBody = styled.View`
  display: flex;
  flex-direction: row
  margin-top: 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FFF',
})`
  margin-left: 10px;
  margin-right: 3px;
  height: 40px;
  width: 310px;
  background: #202020;
  border-radius: 5px;
  border: 1px solid #202020;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 60px;
  background: #202020;
  border-radius: 5px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const TextButton = styled.Text`
  font-family: Arial;
  color: #FFF;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {padding: 10, paddingRight: 20},
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 105px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  color: #FFF;
  margin-left: 10px;
  font-weight: bold;
  margin-top: 35px;
`;

export const TabText2 = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  color: #7a7a7a;
  margin-left: 10px;
  font-weight: bold;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;
  width: 150px;
  margin-right: 14px;
`;

export const Tabs2 = styled.View`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-right: 14px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 105px;
  border-radius: 10px;
  position: absolute;
`;
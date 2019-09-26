import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #292929;
`;

export const ContainerHeader = styled.View`
  display: flex;
  margin-left: 370px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  margin-left: 18px;
  margin-top: 20px;
  font-family: Arial;
  color: #FFF;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
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
  font-size: 12px;
  color: #FFF;
  margin-left: 10px;
  margin-top: 5px;
`;

export const Tabs = styled.View`
  display: flex;
  width: 100px;
  margin-right: 14px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 105px;
  border-radius: 10px;
  position: absolute;
`;
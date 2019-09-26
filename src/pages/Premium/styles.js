import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #292929;
`;

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {padding: 10, paddingRight: 20},
})``;

export const TabItem = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 170px;
  background: #4fa671;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const TabText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TabText2 = styled.Text.attrs({
  numberOfLines: 6,
})`
  font-size: 13px;
  color: #FFF;
  text-align: center;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;
  width: 300px;
  margin-right: 14px;
`;

export const Tabs2 = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 190px;
`;


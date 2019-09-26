import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #292929;
`;

export const ContainerHeader = styled.View`
  display: flex;
  margin-left: 370px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  margin-left: 18px;
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

export const TabItemContainer = styled.View`
  width: 160px;
  height: 160px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image2 = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  position: absolute;
`;

export const Tabs2 = styled.View`
  display: flex;
  width: 160px;
  margin-right: 14px;
`;

export const TabText2 = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 11px;
  color: #7a7a7a;
  margin-left: 10px;
  margin-top: 1px;
`;

export const TabItemContainer2 = styled.View`
  width: 160px;
  height: 160px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image3 = styled.Image`
  width: 160px;
  height: 160px;
  position: absolute;
`;
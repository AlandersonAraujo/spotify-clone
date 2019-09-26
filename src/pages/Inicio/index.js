import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Container, ContainerHeader, Title, TabsContainer, TabItem, TabText, Tabs, Image} from './styles';
import logo from '../../assets/hipsters.png';

export default class Inicio extends Component {
  render() {
    return (
      <Container>
        <ContainerHeader>
          <Icon name="gear" size={25} color="#FFF" />
        </ContainerHeader>
        <Title>Tocadas recentemente</Title>
        <TabsContainer>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <TabText>Hipsters Ponto Tech</TabText>
          </Tabs>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <TabText>Hipsters Ponto Tech</TabText>
          </Tabs>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <TabText>Hipsters Ponto Tech</TabText>
          </Tabs>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <TabText>Hipsters Ponto Tech</TabText>
          </Tabs>
      </TabsContainer>
      </Container>
    );
  }
}

import React, {Component} from 'react';
import {Container, ContainerHeader, Title, Title2, Title3, Title4, ContainerBody, Input, Button, TextButton, TabsContainer, Tabs, TabItem, Image, TabText, TabText2, Tabs2} from './styles';
import logo from '../../assets/pac.png';
export default class Biblioteca extends Component {
  render() {
    return (
     <Container>
       <ContainerHeader>
          <Title>Música</Title>
          <Title2>Podcasts</Title2>
        </ContainerHeader>
        <ContainerHeader>
          <Title3>Playlists</Title3>
          <Title4>Artistas</Title4>
          <Title4>Álbuns</Title4>
        </ContainerHeader>
        <ContainerBody>
        <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Procure entre playlists"
            style={{ color: 'white' }}
          />
          <Button title="Filtros">
            <TextButton>Filtros</TextButton>
          </Button>
        </ContainerBody>
        <TabsContainer>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <Tabs2>
            <TabText>Músicas Curtidas</TabText>
            <TabText2>9 músicas</TabText2>
            </Tabs2>
          </Tabs>
          </TabsContainer>
          <TabsContainer>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <Tabs2>
            <TabText>Músicas Curtidas</TabText>
            <TabText2>9 músicas</TabText2>
            </Tabs2>
          </Tabs>
          </TabsContainer> 
          <TabsContainer>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <Tabs2>
            <TabText>Músicas Curtidas</TabText>
            <TabText2>9 músicas</TabText2>
            </Tabs2>
          </Tabs>
          </TabsContainer> 
          <TabsContainer>
          <Tabs>
            <TabItem>
            <Image source={logo} />
            </TabItem>
            <Tabs2>
            <TabText>Músicas Curtidas</TabText>
            <TabText2>9 músicas</TabText2>
            </Tabs2>
          </Tabs>
          </TabsContainer>  
     </Container>
    );
  }
}
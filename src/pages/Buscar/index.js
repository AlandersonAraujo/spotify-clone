import React, {Component} from 'react';
import {Container, ContainerHeader, Title, Input, Text, ContanerCard, Content, Card, Annotation} from './styles';

export default class Buscar extends Component {
  render() {
    return (
      <Container>
        <ContainerHeader>
          <Title>Buscar</Title>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Artistas, músicas ou podcasts"
            style={{ color: 'white' }}
          />
        </ContainerHeader>
        <Text>Seus gêneros favoritos</Text>
        <ContanerCard>
          <Content>
            <Card>
              <Annotation>Hip Hop</Annotation>
            </Card>
            </Content>
          <Content>
            <Card>
             <Annotation>Podcast</Annotation>
            </Card>
          </Content>
        </ContanerCard>
        <ContanerCard>
          <Content>
            <Card>
              <Annotation>Hip Hop</Annotation>
            </Card>
          </Content>
          <Content>
            <Card>
             <Annotation>Podcast</Annotation>
            </Card>
          </Content>
        </ContanerCard>
        <Text>Navegar por todas as seções</Text>
        <ContanerCard>
          <Content>
            <Card>
              <Annotation>Hip Hop</Annotation>
            </Card>
          </Content>
          <Content>
            <Card>
             <Annotation>Podcast</Annotation>
            </Card>
          </Content>
        </ContanerCard>
        <ContanerCard>
          <Content>
            <Card>
              <Annotation>Hip Hop</Annotation>
            </Card>
          </Content>
          <Content>
            <Card>
             <Annotation>Podcast</Annotation>
            </Card>
          </Content>
        </ContanerCard>
      </Container>
    );
  }
}
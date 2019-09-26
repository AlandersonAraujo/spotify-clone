import React, {Component}from 'react';
import { Container, TabsContainer, Tabs, TabItem, Tabs2, TabText, TabText2} from './styles';

export default class Premium extends Component {
  render() {
    return (
      <Container>
       <TabsContainer>
          <Tabs>
            <TabItem>
            <Tabs2>
            <TabText>Premium Individual</TabText>
            <TabText2>Experimente o Premium grátis por 3 meses | Música sem anúncio | Sem limite para pular de faixas | Cancele quando quiser</TabText2>
            </Tabs2>
            </TabItem>
          </Tabs>
          </TabsContainer>
          <TabsContainer>
          <Tabs>
            <TabItem>
            <Tabs2>
            <TabText>Premium Individual</TabText>
            <TabText2>Experimente o Premium grátis por 3 meses | Música sem anúncio | Sem limite para pular de faixas | Cancele quando quiser</TabText2>
            </Tabs2>
            </TabItem>
          </Tabs>
          </TabsContainer>
          <TabsContainer>
          <Tabs>
            <TabItem>
            <Tabs2>
            <TabText>Premium Individual</TabText>
            <TabText2>Experimente o Premium grátis por 3 meses | Música sem anúncio | Sem limite para pular de faixas | Cancele quando quiser</TabText2>
            </Tabs2>
            </TabItem>
          </Tabs>
          </TabsContainer>
      </Container>
    );
  }

}


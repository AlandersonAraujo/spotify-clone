import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Container, ContainerHeader, Title, TabsContainer, TabItem, TabText, Tabs, Image, TabItemContainer, Image2, Tabs2, TabText2, TabItemContainer2, Image3} from './styles';
import logo from '../../assets/hipsters.png';
import logo2 from '../../assets/nerdcast.png';
import logo3 from '../../assets/pac.png';

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
      <Title>Seus podcasts mais escutados</Title>
      <TabsContainer>
          <Tabs2>
            <TabItemContainer>
            <Image2 source={logo2} />
            </TabItemContainer>
            <TabText>Nerdcast</TabText>
            <TabText2>Jovem Nerd</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer>
            <Image2 source={logo2} />
            </TabItemContainer>
            <TabText>Nerdcast</TabText>
            <TabText2>Jovem Nerd</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer>
            <Image2 source={logo2} />
            </TabItemContainer>
            <TabText>Nerdcast</TabText>
            <TabText2>Jovem Nerd</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer>
            <Image2 source={logo2} />
            </TabItemContainer>
            <TabText>Nerdcast</TabText>
            <TabText2>Jovem Nerd</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer>
            <Image2 source={logo2} />
            </TabItemContainer>
            <TabText>Nerdcast</TabText>
            <TabText2>Jovem Nerd</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer>
            <Image2 source={logo2} />
            </TabItemContainer>
            <TabText>Nerdcast</TabText>
            <TabText2>Jovem Nerd</TabText2>
          </Tabs2>
      </TabsContainer>
      <Title>Suas músicas e álbuns favoritos</Title>
      <TabsContainer>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
          <Tabs2>
            <TabItemContainer2>
            <Image3 source={logo3} />
            </TabItemContainer2>
            <TabText>All Eyez On Me</TabText>
            <TabText2>2Pac</TabText2>
          </Tabs2>
      </TabsContainer>
      </Container>
    );
  }
}

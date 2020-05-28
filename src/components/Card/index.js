import React from 'react';

import { 
    Container, 
    Category, 
    Content, 
    Img, 
    Label,
    CardContainer
} from './styles';

import Breathing from '../../assets/003-difficulty-breathing.png';
import Cough from '../../assets/024-cough.png';
import Fever from '../../assets/034-fever.png';
import RunnyNose from '../../assets/011-runny-nose.png';

const ContentItems = [
    {
        key: 1,
        img: Breathing,
        label: 'Difficulty Breathing'
    },
    {
        key: 2,
        img: Cough,
        label: 'Cough'
    },
    {
        key: 3,
        img: Fever,
        label: 'Fever'
    },
    {
        key: 4,
        img: RunnyNose,
        label: 'Runny Nose'
    },
]

const Card = () => {
  return (
      <Container>
          <Category>Symptoms</Category>

          <CardContainer>
            {ContentItems.map(item => (
                <Content key={item.key} >
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Content>
            ))}
          </CardContainer>
      </Container>
  );
}

export default Card;
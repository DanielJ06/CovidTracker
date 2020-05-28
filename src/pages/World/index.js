import React from 'react';

import { PieChart  } from 'react-native-svg-charts'

import Icon from '@expo/vector-icons/FontAwesome5';

import { 
    Container,
    HeaderArea,
    Content,
    Title,
    DataContainer,
    Statistics,
    DataType,
    Label,
    DataNumber,
    Chart
} from './styles';


const World = () => {
  const data = [
    {
        key: 1,
        amount: 5677213,
        svg: { fill: '#efb960' },
    },
    {
        key: 2,
        amount: 357189,
        svg: { fill: '#e84a5f' }
    },
    {
        key: 3,
        amount: 2286305,
        svg: { fill: '#a8df65' }
    }
  ]

  return (
      <Container>
        <Content>
          <HeaderArea>
            <Icon name="globe-americas" size={32} color="#fff" />
            <Title>World overview</Title>
          </HeaderArea>

          <DataContainer>
            <Statistics style={{ backgroundColor: '#efb960' }} >
              <DataType>
                <Icon name="clipboard-check" size={28} color="#fff" />
                <Label>Confirmed:</Label>
              </DataType>
              <DataNumber>55.401</DataNumber>
            </Statistics>
            <Statistics style={{ backgroundColor: '#e84a5f' }} >
              <DataType>
                <Icon name="skull" size={28} color="#fff" />
                <Label>Deaths:</Label>
              </DataType>  
              <DataNumber>55.401</DataNumber>
            </Statistics>
            <Statistics style={{ backgroundColor: '#a8df65' }} >
              <DataType>
                <Icon name="heartbeat" size={28} color="#fff" />
                <Label>Recovered:</Label>
              </DataType>
              <DataNumber>55.401</DataNumber>
            </Statistics>
          </DataContainer>
        </Content>

        <Chart>
          <PieChart
            style={{ height: 150 }}
            valueAccessor={({ item }) => item.amount}
            data={data}
            outerRadius={'95%'}
          />
        </Chart>
      </Container>
  );
}

export default World;
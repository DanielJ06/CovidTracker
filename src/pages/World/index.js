import React, { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { PieChart  } from 'react-native-svg-charts'

import Icon from '@expo/vector-icons/FontAwesome5';
import GoBack from '../../components/GoBack';

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
  const route = useRoute();
  const { world } = route.params

  const chartData = [
    {
        key: 1,
        amount: world.TotalConfirmed,
        svg: { fill: '#efb960' },
    },
    {
        key: 2,
        amount: world.TotalDeaths,
        svg: { fill: '#e84a5f' }
    },
    {
        key: 3,
        amount: world.TotalRecovered,
        svg: { fill: '#a8df65' }
    }
  ]

  return (
      <Container>
        <Content>
          <GoBack />
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
                <DataNumber>{world.TotalConfirmed}</DataNumber>
              </Statistics>
              <Statistics style={{ backgroundColor: '#e84a5f' }} >
                <DataType>
                  <Icon name="skull" size={28} color="#fff" />
                  <Label>Deaths:</Label>
                </DataType>  
                <DataNumber>{world.TotalDeaths}</DataNumber>
              </Statistics>
              <Statistics style={{ backgroundColor: '#a8df65' }} >
                <DataType>
                  <Icon name="heartbeat" size={28} color="#fff" />
                  <Label>Recovered:</Label>
                </DataType>
                <DataNumber>{world.TotalRecovered}</DataNumber>
              </Statistics>
            </DataContainer>
        </Content>

        <Chart>
          <PieChart
            style={{ height: 150 }}
            valueAccessor={({ item }) => item.amount}
            data={chartData}
            outerRadius={'95%'}
          />
        </Chart>
      </Container>
  );
}

export default World;
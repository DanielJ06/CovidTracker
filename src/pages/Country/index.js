import React from 'react';

import { useRoute } from '@react-navigation/native';
import { PieChart  } from 'react-native-svg-charts'

import Icon from '@expo/vector-icons/FontAwesome5';
import GoBack from '../../components/GoBack';

import numberFormat from '../../utils/formatter';

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


const Country = () => {
  const route = useRoute();
  const { countryData } = route.params;

  const chartData = [
    {
        key: 1,
        amount: countryData.TotalConfirmed,
        svg: { fill: '#efb960' },
    },
    {
        key: 2,
        amount: countryData.TotalDeaths,
        svg: { fill: '#e84a5f' }
    },
    {
        key: 3,
        amount: countryData.TotalRecovered,
        svg: { fill: '#a8df65' }
    }
  ]

  return (
      <Container>
        <Content>
          <GoBack />
          <HeaderArea>
            <Title>{countryData.Country} overview</Title>
          </HeaderArea>

            <DataContainer>
              <Statistics style={{ backgroundColor: '#efb960' }} >
                <DataType>
                  <Icon name="clipboard-check" size={28} color="#fff" />
                  <Label>Confirmed:</Label>
                </DataType>
                <DataNumber>{numberFormat(countryData.TotalConfirmed)}</DataNumber>
              </Statistics>
              <Statistics style={{ backgroundColor: '#e84a5f' }} >
                <DataType>
                  <Icon name="skull" size={28} color="#fff" />
                  <Label>Deaths:</Label>
                </DataType>  
                <DataNumber>{numberFormat(countryData.TotalDeaths)}</DataNumber>
              </Statistics>
              <Statistics style={{ backgroundColor: '#a8df65' }} >
                <DataType>
                  <Icon name="heartbeat" size={28} color="#fff" />
                  <Label>Recovered:</Label>
                </DataType>
                <DataNumber>{numberFormat(countryData.TotalRecovered)}</DataNumber>
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

export default Country;
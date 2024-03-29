import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Icon from '@expo/vector-icons/MaterialIcons';

import { 
    Container,
    InfoCard,
    InfoTitle,
    InfoDesc,
    BtnArea,
    StatisticBtn,
    BtnText
} from './styles';


import Disease from '../../components/Card';

const Home = () => {
  const [cases, setCases] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/summary');
      setCases(data);
      setLoading(true);
    }

    loadData()
  }, [])

  const navigation = useNavigation();

  function navigateToGlobal() {
    navigation.navigate('World', { world: cases.Global, loading });
  };

  function navigateToCountries() {
    navigation.navigate('Countries', { countries: cases.Countries, loading });
  }

  return (
      <Container>
          <InfoCard>
              <InfoTitle>What is covid-19?</InfoTitle>
              <InfoDesc>
                Coronavirus disease (COVID-19) is an infectious 
                disease caused by a newly discovered coronavirus.
                Most people who get sick from COVID-19 will have mild 
                to moderate symptoms and will recover without special treatment.
              </InfoDesc>
              <InfoDesc>
                The virus that causes COVID-19 is transmitted mainly
                through droplets generated when an infected person 
                coughs, sneezes or exhales. These droplets are too 
                heavy to remain in the air and are quickly deposited 
                on floors or surfaces.
              </InfoDesc>

              <BtnArea>
                <StatisticBtn onPress={navigateToGlobal} >
                    <Icon name="public" color="#fff" size={16} />
                    <BtnText>World</BtnText>
                </StatisticBtn>
                <StatisticBtn onPress={navigateToCountries} >
                    <Icon name="flag" color="#fff" size={16} />
                    <BtnText>Countries</BtnText>
                </StatisticBtn>
              </BtnArea>
          </InfoCard>

          <Disease />
      </Container>
  );
}

export default Home;
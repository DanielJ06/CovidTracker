import React, { useState, useEffect } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome5';

import { 
  Container,
  CountryContainer,
  Name,
  List,
  SearchArea,
  Label,
  SearchInput
} from './styles';

const Countries = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const { countries } = routes.params;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(countries);

  useEffect(() => {
    const res = countries.filter((contry) => (
      contry.Country.toLowerCase().includes(search.toLowerCase())
    ));
    setFilter(res);
  }, [search])

  function navigateToCountry(item) {
    navigation.navigate("Country", { countryData: item })
  }

  return (
    <Container>
      <SearchArea>
        <Label>Filter by specific country:</Label>
        <SearchInput 
          placeholder="Ex: Brazil"
          value={search}
          onChangeText={setSearch}  
        />
      </SearchArea>

      <List 
        data={filter}
        keyExtractor={(country) => country.CountryCode}
        renderItem={({item}) => (
          <CountryContainer 
            key={item.CountryCode}
            onPress={() => navigateToCountry(item)}
          >
            <Name>{item.Country} - {item.CountryCode}</Name>
            <Icon name="chart-line" size={21} color="#FFF" />
          </CountryContainer>
        )}
      />
    </Container>
  );
}

export default Countries;
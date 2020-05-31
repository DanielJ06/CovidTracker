import React from 'react';

import {useNavigation} from '@react-navigation/native';
import { Container } from './styles';

import Icon from '@expo/vector-icons/MaterialIcons';

const GoBack = () => {
  const navigation = useNavigation();

  function navigateToLastPage() {
    navigation.goBack();
  }

  return (
      <Container onPress={navigateToLastPage}>
        <Icon name="keyboard-backspace" size={24} color="#fff" />
      </Container>
  );
}

export default GoBack;
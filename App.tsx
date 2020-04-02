// lib imports
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Pictorio from './Pictorio';

// own imports
import isLeapYearString, { isLeapYear } from './leapYear';

const year = new Date().getFullYear();

export default function App() {
  return <Pictorio />;
}

const OverviewScreen = () => {
  return (
    <Wrapper>
      <Box>
        <Text>Text 1</Text>
      </Box>
      <Box>
        <Text>Text 2</Text>
      </Box>
      <Box>
        <Text>Text 3</Text>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  margin: 50px 0;
  background-color: ${props => props.color ? 'red' : 'blue'};
`;


const Box = styled.View`
  flex: 1;
  margin: 10px;
  background-color: green;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;



/**
 * OTHER STUFF
 */

const OriginalApp = () => (
  <Container color={'blue'}>
    <HelloWorldText>Hello World!</HelloWorldText>
  </Container>
);

const Container = styled.View`
  margin: 10px 0;
  flex: 1;
  background-color: ${props => props.color ? 'red' : 'blue'};
  align-items: center;
  justify-content: center;
`;

const HelloWorldText = styled.Text`
  font-size: 20;
  border: solid 3px green;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 20 },
});
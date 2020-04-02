import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Counter = () => {
  const year = new Date().getFullYear();
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <Text>Clicked {count} times</Text>
        <Button
            onPress={() => setCount(count + 1)}
        >Increment</Button>
    </Container>

  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
    background-color: yellow;
    padding: 10;
`;

export default Counter;

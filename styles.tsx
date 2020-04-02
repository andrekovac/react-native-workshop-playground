import styled from "styled-components/native";

type ColorProps = {
  color: string;
};

export const Wrapper = styled.View<ColorProps>`
  flex: 1;
  margin: 50px 0;
  background-color: ${props => (props.color ? "red" : "blue")};
`;

export const Box = styled.View`
  flex: 1;
  margin: 10px;
  background-color: green;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Container = styled.View<ColorProps>`
  margin: 10px 0;
  flex: 1;
  background-color: ${props => (props.color ? "red" : "blue")};
  align-items: center;
  justify-content: center;
`;

export const HelloWorldText = styled.Text`
  font-size: 20;
  border: solid 3px green;
`;

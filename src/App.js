import React from "react";
import styled from "styled-components";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";

const AppContainer = styled.div`
    font-family = Arial, Helvetica, sans-serif;
    margin: 2rem;
    color: hsl(360, 90%, 50%);
`;

const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default hot(module)(App);

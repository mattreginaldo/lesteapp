import styled from 'styled-components/native';

const ContainerScroll = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    minHeight: props.theme.window.height,
  },
}))``;

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
`;

const Form = styled.View`
  width: 100%;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

export {ContainerScroll, Container, Form};

import styled from 'styled-components/native';

export const NewNotification = styled.View`
  background-color: ${({ theme }) => theme.colors.third};
  width: ${({ theme }) => theme.responsive.value(10)}px;
  height: ${({ theme }) => theme.responsive.value(10)}px;
  position: absolute;
  top: 11px;
  right: 13px;
  z-index: 1;
  border-radius: 10px;
`;

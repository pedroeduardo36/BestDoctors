import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({theme}) => theme.metrics.px(8)}px;
  height: ${({theme}) => theme.metrics.px(28)}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.metrics.px(14)}px;
  margin-right: ${({theme}) => theme.metrics.px(8)}px;
`;

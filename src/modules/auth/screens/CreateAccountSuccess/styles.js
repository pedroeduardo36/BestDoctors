import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const SuccessImg = styled.Image`
  width: ${({theme}) => theme.metrics.px(230)}px;
  height: ${({theme}) => theme.metrics.px(230)}px;
`;

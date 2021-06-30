import styled from 'styled-components/native';

export const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: ${({theme}) => theme.metrics.wp(100)}px;
  height: ${({theme}) => theme.metrics.px(64)}px;
  background-color: ${({theme}) => theme.colors.greyLight};
  border-top-left-radius: ${({theme}) => theme.metrics.px(24)}px;
  border-top-right-radius: ${({theme}) => theme.metrics.px(24)}px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

export const BarItem = styled.TouchableOpacity`
  display: flex;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

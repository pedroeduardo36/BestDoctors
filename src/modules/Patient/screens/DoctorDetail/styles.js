import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    display: flex;
    width: ${({theme}) => theme.metrics.baseWidth}px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: ${({theme}) => theme.metrics.px(32)}px;
`;

export const RowView = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: baseline;
    justify-content: flex-start;
`;

import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 80,
  },
})`
  width: 100%;
  height: 100%;
`;

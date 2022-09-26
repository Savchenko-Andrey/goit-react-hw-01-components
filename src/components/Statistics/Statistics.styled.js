import styled from 'styled-components';

export const CardStatistics = styled.section`
  margin-top: 10px;
  border-radius: 15px;
  width: 386px;
  background-color: #bbacac;
  box-shadow: rgb(0 0 0 / 24%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const CardTitle = styled.h2`
    text-align: center;
  color: white;
  font-size: 50px;
  text-shadow: 0px 0.5px 0 rgb(244, 161, 199), 0px -1px 0 rgb(244, 161, 199),
    0.5px 0px 0 rgb(244, 161, 199), -1px 0px 0 rgb(244, 161, 199),
    0.5px 0.5px 0 rgb(244, 161, 199), 1px -1px 0 rgb(244, 161, 199),
    -1px 1px 0 rgb(244, 161, 199), -1px -1px 0 rgb(244, 161, 199);
  -webkit-text-shadow: 0px 0.5px 0 rgb(244, 161, 199),
    0px -1px 0 rgb(244, 161, 199), 0.5px 0px 0 rgb(244, 161, 199),
    -1px 0px 0 rgb(244, 161, 199), 0.5px 0.5px 0 rgb(244, 161, 199),
    1px -1px 0 rgb(244, 161, 199), -1px 1px 0 rgb(244, 161, 199),
    -1px -1px 0 rgb(244, 161, 199);
  -moz-text-shadow: 0px 0.5px 0 rgb(244, 161, 199),
    0px -1px 0 rgb(244, 161, 199), 0.5px 0px 0 rgb(244, 161, 199),
    -1px 0px 0 rgb(244, 161, 199), 0.5px 0.5px 0 rgb(244, 161, 199),
    1px -1px 0 rgb(244, 161, 199), -1px 1px 0 rgb(244, 161, 199),
    -1px -1px 0 rgb(244, 161, 199);
`;

export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 4px;
`;
import styled from 'styled-components';

export const CardList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100px;
    height: 100px;
    background-color: white; 
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const CardSpan = styled.span`
    color: white;
  font-size: 20px;
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

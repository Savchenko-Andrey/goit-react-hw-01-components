import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px  solid white;
  margin-bottom: 15px;
`;

export const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 80px ;
  margin-bottom : 10px;

  background-color: ${props => {
    return props.selected ? "green" : "red"
  }};
`;

export const ImgUser = styled.div`
  width: 100px;
  height: 100px;
  background-color: white; 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.p`
    color: white;
  font-size: 35px;
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
`

import PropTypes from 'prop-types';
import {CardList, CardSpan} from './StatisticsInfo.styled';

export const StatisticsInfo = ({data}) => {
    return data.map(item => {
     return (
       <CardList key={item.id}>
         <CardSpan>{item.label}</CardSpan>
         <CardSpan>{item.percentage} %</CardSpan>
       </CardList>
     );
   });
};

StatisticsInfo.propTypes = {
  data: PropTypes.array.isRequired,
};
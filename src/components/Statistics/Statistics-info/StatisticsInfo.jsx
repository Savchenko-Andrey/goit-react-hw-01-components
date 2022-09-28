import PropTypes from 'prop-types';
import {CardLi, CardSpan} from './StatisticsInfo.styled';

export const StatisticsInfo = ({data}) => {
    return data.map(item => {
     return (
       <CardLi key={item.id}>
         <CardSpan>{item.label}</CardSpan>
         <CardSpan>{item.percentage} %</CardSpan>
       </CardLi>
     );
   });
};

StatisticsInfo.propTypes = {
  data: PropTypes.array.isRequired,
};
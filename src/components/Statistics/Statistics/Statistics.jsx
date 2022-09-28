import PropTypes from 'prop-types';
import { StatisticsInfo } from '../Statistics-info/StatisticsInfo';
import { CardStatistics, CardTitle, CardList } from './Statistics.styled';

export const Statistics = ({title, stat}) => {
  return <CardStatistics >
    <div>
      {title && <CardTitle>{title}</CardTitle>}
    </div>

  <CardList>
    <StatisticsInfo data={stat}/>
  </CardList>
</CardStatistics>
}

Statistics.propTypes = {
  stat: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
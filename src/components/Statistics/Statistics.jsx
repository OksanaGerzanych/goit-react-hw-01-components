import PropTypes from 'prop-types';
import { StatisticsBox } from './Statistics.styled';
import { Title } from './Statistics.styled';
import { StatList } from './Statistics.styled';
import { Item } from './Statistics.styled';
import { Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      { title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

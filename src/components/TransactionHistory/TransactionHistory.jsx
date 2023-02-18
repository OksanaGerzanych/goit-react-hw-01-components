import PropTypes from 'prop-types';
import { Transactions } from './Transactions.styled';
import { Thead } from './Transactions.styled';
import { Tr } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <Thead>
        <Tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Tr>
          );
        })}
      </tbody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

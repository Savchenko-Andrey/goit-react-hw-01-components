import PropTypes from 'prop-types';
import { TableRow, Tableth} from './TransactionData.styled'

export const TransactionData = ({transactions}) => {
    return transactions.map(items => {
        return(
            <TableRow key={items.id}>
                <Tableth>{items.type}</Tableth>
                <Tableth>{items.amount}</Tableth>
                <Tableth>{items.currency}</Tableth>
            </TableRow>
        )
    })
}

TransactionData.prototype = {
    data: PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  };
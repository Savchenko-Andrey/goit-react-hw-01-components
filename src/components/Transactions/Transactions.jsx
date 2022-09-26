import PropTypes from 'prop-types';
import {TransactionData} from './TransactionData/TransactionData'
import { Table, Title, Type, Amount, Currency} from './Transactions.style'
export const Transactions = ({items}) => {
    return <Table>
    <thead>
      <Title>
        <Type>Type</Type>
        <Amount>Amount</Amount>
        <Currency>Currency</Currency>
      </Title>
    </thead>
    <thead>
        <TransactionData transactions={items}/>
    </thead>
  </Table> 
}

Transactions.prototype = {
    data: PropTypes.exact.isRequired,
  };
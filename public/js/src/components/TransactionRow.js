function TransactionRow (props) {
    return (    
        <tr>
        <td>{props.id}</td>
        <td>{props.orderDate}</td>
        <td>{props.orderTime}</td>
        <td>{props.amount}</td>
        </tr>
    )
}
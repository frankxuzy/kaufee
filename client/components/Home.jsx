import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
import {
  requestCurrentOrder,
  requestUsers,
  orderComplete,
  deleteItemById
} from '../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.markComplete = this.markComplete.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  markComplete () {
    this.props.dispatch(orderComplete(this.props.orderId))
  }

  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
    this.props.dispatch(requestUsers())
  }

  deleteItem (id) {
    this.props.dispatch(deleteItemById(id))
  }

  render () {
    const orders = this.props.orders || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        <OrderList orders={orders} onClickFn={this.deleteItem} />
        <div className="completed">
          <button onClick={this.markComplete}>Mark as Complete</button>
        </div>
        <AddToOrder/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.currentOrder.id,
    orders: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Home)

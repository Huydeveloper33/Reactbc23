//rcc
import React, { Component } from 'react'

export default class CardProduct extends Component {

    


  render() {
      /*
      This.props: là thuộc tính có săn của component để
      nhận giá trị từ component cha truyền vào (là component
        nào đang sử dụng thẻ này render)
        this.props ko thể gán lại giá trị (readonly)

      */
    

        let {product} = this.props;


    return (
      <div className='card'>
          <img src={product.img} alt="...." />
          <div className="card-body">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className='btn btn-success'>Click buy</button>
          </div>
      </div>
    )
  }
}

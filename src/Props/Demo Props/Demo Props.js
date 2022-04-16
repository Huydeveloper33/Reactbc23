import React, { Component } from 'react'
import CardProduct from './CardProduct'

export default class DemoProps extends Component {

product1={
  id:1,
  name:"Iphone",
  price:'1,000',
  img:"https://picsum.photos/id/1/200"
  

}
product2={
  id:2,
  name:"SamSung",
  price:'5,000',
  img:"https://picsum.photos/id/20/200"
  

}


  render() {
    return (
      <div className='container'>
        <div className='d-flex'>
          <div className='w-25'>
            <CardProduct product={this.product1} />
          </div>
          <div className='w-25 ml-5'>
            <CardProduct product={this.product2}
             />
          </div>
          <div className='w-25 ml-5'>
            {/* <CardProduct /> */}
          </div>
        </div>

      </div>
    )
  }
}


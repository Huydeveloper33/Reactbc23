import React, { Component } from 'react'

export default class Login extends Component {



  handleLogin = ()=>{
  console.log('login');
  //this.props.history: tại vì đc load ra từ thẻ route
  let usName = document.querySelector('#username').value;
  let pass = document.querySelector('#password').value;
  if(usName === 'cybersoft' && pass ==="cybersoft"){
    alert('Đăng nhập thành công>??!');
    //Chuyển hướng trang
    this.props.history.push('/profile') 
  }else{
    alert('Tài khoản hay mật khẩu ko đúng!!')
  }
  }
  render() {
    return (
      <div className='container'>
       <h3>Login</h3>
       <div class="form-group">
         <p>User name</p>
         <input className='form-caontrol' id='username' name='usernmae'/>
       </div>     
       <div class="form-group">
         <p>Password</p>
         <input className='form-caontrol' id='password' name='password'/>
       </div>      
       <div class="form-group">
        <button className='btn btn-success' onClick={()=>{
                  this.handleLogin();
        }}></button>
       </div>   
      </div>
    )
  }
}

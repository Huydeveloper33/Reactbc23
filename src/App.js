import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayOut from './Components/BTLayout/BTLayOut';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import DemoProps from './Props/Demo Props/Demo Props';
import ShoesShop from './Props/ShoeShop/ShoesShop';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
import TangGiamSoLuong from './DemoRedux/TangGiamSoLuong/TangGiamSoLuong';
import BaiTapChonXeRedux from './DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
import BaiTapGioHangRedux from './DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import { BaiTapGameXucXac } from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';



//Cấu hình route cho app component
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import HeaderHome from './Components/HeaderHome/HeaderHome';
import Profile from './pages/Profile/Profile';
import BaiTapQuanLyNguoiDung from './pages/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import LifeCycle from './pages/LifeCycle/LifeCycle';

function App() {
  return (
    <BrowserRouter>
    <HeaderHome/>
      <Switch>
      <Route exact path={'/home'} component={Home} />
        <Route exact  path={'/about'} component={About} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/profile'} component={Profile} />
        <Route exact path={'/btqlnd'} component={BaiTapQuanLyNguoiDung} />
        <Route exact path={'/lifecycle'} component={LifeCycle} />
        
        <Route exact path={'/'} component={Home} />
      </Switch>





    </BrowserRouter>
  );
}

export default App;

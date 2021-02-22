import logo from '../images/logo.svg'
import sublinks from '../modules/data' 
export const Navbar=()=>{
return <nav className="nav-contnet">
<div className="nav-content">
<div className="img">
  <img src={logo} alt=""/>
</div>
<div className="content">
 <button className="btn">products</button>
 <button className="btn">developers</button>
 <button className="btn">company</button>
</div>
<div className="siginin">
  <button className="sigin-in">sign in</button>
</div>
</div>
</nav>

 
}
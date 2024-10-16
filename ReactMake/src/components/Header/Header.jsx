import MyAppicon from '../../assets/logo.svg'
import IconMenu from '../../assets/images/icon-menu.svg'
import './Header.css'

const Header = () =>{
    return(
        <div className='hero'>

            <main className="navi">
                <div className="navlogo">
                    
                <img src={MyAppicon} alt="" />
                </div>
                <div className="navlinks">
                    <nav>Feature</nav>
                    <nav>Company</nav>
                    <nav>Career</nav>
                    <nav>About</nav>
                </div>

            </main>


            <main className="navbtn">
                <div className="loginbtn">
                    Login
                </div>
                <div className="btn-1">
                    <button>Register</button>
                    <img className='icon-menu' src={IconMenu} alt="" />

                </div>
                
            </main>

        </div>
      )
}

export default Header

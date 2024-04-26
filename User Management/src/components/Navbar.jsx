import logo from '../assets/W3G_Logo.png';

const Navbar = () => {
  return (
    <>
    <div>
      <nav className="navbar bg-primary">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid navigationbar">
            <div className='logo'><a className="navbar-brand" href="#"><img src={logo} alt="Bootstrap" width="150" height="25"/></a></div>
            <div className="collapse navbar-collapse nav-style nav-content" id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item list"><a className="nav-link active" aria-current="page" href="/useronboarding">User Onboarding</a></li>
                <li className="nav-item list"><a className="nav-link active" aria-current="page" href="/userlist">Users List</a></li>
              </ul>
              <form className="d-flex search-form" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </div>
          </div>
        </nav>
      </nav>
    </div>
    </>
  )
}

export default Navbar

const Login = () => {

  return (
    <>
    <br /><br /><br />
    <div>
      <form>
        <div className='container'>
          <div className="row">
            <div className="card col-md-6 offset-md-3"><br />
                {/* <div className="blue"></div> */}
                <h3 className="text-center">Login</h3>
              <div className="card-body">

                <div className="form-group">
                  <input type="text"  className='form-control input-item' placeholder="Email"
                  id="email"  name="email" autoComplete="username" required/>
                </div><br />

                <div className="form-group">
                  <input type="password" id='password' placeholder="Password"
                  className='form-control input-item' name="password" autoComplete="current-password" required/>
                </div>

              </div>
                <br />


                <div className="d-grid gap-2 col-8 mx-auto">
                  <button className="btn btn-primary"  type="button"  style={{marginBottom: 30}}>Login</button>
                </div>
        
            </div>
          </div>
        </div>
    </form>
    </div>
    </>
  )
}

export default Login
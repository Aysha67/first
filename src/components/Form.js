import React from "react";


function Form() {
  return (

    <>
    <section class="w-50 shadow p-3 mb-5 bg-body rounded ml-auto mr-auto mt-5">
      <div class="container py-5 h-100 ">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid" alt="Phone image"/>
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
           <h3 class="fw-bold mb-3 pb-3 ml-5" css="letter-spacing: 1px;"> Admin Login</h3>
              
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example13">Email </label>
                <input type="email" id="form1Example13" class="form-control" />
                
              </div>
    
              {/* <!-- Password input --> */}
              <div class="form-outline mb-4 ">
              <label class="form-label" for="form1Example23">Password</label>
                <input type="password" id="form1Example23" class="form-control " />
                
                
              </div>
    
              <div class="d-flex justify-content-around align-items-center mb-4"/>
                
    
              {/* <!-- Submit button --> */}
              <div class="col-12 d-flex justify-content-center">
                    <button type='submit' class="btn btn-primary"> Login </button>
    
                </div>
                <a href="#!" class="for">Forgot password?</a>
              
    
              
            </form>
          </div>
        </div>
      </div>
    </section>
    
      
    </>


  );
}

export default Form;
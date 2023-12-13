import React from "react";
 
function Logout(){
        return(
            <>
            
            <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
   Login 
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button"> Admin login </button></li>
    <li><button class="dropdown-item" type="button"> Teacher login </button></li>
    <li><button class="dropdown-item" type="button"> Parent login </button></li>
  </ul>
</div>
            
            </>
        );

        
}

export default Logout;
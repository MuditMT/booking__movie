import React from 'react'

const Form = () => {

    function handleSubmit() {
        
        alert('You clicked submit.');
      }

    return (
        <div> 
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  
  <div class="form-group">
    <label for="inputAddress2">Movie Name</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter movie name"/>
  
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">No. of ticket</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>
          <ol>1
              2
              3
              4</ol>
        </option>
      </select>
    </div>
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
</form>

</div>
    )
}

export default Form

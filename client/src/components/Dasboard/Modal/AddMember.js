import React from 'react'

const AddMember = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add Member</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit} class="row g-3">
                        <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder='Jane' required />
                        </div>
                        <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder='Doe' required/>
                        </div>
                        <div class="col-12">
                        <label for="inputAddress" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="inputAddress" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="janedoe@example.com" required />
                        </div>
                        <div class="col-12">
                        <label for="inputAddress" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="inputAddress" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder="999-999-999" required />
                        </div>
                        <div class="col-md-6">
                        <label for="inputZip" class="form-label">Zipcode</label>
                        <input type="text" class="form-control" id="inputZip" placeholder='99999' required />
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="Submit" class="btn btn-success">Add Member</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMember
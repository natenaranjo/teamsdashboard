import React from 'react'

const AddMember = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Member</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="row g-3">
                        <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder='Jane' required />
                        </div>
                        <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder='Doe' required/>
                        </div>
                        <div className="col-12">
                        <label for="inputAddress" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="inputAddress" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="janedoe@example.com" required />
                        </div>
                        <div className="col-12">
                        <label for="inputAddress" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="inputAddress" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder="999-999-999" required />
                        </div>
                        <div className="col-md-6">
                        <label for="inputZip" className="form-label">Zipcode</label>
                        <input type="text" className="form-control" id="inputZip" placeholder='99999' required />
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="Submit" className="btn btn-success">Add Member</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMember
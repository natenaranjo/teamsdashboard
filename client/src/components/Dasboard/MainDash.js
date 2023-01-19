import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_MEMBERS } from '../../utils/queries';
import { DELETE_MEMBER } from '../../utils/mutations';
import AddModal from './Modal/AddModal';


const MainDash = () => {
  const { loading, data } = useQuery(QUERY_MEMBERS);
  const members = data?.member || [];

  const [show, setShow] = useState(false);

  const [deleteMember] = useMutation(DELETE_MEMBER);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteMember = async memberId => {
    try {
      const { data } = await deleteMember({
        variables: {
          memberId,
        },
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='container-fluid'>
 
      <div className='d-flex flex-row justify-content-center align-items-center text-center gap-4 p-4'>
          <div className='cols-md-3 w-100'>
            <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <h6 className='card-subtitle'>Car subtitle</h6>
                <p className='card-text'>test</p>
              </div>
            </div>
          </div>
          <div className='cols-md-3 w-100'>
          <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <h6 className='card-subtitle'>Car subtitle</h6>
                <p className='card-text'>test</p>
              </div>
            </div>
          </div>
          <div className='cols-md-3 w-100'>
          <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <h6 className='card-subtitle'>Car subtitle</h6>
                <p className='card-text'>test</p>
              </div>
            </div>
          </div>
      </div>

      <div className='d-flex flex-row justify-content-center'>
        <div className='card shadow w-75'>
          <div id='member-table-header' className='card-header'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <h4>Team Members</h4>
              </div>
              <div>
                <input type='search' className=' rounded' />
              </div>
              <div>
                <button 
                  type="button"
                  onClick={() => setShow(true)}
                  className="btn btn-light shadow">
                    Add Member
                </button>
                {show && <AddModal setShow={setShow} />}
              </div>
            </div>
          </div>
          <div className='card-body'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>First Name</th>
                  <th scope='col'>Last Name</th>
                  <th scope='col'>Email Address</th>
                  <th scope='col'>Phone Number</th>
                  <th scope='col'>Zipcode</th>
                  <th scope='col'>Options</th>
                </tr>
              </thead>
              <tbody>
                {members.map(Member => (
                  <tr key={Member.memberId}>
                    <td>{Member.first_name}</td>
                    <td>{Member.last_name}</td>
                    <td>{Member.email_address}</td>
                    <td>{Member.phone_number}</td>
                    <td>{Member.zipcode}</td>
                    <td>
                      <button 
                        type='button'
                        onClick={() => handleDeleteMember(Member.memberId)}
                        className='btn text-danger hover:text-primary p-0 m-0'>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDash
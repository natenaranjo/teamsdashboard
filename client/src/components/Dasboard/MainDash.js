import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_MEMBERS } from '../../utils/queries';
import { ADD_MEMBER } from '../../utils/mutations';
import AddMember from '../Dasboard/Modal/AddMember';

const MainDash = () => {
  const { loading, data } = useQuery(QUERY_MEMBERS);

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
                <button type="button" className="btn btn-light shadow" >
                    Add Member
                </button>
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
                  <th scope='col'>Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>markotto@example.com</td>
                  <td>999-999-9999</td>
                  <td>99999</td>
                  <td>
                    <button type='button' className='btn w-25 h-25 p-0 m-0'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>janedoe@example.com</td>
                  <td>999-999-9999</td>
                  <td>99999</td>
                  <td>
                    <button type='button' className='btn w-25 h-25 p-0 m-0'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>John</td>
                  <td>Watts</td>
                  <td>johnwatts@example.com</td>
                  <td>999-999-9999</td>
                  <td>99999</td>
                  <td>
                    <button type='button' className='btn w-25 h-25 p-0 m-0'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MainDash
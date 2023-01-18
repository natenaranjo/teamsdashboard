import React from 'react'

const MainDash = () => {
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
          <div className='card-header bg-info'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <h4>Team Members</h4>
              </div>
              <div>
                <input type='search' className=' rounded' />
              </div>
              <div>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Member
                </button>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
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
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>markotto@example.com</td>
                  <td>999-999-9999</td>
                  <td>99999</td>
                  <td className='d-flex flex-row'>
                    <button type='button' className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil text-light" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                    </button>
                    <button type='button' className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>janedoe@example.com</td>
                  <td>999-999-9999</td>
                  <td>99999</td>
                  <td className='d-flex flex-row'>
                    <button type='button' className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                    </button>
                    <button type='button' className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>John</td>
                  <td>Watts</td>
                  <td>johnwatts@example.com</td>
                  <td>999-999-9999</td>
                  <td>99999</td>
                  <td className='d-flex flex-row'>
                    <button type='button' className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                    </button>
                    <button type='button' className='btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-trash3" viewBox="0 0 16 16">
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
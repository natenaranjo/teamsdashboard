import React from 'react'

const Sidebar = () => {
  return (
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3 className='text-center'>Admin Panel</h3>
        </div>

        <ul className="list-unstyled components">
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className='link'>Home</a>
            </li>
            <li>
                <a href="#">Reports</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className='link'>Projects</a>
            </li>
            <li>
                <a href="#">Databases</a>
            </li>
            <li>
                <a href="#">Tech Support</a>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar
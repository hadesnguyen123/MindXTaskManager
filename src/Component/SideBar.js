import React from 'react'

export default function SideBar() {
    return (
        <div className="sidebar bg-light d-flex flex-column h-100">
            <div className="sidebar-header d-flex justify-content-center align-items-center py-3">
                <h5 className="mb-0">Dashboard</h5>
            </div>
            <div className="sidebar-body overflow-auto flex-grow-1" style={{ color: 'black' }}>
                <ul className="nav flex-column" style={{ marginLeft: 70 }}>
                    <li className="nav-item" >
                        <a className="nav-link active" href="#" style={{ color: 'black', textDecoration: 'none' }}>
                            <i class="fa fa-inbox" style={{ paddingRight: 20 }}></i>
                            Inbox
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black', textDecoration: 'none' }}>
                            <i class="fa fa-star" style={{ paddingRight: 20 }}></i>
                            Today
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black', textDecoration: 'none' }}>
                            <i class="fa fa-briefcase" style={{ paddingRight: 20 }}></i>
                            Upcoming
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black', textDecoration: 'none' }}>
                            <i class="fa fa-hashtag" style={{ paddingRight: 20 }}></i>
                            Important
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black', textDecoration: 'none' }}>
                            <i class="fa fa-users" style={{ paddingRight: 20 }}></i>
                            Meetings
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black', textDecoration: 'none' }}>
                            <i class="fa fa-trash" style={{ paddingRight: 20 }}></i>
                            Trash
                        </a>
                    </li>
                    <li className="nav-item mt-5">
                        <a className="nav-link" href="#" style={{ color: 'gray', textDecoration: 'none' }}>
                            <i className="fa fa-users" style={{ paddingRight: 20, color: 'gray' }}></i>
                            Family
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'gray', textDecoration: 'none' }}>
                        <i class="fa fa-sun"  style={{ paddingRight: 20, color: 'gray' }}></i>
                            Vacation
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'gray', textDecoration: 'none' }}>
                        <i class="fa fa-asterisk"  style={{ paddingRight: 20, color: 'gray' }}></i>
                            Festival
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'gray', textDecoration: 'none' }}>
                        <i class="fa fa-asterisk"  style={{ paddingRight: 20, color: 'gray' }}></i>
                            Concert
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'
import SideBar from '../Component/SideBar'
import TaskList from '../Component/TaskList'
import Header from '../Component/Header'
import Schedule from '../Component/Schedule'

export default function DashBoard() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-7">
                        <TaskList />
                    </div>
                    <div className="col-md-3">
                        <Schedule/>
                    </div>
                </div>
            </div>
        </div>
    )
}


import { Outlet } from "react-router"
import NavBar from "./NavBar"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getObjects } from "../store/Actions/ObjectAction"
import ObjectAdd from "./ObjectAdd"

function ObjectDashboard() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getObjects())
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <NavBar />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                      <ObjectAdd />
                </div>
                <div className="col-lg-12">
                      <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ObjectDashboard
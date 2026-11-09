import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import { deleteObj } from "../store/Actions/ObjectAction"
import { useState } from "react"

function ObjectList() {
    const dispatch = useDispatch()
    const list = useSelector(state => state.objectList)
    const [page, setPage] = useState(0)
    
    const totalPages = Math.max(1, Math.ceil(list?.length / 10))
    const start = (page) * 10
    const record = list?.slice(start, start + 10)

    const onPageChange = (val) => {
        setPage(val)
    }

    const onDelete = (obj) => {
        dispatch(deleteObj(obj.id))
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5 g-3 mb-5">
            
                {record.map((obj, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{obj.id} <br/> {obj.name}</h5>
                                <p className="card-text">
                                    Color : {obj.data?.color}
                                </p>
                                <p className="card-text">
                                    Capacity : {obj.data?.capacity}
                                </p>
                                <button className="btn btn-primary" onClick={() => onDelete(obj)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <nav aria-label="Page navigation example" >
                <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link" onClick={() => setPage(page - 1)}
                        disabled={page === 0}>Previous</button></li>

                    {
                        Array.from({ length: totalPages }, (e, index) => (
                            <li key={index} className="page-item">
                                <button className="page-link" onClick={() => onPageChange(index)}>{index + 1}</button></li>
                        ))}

                    <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1)}
                        disabled={page === (totalPages - 1)} >Next</button></li>

                </ul>
                <div>
                <p className="text-center">{`Page ${page + 1} of ${totalPages} total pages`}</p> 
                </div>
            </nav>
        </div>
    )
}

export default ObjectList
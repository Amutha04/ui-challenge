import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import { deleteObj } from "../store/Actions/ObjectAction"
import { useState } from "react"

function ObjectList() {
    
    const list = useSelector(state => state.objectList)
    const dispatch = useDispatch()

    const size = 10
    const [page, setPage] = useState(0)

    const totalPages = list !== null ? Math.ceil(list.length / size) : 1
    const start = page * size

    const pageItems = list?.slice(start, start + size)

    const onDelete = (obj) => {
        dispatch(deleteObj(obj.collectionName, obj.id))
    }
    return(
        <div className="container-fluid">
            <div className="row mt-5 g-3">
            {
                pageItems?.map((obj,index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{obj.collectionName}t</h5>
                                <p className="card-text">
                                    Count : {obj.objectCount}
                                </p>
                                <button className="btn btn-primary" onClick={()=>onDelete(obj)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

            <nav aria-label="Page navigation" className="mt-4">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 0}
                        >
                            Previous
                        </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className="page-item">
                            <button className="page-link" onClick={() => setPage(index)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages - 1}
                        >
                            Next
                        </button>
                    </li>
                </ul>

                {/* <p className="text-center">
                    {`Page ${page + 1} of ${totalPages}`}
                </p> */}
            </nav>
        </div>
    )
}

export default ObjectList
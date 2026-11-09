import { useDispatch } from "react-redux";
import { addObject } from "../store/Actions/ObjectAction";
import { useState } from "react";

function ObjectAdd() {

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")

    const dispatch =  useDispatch()

    const onAdd = (e) => {
        e.preventDefault()

        let obj = {
            name : name,
            data : {
                Year : year,
                Price : price,
                CPU : cpu
            }
        }

        dispatch(addObject(name, obj))
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#newObj" onClick={() => {
                    setName("")
                    setYear("")
                    setPrice("")
                    setCpu("")
                }}>
                    <i className="bi bi-plus-lg me-1"></i> Add Object
                </button>
            </div>

            <div className="modal fade" id="newObj" tabIndex="-1" aria-labelledby="newTicketLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title h5" id="newTicketLabel">Create a Object</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="objForm" onSubmit={(e) => onAdd(e)}>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="subjectInput" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="subjectInput" value={name} onChange={(e) => setName(e.target.value)}  required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="subjectInput" className="form-label">Year</label>
                                        <input type="text" className="form-control" id="subjectInput" value={year} onChange={(e) => setYear(e.target.value)}  required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="subjectInput" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="subjectInput" value={price} onChange={(e) => setPrice(e.target.value)}  required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="subjectInput" className="form-label">CPU</label>
                                        <input type="text" className="form-control" id="subjectInput" value={cpu} onChange={(e) => setCpu(e.target.value)}  required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObjectAdd
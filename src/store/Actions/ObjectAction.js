import axios from "axios"

export const getObjects = () => async (dispatch) => {
    const response = await axios.get("https://api.restful-api.dev/collections",
        {
            headers: { "x-api-key": "0cdc068a-1fc9-49b7-8879-9eaead8c1e89" }
        }
    )

    console.log(response.data)

    dispatch({
        type: 'FETCH_OBJECTS',
        payload: response.data
    })
}

export const deleteObj = (name, id) => async (dispatch) => {
    try {
        const response = await axios.delete(`https://api.restful-api.dev/collections/${name}/objects/${id}`,
            {
                headers: { "x-api-key": "0cdc068a-1fc9-49b7-8879-9eaead8c1e89" }
            }
        )

        dispatch({
            type: 'DELETE_OBJECT',
            payload: id
        })

        window.Swal.fire({
            icon: "success",
            title: "Deleted Successfully",
            showConfirmButton: false,
            timer: 1500
        })
    }

    catch (err) {
        console.log(err?.response?.data)

        window.Swal.fire({
            icon: "error",
            title: "Operation Failed",
            text: err?.response?.data?.comments || "Something went wrong",
            confirmButtonText: "OK"
        })
    }

}

export const addObject = (name, obj) => async (dispatch) => {
    try {
        const response = await axios.post(`https://api.restful-api.dev/collections/${name}/objects`, obj,
            {
                headers: { "x-api-key": "0cdc068a-1fc9-49b7-8879-9eaead8c1e89" }
            }
        )

        dispatch({
            type: 'ADD_OBJECT',
            payload: response.data
        })

        window.Swal.fire({
            icon: "success",
            title: "Your Object has been saved",
            showConfirmButton: false,
            timer: 1500
        })
    }


    catch (err) {
        console.log(err?.response?.data)

        window.Swal.fire({
            icon: "error",
            title: "Operation Failed",
            text: err?.response?.data?.comments || "Something went wrong",
            confirmButtonText: "OK"
        })
    }
}
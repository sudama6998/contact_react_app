import React from 'react'

const SingleContact = ({ name, mobile, index}) => {
    return (

        <div className="card m-2" style={{width: "fit-content", minWidth: "15rem"}}>
            <i className="fas fa-trash" style={{position: "absolute", right: "10px", top: "20px", color: "red"}} />
            <div className="card-body">
                <h5 className="card-title">Contact No. {index + 1}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Name: {name}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Mobile No.: {mobile}</h6>
            </div>
        </div>
    )
};

export default SingleContact;

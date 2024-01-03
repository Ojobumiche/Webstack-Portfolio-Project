import React from 'react';

const TrainSearchBox = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-md-row  flex-column">
                <label className='mt-2 ml-2'>
                  From:
                  <input className="form-control mt-2" type="text" style={{ outline: 'none' }} />
                </label>
                <label className="mt-2 ml-2">
                  To:
                  <input className="form-control mt-2" type="text" style={{ outline: 'none' }} />
                </label>
                <label className="mt-2 ml-2">
                  Departure Time:
                  <input className="form-control mt-2" type="text" style={{ outline: 'none' }} />
                </label>
                <button className="btn btn-success mt-3 ml-3" style={{ fontSize: "20px", padding: "8px 16px", borderRadius: "30px" }}>
                  Search Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainSearchBox;

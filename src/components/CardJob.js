import React from 'react';

const Cardjob = (props) => {

    const {job} = props;

    return (
        <div className="card cardJob">
            <div className="card-body">
                <h1 className="card-title font-weight-bold">{job.title}</h1>
                <p className="card-text">{job.descriptionPreview}</p>
            </div>
        </div>
    );
};

export default Cardjob;

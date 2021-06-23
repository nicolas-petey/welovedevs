import React from 'react';

const Cardjob = (props) => {

    const {job} = props;

    return (
        <div className="card">
            <p>{job.description}</p>
        </div>
    );
};

export default Cardjob;

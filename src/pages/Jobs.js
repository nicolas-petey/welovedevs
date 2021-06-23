import React, {useEffect, useState} from 'react';
import Cardjob from "../components/CardJob";

const Jobs = () => {

    const [data, setData] = useState([]);

    useEffect( () => {

        const ListJobs = require('../files/jobs_welovedevs_exerice.json');

        setData(ListJobs);

    }, []);

    return (
        <div>
            {data.map((job) => (
                <Cardjob job={job} key={job.id}/>
            ))}
        </div>
    );
};

export default Jobs;

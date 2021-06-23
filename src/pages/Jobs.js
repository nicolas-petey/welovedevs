import React, {useEffect, useState} from 'react';
import Cardjob from "../components/CardJob";
import Navigation from "../components/Navigation";
import CardJobAdd from "../components/CardJobAdd";
import {ListJobs} from "../files/job.js";

const Jobs = () => {

    const [data, setData] = useState([]);

    const listjob = ListJobs;

    useEffect( () => {

        setData(listjob);

    },[]);



    return (
        <div className="Jobs">
            <Navigation />
            <div className="container">

                <div className="row">

                    {data.map((job) => (
                        <Cardjob job={job} key={job.id}/>
                    ))}

                    <CardJobAdd job={data}/>

                </div>
            </div>
        </div>
    );
};

export default Jobs;

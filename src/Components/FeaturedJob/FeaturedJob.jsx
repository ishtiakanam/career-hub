import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured job:{jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map((job) => <Jobs key={job.key} job={job}></Jobs>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary ml-96">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;
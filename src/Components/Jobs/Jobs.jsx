import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Jobs = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className='flex mr-7'>
                    <div className='mt-4'>
                        <h1 className='flex mr-2'><MdLocationOn className='text-2xl'></MdLocationOn>{location}</h1>
                    </div>
                    <div className='mt-4'>
                        <h1 className='flex mr-2'><AiOutlineDollarCircle className='text-2xl'></AiOutlineDollarCircle>{salary}</h1>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
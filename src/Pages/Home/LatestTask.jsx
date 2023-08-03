import { useState } from "react";
import { Link } from "react-router-dom";

const LatestTask = () => {
    const [latestTask, setLatestTask] = useState([]);
    fetch('http://localhost:5000/alltask')
        .then(res => res.json())
        .then(data => setLatestTask(data))
    console.log(latestTask);
    return (
        <div className="w-10/12 mx-auto mb-14">
            <h1 className="text-2xl md:text-4xl font-bold text-center my-14 ">Latest Task</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {   latestTask.length >=1 ?
                    (latestTask.slice(0, 6).map(task => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{task?.title}</h2>
                                <p><span className="font-bold">Description:</span> {task?.description.slice(0, 200)}....</p>
                                <p><span className="font-bold">Staus:</span> {task?.status}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/taskdetails/${task?._id}`} className="block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-center text-white">Details</Link>
                                </div>
                            </div>
                        </div>
                    </>)): <div className="text-center flex justify-center align-middle my-10">
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            }
            </div>
        </div>
    );
};

export default LatestTask;
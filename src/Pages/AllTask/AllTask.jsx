import { useEffect, useState } from "react";
import AllTaskTable from "./AllTaskTable";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const AllTask = () => {
    const [allTasks, setAllTasks] = useState([]);
    const url = 'https://task-management-server-darkasfu.vercel.app/alltask';
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllTasks(data))
    }, [allTasks])
    return (
        <>
            <ScrollToTop></ScrollToTop>
            <section className="antialiased bg-gray-100 text-gray-600 py-10 px-4">
            <div className="flex flex-col justify-center">
                <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>

                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Task Title</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Task description</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Status</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Author</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {   allTasks.length>=1 ? (
                                        allTasks.map(task => <AllTaskTable key={task._id} task={task}></AllTaskTable>)) :  <tr>
                                        <td colSpan="number of columns in your table" className="text-center flex justify-center align-middle my-10">
                                            <span className="loading loading-ring loading-xs"></span>
                                            <span className="loading loading-ring loading-sm"></span>
                                            <span className="loading loading-ring loading-md"></span>
                                            <span className="loading loading-ring loading-lg"></span>
                                        </td>
                                    </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    );
};

export default AllTask;
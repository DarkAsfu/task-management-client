import { Link } from "react-router-dom";

const AllTaskTable = ({task}) => {
    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.title}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.description.slice(0, 30)}...<Link className="text-[#FFC107]" to={`/taskdetails/${task?._id}`}>see more</Link></div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{task?.status}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{task?.email}</div>
                </td>

                <td className="justify-center py-4 whitespace-nowrap flex gap-4">
                    <Link to={`/taskdetails/${task?._id}`} className="btn">Details</Link>
                </td>
            </tr>
        </>
    );
};

export default AllTaskTable;
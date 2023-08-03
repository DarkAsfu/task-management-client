import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const MyTaskTable = ({ task, tasks, setTasks }) => {
    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.title}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.description.slice(0, 20)}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{task?.status}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{task?.name}</div>
                </td>

                <td className="md:pl-12 py-4 whitespace-nowrap flex gap-4">

                    <RxCross1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxCross1>
                    {/* The button to open modal */}
                    <Link  htmlFor="my-modal"><RxPencil1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxPencil1></Link>


                </td>
            </tr>
        </>
    );
};

export default MyTaskTable;
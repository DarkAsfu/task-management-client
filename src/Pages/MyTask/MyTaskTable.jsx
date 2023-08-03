import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyTaskTable = ({ task, tasks, setTasks }) => {
    // delete operation
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/alltask/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Task has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(c => c._id !== id);
                            setTasks(remaining);
                        }
                    })
            }
        })
    }
    // update operation
    const updateStatus = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const status = form.status.value;
        const updatedStatus = {
            status
        }
        console.log(updatedStatus, `http://localhost:5000/alltask/status/${id}`);
        fetch(`http://localhost:5000/alltask/status/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                // Success response
                if (data.modifiedCount > 0) {
                    // Update the status in the frontend state
                    setTasks(prevTasks => prevTasks.map(t => t._id === id ? { ...t, status: updatedStatus.status } : t));

                    Swal.fire(
                        'Good job!',
                        'Task Status updated successfully',
                        'success'
                    );
                    form.reset();
                }
            })
            .catch(error => {
                // Error handling
                console.error('Error:', error);
            });

    }
    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.title}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.description.slice(0, 30)}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{task?.status}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{task?.name}</div>
                </td>

                <td className="justify-center py-4 whitespace-nowrap flex gap-4">

                    <RxCross1 onClick={() => handleDelete(task._id)} className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxCross1>
                    <a href="#my_modal"> <RxPencil1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}> </RxPencil1></a>
                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal">
                        <div className="modal-box px-20">
                            <h3 className="font-bold text-lg text-black text-center py-6">Update your status</h3>
                            <form onSubmit={() => updateStatus(event, task._id)}>
                                <div>
                                    <select
                                        id="category"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none input-bordered"
                                        name="status"
                                        required
                                    >
                                        <option>Set status</option>
                                        <option value="Ongoing">Ongoing</option>
                                        <option value="Complete">Complete</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold py-2 mt-4 px-6 rounded-lg focus:outline-none"
                                >
                                    Update
                                </button>
                            </form>
                            <div className="modal-action">
                                <a href="#" className="btn">close</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default MyTaskTable;
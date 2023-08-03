import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddTask = () => {
    const {user} = useContext(AuthContext);
    const email = user.email;
    const name = user.displayName;
    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        const task = {
            title,
            description,
            status,
            email,
            name
        }
        console.log(task);
        fetch('https://task-management-server-darkasfu.vercel.app/addtask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Thank you!',
                        'Your task is now available',
                        'success'
                    )
                    form.reset();
                }
            })
    }
    return (
        <div className="my-28 md:w-2/5 mx-auto px-4 ">
            <h2 className="text-4xl font-bold text-center mb-6">ADD TASK</h2>
            <form onSubmit={handleAddTask} className="space-y-6 p-8 bg-white rounded-lg shadow-md">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold mb-1 text-[#ffc107]">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#ffc107]"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg text-[#ffc107] font-semibold mb-1">
                        Description
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        rows="4"
                        className="w-full border rounded-md py-2 px-3 resize-none focus:outline-none focus:border-[#ffc107]"
                        required
                    />
                </div>
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
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTask;
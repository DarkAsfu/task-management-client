import { useLoaderData } from "react-router-dom";

const TaskDetails = () => {
    const detailsTask = useLoaderData()
    console.log(detailsTask);
    const { title, description, status, email } = detailsTask;
    return (
        <div className="w-10/12 mx-auto bg-white py-20">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="mb-4">
                <span className="text-gray-700 font-medium">Status: </span>
                <span style={{ color: status === 'Ongoing' ? 'green' : '#007BFF' }} className="font-medium">
                    {status}
                </span>
            </div>
            <p className="text-gray-700 mb-2">{description}</p>
            <div>
                <span className="text-gray-700 font-medium">Author Email: </span>
                <span>{email}</span>
            </div>
        </div>
    );
};

export default TaskDetails;
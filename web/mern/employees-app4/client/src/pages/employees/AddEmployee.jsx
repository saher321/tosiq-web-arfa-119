import WebLayout from "../../layouts/WebLayout";
import axios from "axios";
import { ADD_EMPLOYEE_API } from "../../utils/apis.js";
import LinkButton from "../../components/LinkButton.jsx";
import InputField from "../../components/InputField.jsx";
import ActionButton from "../../components/ActionButton.jsx";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const AddEmployee = () => {

    const { register, handleSubmit } = useForm()

    const handleAddEmployee = async (data) => {
        try {
            const response = await axios.post(ADD_EMPLOYEE_API, data);
            if (response.data.status == true) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <WebLayout>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="block font-bold text-2xl">Add Employee</span>
                        <span className="block text-sm">Fill all the fields</span>
                    </div>
                    <div>
                        <LinkButton title="View all" url="/employees" />
                    </div>
                </div>
                <div className="my-5">
                    <form onSubmit={handleSubmit(handleAddEmployee)}>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-6">
                                <label htmlFor="">Name</label>
                                <InputField
                                    { ...register("name") }
                                    type={"text"}
                                    hint="e.g: John Wick"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Email</label>
                                <InputField
                                    { ...register("email") }
                                    type={"email"}
                                    hint="e.g: john@email.com"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Phone</label>
                                <InputField
                                    { ...register("phone") }
                                    type={"text"}
                                    hint="e.g: +9234568493"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Designation</label>
                                <InputField
                                    { ...register("designation") }
                                    type={"text"}
                                    hint="e.g: Developer"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Salary</label>
                                <InputField
                                    { ...register("salary") }
                                    type={"text"}
                                    hint="e.g: 10000"
                                />
                            </div>
                            <div className="col-span-12">
                                <ActionButton title="Add employee" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </WebLayout>
    );
};

export default AddEmployee;

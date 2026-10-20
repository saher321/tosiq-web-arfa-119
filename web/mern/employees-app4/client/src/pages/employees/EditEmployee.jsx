import WebLayout from "../../layouts/WebLayout.jsx";
import axios from "axios";
import { ADD_EMPLOYEE_API, EDT_EMPLOYEE_API } from "../../utils/apis.js";
import LinkButton from "../../components/LinkButton.jsx";
import InputField from "../../components/InputField.jsx";
import ActionButton from "../../components/ActionButton.jsx";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const EditEmployee = () => {

    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const { id } = useParams()

    const getSingleEmployee = async () => {
        try {
            const response = await axios.get(`${EDT_EMPLOYEE_API}/${id}`);
            if (response.data.status == true) {
                reset(response.data.employee)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateEmployee = async () => {}

    useEffect(() => {
        if (id) {
            getSingleEmployee()
        }
    }, [id])

    return (
        <WebLayout>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="block font-bold text-2xl">Edit Employee - {id}</span>
                        <span className="block text-sm">Fill all the fields</span>
                    </div>
                    <div>
                        <LinkButton title="View all" url="/employees" />
                    </div>
                </div>
                <div className="my-5">
                    <form onSubmit={handleSubmit(handleUpdateEmployee)}>
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
                                <ActionButton title="Update employee" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </WebLayout>
    );
};

export default EditEmployee;

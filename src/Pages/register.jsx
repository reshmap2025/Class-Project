
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/formschema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("Registration successful");
        navigate("/", {
            state: data
        });
    }

    return (
        <div className="min-h-screen bg-sky-400 flex items-center justify-center">

            <form
                onSubmit={handleSubmit(onSubmit1)}
                className="bg-sky-100 p-10 rounded-2xl shadow-2xl w-96 flex flex-col gap-5"
            >

                <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className="w-full p-4 rounded-full border-2 border-sky-300 outline-none focus:border-blue-500"
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full p-4 rounded-full border-2 border-sky-300 outline-none focus:border-blue-500"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>

                <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    className="w-full p-4 rounded-full border-2 border-sky-300 outline-none focus:border-blue-500"
                />
                <p className="text-red-500 text-sm">{errors.password?.message}</p>

                <input
                    type="number"
                    placeholder="Enter your age"
                    {...register("age")}
                    className="w-full p-4 rounded-full border-2 border-sky-300 outline-none focus:border-blue-500"
                />
                <p className="text-red-500 text-sm">{errors.age?.message}</p>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-4 rounded-full font-bold hover:bg-blue-700"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

export default Register;

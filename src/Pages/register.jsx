
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
        <div className="min-h-screen bg-sky-400 flex items-center justify-center p-4">

            <form
                onSubmit={handleSubmit(onSubmit1)}
                className="bg-sky-100 p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-5"
            >

                <h1 className="text-3xl font-bold text-center text-blue-700">
                    Registration
                </h1>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-gray-700">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register("name")}
                        className="w-full p-4 rounded-xl border-2 border-sky-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    />

                    <p className="text-red-600 text-sm">
                        {errors.name?.message}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                        className="w-full p-4 rounded-xl border-2 border-sky-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    />

                    <p className="text-red-600 text-sm">
                        {errors.email?.message}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password")}
                        className="w-full p-4 rounded-xl border-2 border-sky-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    />

                    <p className="text-red-600 text-sm">
                        {errors.password?.message}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-gray-700">
                        Age
                    </label>

                    <input
                        type="number"
                        placeholder="Enter your age"
                        {...register("age")}
                        className="w-full p-4 rounded-xl border-2 border-sky-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    />

                    <p className="text-red-600 text-sm">
                        {errors.age?.message}
                    </p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-4 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                >
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;

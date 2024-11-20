import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <h3 className="font-bold text-lg">Login</h3>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                        <div className="mt-3">
                            <span>Email</span> <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 outline-none border w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="mt-3">
                            <span>Password</span> <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="px-3 py-2 outline-none border w-full"
                                autoComplete="false"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <button className="bg-pink-500 text-white px-3 py-2 rounded-md">
                                Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="text-blue-500 underline"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

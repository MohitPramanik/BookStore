import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

export default function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border shadow-md p-5 rounded-md w-1/2 min-w-[40rem] modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <h3 className="font-bold text-lg">Signup</h3>
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </Link>
                <div className="mt-3">
                    <span>Email</span> <br />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-3 py-2 outline-none border w-full"
                        {...register("email", {required: true})}
                    />
                      {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mt-3">
                    <span>Password</span> <br />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="px-3 py-2 outline-none border w-full"
                        autoComplete="false"
                        {...register("password", {required: true})}
                    />
                      {errors.password && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="flex justify-between items-center mt-3">
                    <button className="bg-pink-500 text-white px-3 py-2 rounded-md"
                    >
                        Signup
                    </button>
                    <p>
                        Have Account?{" "}
                        <button
                            className="text-blue-500 underline cursor-pointer"
                            onClick={() => document.getElementById("my_modal_3").showModal()}
                        >
                            Login
                        </button>
                </p>
                </div>
                </form>
                        <Login />
            </div>
        </div>
    );
}

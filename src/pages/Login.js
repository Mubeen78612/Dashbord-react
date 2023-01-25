import React from "react";

export const Login = () => {
  return (
    <div className="flex justify-center mt-44">
      <form className="w-[20%] shadow-lg shadow-indigo-500/40 px-5 py-5 ">
        <div className="flex flex-col justify-center items-start mt-5">
          <label> Email</label>
          <input
            className="outline-none border py-2 rounded"
            type="email"
            placeholder=""
          />
          <label> Password</label>
          <input
            className="outline-none border py-2 rounded"
            type="string"
            placeholder=""
          />
          <button className="border bg-blue-400 py-3 px-3 text-white rounded w-[250px] mt-2">
            {" "}
            Sign in
          </button>
        </div>
        <p className="mt-5 text-blue-500 underline flex justify-end"> Forget Password</p>
      </form>
    </div>
  );
};

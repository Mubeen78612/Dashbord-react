import React from "react";

export const Register = () => {
  return (
    <div className="flex justify-center mt-10">
      <form className="w-[20%] shadow-lg shadow-indigo-500/40 px-5 py-5">
        <div className="flex flex-col justify-items-center mt-5 ">
          <label> First Name</label>
          <input
            className="outline-none border py-2 rounded"
            type="string"
            placeholder=""
          />
          <label> Last Name</label>
          <input
            className="outline-none border py-2 rounded"
            type="string"
            placeholder=""
          />
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
          <label> Conform Password</label>
          <input
            className="outline-none border py-2 rounded"
            type="string"
            placeholder=""
          />
          <label> PH NO</label>
          <input
            className="outline-none border py-2 rounded"
            type="number"
            placeholder=""
          />
          <label> Address</label>
          <textarea
            className="outline-none border py-2 rounded  w-64"
            type="string"
            placeholder=""
          />

          <button className="border bg-green-400 py-3 px-5 text-white rounded mt-2">
            {" "}
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

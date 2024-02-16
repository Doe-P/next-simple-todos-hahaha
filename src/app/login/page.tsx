"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../components/Loading";
import { isAuth } from "@/Utills/Auth";
interface User {
  username: string;
  password: string;
}
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "kminchelle",
    password: "0lelplR",
  } as User);
  const router = useRouter();
  const handleSubmit = async () => {
    setLoading(true);
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        alert("Login successful");
        isAuth().setToken(data.token);
        setTimeout(() => {
          window.location.reload();
        }, 200);
        router.push("/");
      })
      .catch((e) => {
        setLoading(false);
        alert("error:" + e);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="w-4/12 bg-white rounded-md shadow-sm px-6 py-8 flex flex-col gap-4">
        <div className="">
          <b className="text-xl text-gray-800 font-bold">Welcome back!!</b>
          <br />
          <hr className="mt-2" />
        </div>
        <label htmlFor="email" className="text-md text-gray-800 font-normal">
          Username:
          <input
            type="text"
            value={form.username}
            onChange={(e) => {
              setForm({
                ...form,
                username: e.target.value,
              });
            }}
            className="w-full px-2 py-1 bg-gray-200 rounded-md focus:outline-none"
          ></input>
        </label>
        <label htmlFor="password" className="text-md text-gray-800 font-normal">
          Password:
          <input
            type="password"
            value={form.password}
            onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value,
              });
            }}
            className="w-full px-2 py-1 bg-gray-200 rounded-md focus:outline-none"
          ></input>
        </label>
        <button
          onClick={handleSubmit}
          type="button"
          className="px-2 py-1 bg-green-500 rounded-md text-white hover:bg-green-600 transition-all mt-4"
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
export default Login;

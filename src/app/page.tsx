"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import Paginator from "./components/Footer";
import Loading from "./components/Loading";
import { isAuth } from "@/Utills/Auth";
import { redirect } from "next/navigation";
export interface Todo {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
}
const Home = (props: any) => {
  const [todos, setTodos] = useState([] as Todo[]);
  const limit = props.searchParams.limit || 15;
  const skip = props.searchParams.skip || 0;
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();

      setTodos(data.todos);
      setTotal(data.total);
      setLoading(false);
    };

    return () => {
      fetchTodos();
    };
  }, [skip, limit]);


  useLayoutEffect(() => {
    if (!isAuth().getToken) {
      redirect("/login");
    }
  })

  return (
    <main className="m-0 p-0">
      <div className="container rounded-md m-auto my-[5rem] bg-white">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="bg-white shadow-sm py-8">
            <div className="text-2xl text-gray-800">Todo List</div>
            <hr className="my-5"></hr>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-12 gap-[2rem]">
                {todos.map((todo: Todo) => (
                  <Link
                    href={"/todos/" + todo.id}
                    key={todo.id}
                    className="border col-span-3 min-h-[100px] transition-all duration-300 rounded-md hover:shadow-md hover:cursor-pointer p-4"
                  >
                    <p className={todo.completed ? "text-green-500" : ""}>
                      {todo.todo}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        {todos.length > 0 ? (
          <div className="w-full flex flex-row justify-center py-4">
            <Paginator limit={limit} total={total} skip={skip} />
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </main>
  );
};

export default Home;

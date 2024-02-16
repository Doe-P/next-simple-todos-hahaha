"use client";

import { useState } from "react";

const ButtonUpdate = ({
  isCompleted,
  id,
}: {
  isCompleted: boolean;
  id: number;
  }) => {
  const [completed, setComplete] = useState(isCompleted)
  const url = "https://dummyjson.com/todos/";
  const updateMunLery = async () => {
    await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify({ completed: !completed }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setComplete(json.completed);
        alert("Todo is completed!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <button
      onClick={updateMunLery}
      className={
        completed
          ? "bg-red-500 px-4 py-2 rounded-md text-white"
          : "bg-green-500 px-4 py-2 rounded-md text-white"
      }
    >
      {completed ? "Not Complete" : "Complete"}
    </button>
  );
};

export default ButtonUpdate;

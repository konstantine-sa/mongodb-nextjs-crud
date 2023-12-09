"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  // console.log(id, title, description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="px-8 py-2 border border-slate-500"
          type="text"
          placeholder="Topic title"
        />

        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="px-8 py-2 border border-slate-500"
          type="text"
          placeholder="Topic description"
        />

        <button className="py-3 px-6 w-fit bg-green-600 font-bold text-white rounded-md">
          Update Topic
        </button>
      </form>
    </section>
  );
}

export default EditTopicForm;

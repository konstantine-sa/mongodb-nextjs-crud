"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function addTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create the topic");
      }
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="px-8 py-2 border border-slate-500"
          type="text"
          placeholder="Topic title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <input
          className="px-8 py-2 border border-slate-500"
          type="text"
          placeholder="Topic description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button
          type="submit"
          className="py-3 px-6 w-fit bg-green-600 font-bold text-white rounded-md"
        >
          Add Topic
        </button>
      </form>
    </section>
  );
}

export default addTopic;

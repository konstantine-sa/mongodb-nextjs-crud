import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <section
          key={t._id}
          className="flex justify-between items-center gap-5 p-4 my-3 border border-slate-300"
        >
          {/* topic header */}
          <div>
            <h2 className="text-lg md:text-2xl font-bold">{t.title}</h2>
            <div className="text-base md:text-lg">{t.description}</div>
          </div>

          {/* topic buttons */}
          <div className="flex gap-2 ">
            <Link className="hover:text-slate-600" href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <RemoveBtn id={t._id} />
          </div>
        </section>
      ))}
    </>
  );
}

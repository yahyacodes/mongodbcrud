import React from "react";
import EditTopicForm from "@/components/editTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topic", error);
  }
};
const EditTopic = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default EditTopic;

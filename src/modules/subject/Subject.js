import React from "react";
import { useNavigate } from "react-router-dom";
import { presence } from "../../const/lectures";

function Subject({ subject }) {
  const navigate = useNavigate();
  const { id, name } = subject;

  const subjectPresence = presence.filter((value) => value.subjectId === id);

  return <div>{name}</div>;
}

export default Subject;

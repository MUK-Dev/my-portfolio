import postBackendSkill from "firebase_functions/post-backend-skill";
import postFrontendSkill from "firebase_functions/post-frontend-skill";
import postProject from "firebase_functions/post-project";
import React, { FC, useState } from "react";

interface Props {
  type: "Frontend" | "Backend" | "Experience";
}

const AdminForm: FC<Props> = ({ type }) => {
  let form: JSX.Element;

  const [firstField, setFirstField] = useState("");
  const [description, setDescription] = useState("");

  switch (type) {
    case "Backend":
      form = (
        <form onSubmit={(event) => postBackendSkill(event, firstField)}>
          <h6>Add Backend Skills</h6>
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate white-text"
              onChange={(e) => setFirstField(e.target.value)}
            />
          </div>
          <button className="btn waves-effect waves-light">
            Add Backend Skill
          </button>
        </form>
      );
      break;
    case "Frontend":
      form = (
        <form
          onSubmit={(event) =>
            postFrontendSkill(event, firstField).then(() => setFirstField(""))
          }
        >
          <h6>Add Frontend Skills</h6>
          <div className="input-field">
            <input
              id="email"
              type="text"
              className="validate white-text"
              onChange={(e) => setFirstField(e.target.value)}
            />
          </div>
          <button className="btn waves-effect waves-light">
            Add Frontend Skill
          </button>
        </form>
      );
      break;
    case "Experience":
      form = (
        <form onSubmit={(event) => postProject(event, firstField, description)}>
          <h6>Add Experience</h6>
          <p>Title</p>
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate white-text"
              onChange={(e) => setFirstField(e.target.value)}
            />
          </div>
          <p>Description</p>
          <div className="input-field">
            <textarea
              id="name"
              className="materialize-textarea white-text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn waves-effect waves-light">
            Add to Experience
          </button>
        </form>
      );
      break;
    default:
      break;
  }

  return <div>{form}</div>;
};

export default AdminForm;

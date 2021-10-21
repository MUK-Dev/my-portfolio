import { FC } from "react";
import s from "./Response.module.css";

interface Props {
  email: string;
  name: string;
  message: string;
}

const Response: FC<Props> = ({ email, name, message }) => {
  return (
    <div className={`card ${s.root}`}>
      <div className="card-content white-text">
        <h6>{email}</h6>
        <h6>{name}</h6>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Response;

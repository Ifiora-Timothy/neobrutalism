import { InfoIcon } from "lucide-react";
import React, { ReactNode } from "react";

type Props = {
  //props for the toast
  title: string;
  description: string;
  children?: ReactNode;
};

const NeobrutallistInfotoast = ({ description, title, children }: Props) => {
  //return a neoebrutalist toast with a title and a description
  return (
    <div className="neo-brutalist-toast  neo-brutalist-toast-info">
      <div className="neo-brutalist-toast-content">
        <h3 className="neo-brutalist-toast-title">{title}</h3>
        <p className="neo-brutalist-toast-description">{description}</p>
        <div className="neo-brutalist-toast-link">{children}</div>
      </div>
      <div className="neo-brutalist-toast-icon">
        <InfoIcon />
      </div>
      <style jsx global>
        {`
          li {
            background: none;
            border: none;
            outline: none;
            box-shadow: none;
          }
          .neo-brutalist-toast {
            font-family: "Arial", sans-serif;
            background: white;
            padding: 1rem;
            border: 6px solid black;
            box-shadow: 12px 12px 0 0 #000;
            max-width: 400px;
            width: 100%;
            margin-bottom: 1rem;
            position: relative;
            overflow: hidden;
          }
          .neo-brutalist-toast::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 8px;
            background: repeating-linear-gradient(
              45deg,
              black,
              black 10px,
              orange 10px,
              orange 20px
            );
          }
          .neo-brutalist-toast-content {
            margin-right: 40px;
          }
          .neo-brutalist-toast-title {
            font-size: 1rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
          }
          .neo-brutalist-toast-description {
            font-size: 0.8rem;
            margin-bottom: 0;
          }
          .neo-brutalist-toast-icon {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 40px;
            background: orange;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default NeobrutallistInfotoast;

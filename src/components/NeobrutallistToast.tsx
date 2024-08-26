import React from "react";
import { CheckIcon, XIcon, LoaderIcon } from "lucide-react";
interface NeoBrutalistToastProps {
  title: string;
  description?: string;
  type: "loading" | "success" | "error";
}
export const NeoBrutalistToast: React.FC<NeoBrutalistToastProps> = ({
  title,
  description,
  type,
}) => {
  return (
    <div className={`neo-brutalist-toast neo-brutalist-toast-${type}`}>
      <div className="neo-brutalist-toast-content">
        <h3 className="neo-brutalist-toast-title">{title}</h3>
        {description && (
          <p className="neo-brutalist-toast-description">{description}</p>
        )}
      </div>
      <div className="neo-brutalist-toast-icon">
        {type === "loading" && <LoaderIcon />}
        {type === "success" && <CheckIcon />}
        {type === "error" && <XIcon />}
      </div>
      <style jsx>
        {`
          .neo-brutalist-toast {
            font-family: "Arial", sans-serif;
            padding: 1rem;
            border: 6px solid black;
            box-shadow: 12px 12px 0 0 black;
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
              yellow 10px,
              yellow 20px
            );
          }
          .neo-brutalist-toast-content {
            margin-right: 40px;
          }
          .neo-brutalist-toast-title {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
          }
          .neo-brutalist-toast-description {
            font-size: 1rem;
            font-weight: bold;
          }
          .neo-brutalist-toast-loading {
            background-color: #fbbf24;
            color: black;
          }
          .neo-brutalist-toast-loading::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: black;
            animation: loading-bar 2s linear infinite;
          }
          .neo-brutalist-toast-success {
            background-color: #34d399;
            color: black;
          }
          .neo-brutalist-toast-error {
            background-color: #f87171;
            color: black;
          }
          neo-brutalist-toast-icon {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }
          .neo-brutalist-toast-icon svg {
            width: 32px;
            height: 32px;
          }
          @keyframes loading-bar {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

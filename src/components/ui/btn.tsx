"use client";
import React from "react";
import styled from "styled-components";

interface BtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}


const Btn: React.FC<BtnProps> = ({ children, onClick, className }) => {
 
  const label =
    typeof children === "string"
      ? children
      : typeof children === "number"
      ? String(children)
      : "Join Now";

  // letters to render (for animation)
  const letters = Array.from(label);

  return (
    <StyledWrapper className={className}>
      <button className="btn-53" onClick={onClick} type="button">
        {/* Original text block (keeps children as originally passed for accessibility) */}
        <div className="original">{children ?? label}</div>

        {/* Animated letters built from the derived label */}
        <div className="letters">
          {letters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .btn-53:disabled {
    cursor: default;
  }

  .btn-53 {
    border: 1px solid;
    border-radius: 999px;
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    overflow: hidden;
    padding: 1.2rem 3rem;
    position: relative;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  .btn-53 .original {
    background: #fff;
    color: #000;
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
    gap: 0.1rem;
    position: relative;
    z-index: 1;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
    display: inline-block;
    line-height: 1;
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }
`;

export default Btn;

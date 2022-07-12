import React from "react";
import "./Header.css";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <>
      <h1 title="Header" className="header" data-testid="header-h1">
        {props.title}
      </h1>
      <h3 className="header">Cats</h3>
    </>
  );
};

export default Header;

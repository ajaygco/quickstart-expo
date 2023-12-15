// Modules
import React from "react";

// Component: Presentation
export const IfUi = ({
  condition,
  renderWhenTrue,
  renderWhenFalse,
  children,
}) => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};

// Component: Logic
export const IfLogic = (props) => {
  return <IfUi {...props} />;
};

// Component: Memo
export const If = React.memo((props) => {
  return <IfLogic {...props} />;
});

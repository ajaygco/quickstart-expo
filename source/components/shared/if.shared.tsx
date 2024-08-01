// Modules
import * as React from "react";

// Types
type IfProps = {
  condition: boolean;
  renderWhenTrue?: React.ReactElement;
  renderWhenFalse?: React.ReactElement;
  children?: React.ReactElement;
};

// Component
export const If = ({
  condition,
  renderWhenTrue,
  renderWhenFalse,
  children,
}: IfProps): React.ReactElement | undefined => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};

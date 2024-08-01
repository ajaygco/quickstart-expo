// Modules
import * as React from "react";

// Types
type IfProps = {
  condition: boolean;
  renderWhenTrue?: React.ReactElement;
  renderWhenFalse?: React.ReactElement;
  children?: React.ReactElement;
};

// Component: Presentation
export const IfUi = ({
  condition,
  renderWhenTrue,
  renderWhenFalse,
  children = undefined,
}: IfProps): React.ReactElement | undefined => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};

// Component: Logic
export const IfLogic = (props: IfProps): React.ReactElement => {
  return <IfUi {...props} />;
};

// Component: Memo
export const If = React.memo((props: IfProps): React.ReactElement => {
  return <IfLogic {...props} />;
});

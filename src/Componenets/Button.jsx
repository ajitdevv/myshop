export const RemoveItemButton = ({
  onClick,
  text = "Remove",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 font-bold bg-danger/80 hover:bg-danger text-foreground px-4 py-2 rounded  shadow-xs ${className}`}
    >
      {text}
    </button>
  );
};

export const AddItemButton = ({ onClick, text = "add", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 font-bold bg-primary/80 hover:bg-primary text-foreground px-4 py-2 rounded  shadow-xs ${className}`}
    >
      {text}
    </button>
  );
};

export const ButtonN = ({ onClick, text = "Button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 font-bold bg-accent text-foreground px-4 py-2 rounded  shadow-xs ${className}`}
    >
      {text}
    </button>
  );
};

const Button = (props) => {
  const { children = "...", variant = "bg-slate-900" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};


export default Button;
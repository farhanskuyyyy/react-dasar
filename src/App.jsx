import React from "react";

// component with class
class ButtonPrimary extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-blue-900 text-white"
        type="submit"
      >
        Buy Now
      </button>
    );
  }
}

// component with function
function ButtonBlack(params) {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="submit"
    >
      Buy Now
    </button>
  );
}

// component with arrow function
const ButtonRed = () => {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-900 text-white"
      type="submit"
    >
      Buy Now
    </button>
  );
};

// dynamic component with props / properties
const Button = (props) => {
  const { children = "...", variant = 'bg-slate-900' } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex gap-x-3">
        <ButtonPrimary></ButtonPrimary>
        <ButtonBlack></ButtonBlack>
        <ButtonRed></ButtonRed>

        <Button variant="bg-blue-900">Login</Button>
        <Button variant="bg-red-900">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;

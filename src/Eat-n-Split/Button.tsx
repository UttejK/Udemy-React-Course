interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
}

export default Button;

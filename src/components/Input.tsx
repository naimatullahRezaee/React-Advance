import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  placeholder: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, placeholder, ...props },
  ref
) {
  return (
    <p>
      <input id={id} name={id} placeholder={placeholder} {...props} ref={ref} />
    </p>
  );
});

export default Input;

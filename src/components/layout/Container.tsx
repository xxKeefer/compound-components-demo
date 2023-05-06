import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="flex h-[100vh] w-full items-start justify-center bg-gray-500 p-8">
      {children}
    </div>
  );
};

"use client";

const TypographyH1 = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <h1
      {...props}
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
    >
      {children}
    </h1>
  );
};

export default TypographyH1;

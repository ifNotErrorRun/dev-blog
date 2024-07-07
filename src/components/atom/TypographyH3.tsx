"use client";

const TypographyH3 = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <h3
      {...props}
      className="scroll-m-20 text-2xl font-semibold tracking-tight align-bottom whitespace-nowrap h-10 leading-10"
    >
      {children}
    </h3>
  );
};

export default TypographyH3;

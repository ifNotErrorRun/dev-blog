"use client";

const TypographyH2 = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2
      {...props}
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
    >
      {children}
    </h2>
  );
};

export default TypographyH2;

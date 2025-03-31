export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-amber-100 p-5 m-3 shadow-lg border border-gray-600 flex justify-center items-center rounded-lg">
      {children}
    </div>
  );
};

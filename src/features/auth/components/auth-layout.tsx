export const AuthLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="bg-[#fcfcfc] flex min-h-screen flex-col justify-center items-center p-6 md:p-10 font-sans">
      <div className="flex w-full max-w-[440px] flex-col items-center">
        {children}
      </div>
    </div>
  );
};

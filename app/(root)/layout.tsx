import Navbar from "@/components/Navbar";


const layoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full md:pl-20 pt-14">{children}</main>
    </div>
  );
};

export default layoutRoot;

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";

const layoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex w-20 flex-col mt-16 fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="h-full md:pl-20 pt-14">{children}</main>
    </div>
  );
};

export default layoutRoot;

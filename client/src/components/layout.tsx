import Footer from "./Footer";
import Header from "./Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

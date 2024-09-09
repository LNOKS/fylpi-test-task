import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-5 pt-12 pb-5 bg-neutral-50">
      <Header logo="https://cdn.builder.io/api/v1/image/assets/TEMP/1721aa584fa89c81098e78ad184726df448377f034f4a5ade8a777d6f5e0453c?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55" />
      <main className="w-full max-w-[1160px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
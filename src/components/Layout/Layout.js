import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageTransition from "../PageTransition/PageTransition";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <PageTransition>
        <main>{children}</main>
      </PageTransition>

      <Footer />
    </>
  );
};

export default Layout;
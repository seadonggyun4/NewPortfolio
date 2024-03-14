// layout Components
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import TitleSection from "@/layout/TitleSection"

export default function Home() {
  return (
      <>
        <Header />
        <main >
            <TitleSection />
        </main>
        <Footer />
      </>
  );
}

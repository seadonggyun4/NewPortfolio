// layout Components
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import TitleSection from "@/layout/TitleSection"
import ProfileSection from "@/layout/profileSection";

export default function Home() {
  return (
      <>
        <Header />
        <main >
            <TitleSection />
            <ProfileSection />
        </main>
        <Footer />
      </>
  );
}

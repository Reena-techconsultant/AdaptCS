import CookiePolicyDialog from "@/components/CookiePolicyDialog";
import AboutSection from "@/components/about";
import ClientsSection from "@/components/clients";
import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import PolicySection from "@/components/policy";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ADAPTA - Unlocking Capital For Adoption</title>
        <meta name="adapta" content="Unlocking Capital For Adoption" />
        <link rel="icon" href="/adapta-logo.ico" />
      </Head>
      <PolicySection />
      <Navbar />
      <CookiePolicyDialog />
      <FooterSection />
    </>
  );
}

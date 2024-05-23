import CookiePolicyDialog from "@/components/CookiePolicyDialog";
import GetToKnowUs from "@/components/GetToKnowUs";
import AboutSection from "@/components/about";
import ClientsSection from "@/components/clients";
import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import Hero from "@/components/hero";
import NavbarLanding from "@/components/navbar";
import ProductsSection from "@/components/products";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Head>
        <title>ADAPTA CS - Unlocking Capital For Adoption</title>
        <meta name="adapta" content="Unlocking Capital For Adoption" />
        <link rel="icon" href="/adapta-logo.ico" />
      </Head>
      {/* Navbar */}
      <NavbarLanding />
      {/* Hero */}
      <Hero />
      {/* about */}
      <AboutSection />
      {/* features */}
      <FeaturesSection />
      {/* Products */}
      <ProductsSection />

      <GetToKnowUs />
      {/* Clients */}
      <ClientsSection />
      {/* Map Contactu */}
      <ContactSection />
      <CookiePolicyDialog />
      {/* Footer */}
      <FooterSection />
      <Toaster />
    </>
  );
}

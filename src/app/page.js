
import Hero from "@/components/Hero";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TraficSources from "@/components/TraficSources";
import transactionImage from "../../public/transaction.png"
import budgetImage from "../../public/budget.png"
import productsImage from "../../public/products.png"
import ExpectedFeatures from "@/components/ExpectedFeatures";
import Leads from "@/components/Leads";
import Pricing from "@/components/Pricing";

export default function Home() {
  const transactionTextContent = {
    mainHeading: "Insights & spam detection.",
    boldParaText: "Open stage API",
    remainingParaText: "Open stage API with a core feature of data occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings.",
  }

  const budgetTextContent = {
    mainHeading: "Stage reporting with 50K+ queries.",
    boldParaText: "Open stage API",
    remainingParaText: "with a core feature of data occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings.",
  }

  const productsTextContent = {
    mainHeading: "Fast matching with content delivery.",
    boldParaText: "Open stage API",
    remainingParaText: "with a core feature of data occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings.",
  }

  return (
    <main className="p-0 min-h-screen">


      <Hero />
      <div className="bg-red-100">
        <TraficSources textContent={transactionTextContent} image={transactionImage} />
        <TraficSources textContent={budgetTextContent} image={budgetImage} />
        <TraficSources textContent={productsTextContent} image={productsImage} />
        <ExpectedFeatures />
        <Leads />
      </div>
      <div className="bg-indigo-900">
        <Pricing />
      </div>


      <ScrollToTopButton />
    </main>
  );
}
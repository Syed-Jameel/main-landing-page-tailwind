import Hero from "@/components/home1/Hero";
import TraficSources from "@/components/home1/TraficSources";
import transactionImage from "../../../public/transaction.png"
import ExpectedFeatures from "@/components/home1/ExpectedFeatures";
import Leads from "@/components/home1/Leads";
import Pricing from "@/components/home1/Pricing";
import FAQ from "@/components/home1/FAQ";
import Navbar1 from "@/components/navbar/Navbar1";

export default function Home() {
    const transactionTextContent = {
        mainHeading: "Insights & spam detection.",
        boldParaText: "Open stage API",
        remainingParaText: "Open stage API with a core feature of data occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings.",
    }


    return (
        <>
            <header>
                <Navbar1 />
            </header>

            <main>
                <Hero />
                <div className="bg-red-100">
                    <TraficSources textContent={transactionTextContent} image={transactionImage} />
                    <ExpectedFeatures />
                    <Leads />
                </div>
                <div className="bg-indigo-900">
                    <Pricing />
                </div>
                <div className="bg-indigo-950">
                    <FAQ />
                </div>
            </main>
        </>
    );
}
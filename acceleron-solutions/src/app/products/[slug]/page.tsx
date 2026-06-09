import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Monitor } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => {
    const slug = product.href.split("/").pop() || "";
    return { slug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find(
    (p) => p.href.split("/").pop() === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Products`,
    description: product.desc,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find(
    (p) => p.href.split("/").pop() === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-48 pb-28 bg-[#0E1535] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#252F61]/25 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={12} /> Back to Products
            </Link>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              {product.subtitle || "Software Product"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {product.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
            {/* Left Column: Product Info & Image */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-extrabold text-[#252F61] mb-6">Product Capabilities</h2>
                <p className="text-[#647084] text-base leading-relaxed">{product.desc}</p>
                <p className="text-[#647084] text-base leading-relaxed mt-4">
                  Built specifically around real operating challenges in heavy industry and engineering environments. Our solutions are designed to be deployed rapidly and scale securely across external customers and group companies.
                </p>
              </div>

              {/* Product Image Panel */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 aspect-video relative flex items-center justify-center p-8 shadow-sm">
                <img
                  src={product.image || "https://acceleronsolutions.io/wp-content/uploads/2024/09/4.png"}
                  alt={product.title}
                  className="max-h-full object-contain rounded-lg shadow-md"
                />
              </div>

              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-xl font-bold text-[#252F61] mb-6">Key Product Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">SAP & ERP Integration</h4>
                      <p className="text-xs text-gray-500 mt-1">Seamlessly connects operational field workflows with backend enterprise databases.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Offline First Architecture</h4>
                      <p className="text-xs text-gray-500 mt-1">Engineered to work reliably in remote mining sites and manufacturing shop floors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Role-Based Dashboards</h4>
                      <p className="text-xs text-gray-500 mt-1">Tailored interfaces for supervisors, technicians, and executive decision-makers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3B4A9E] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#252F61]">Enterprise-Grade Security</h4>
                      <p className="text-xs text-gray-500 mt-1">Encrypted transmission, role access policies, and data isolation by default.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="bg-[#0E1535] text-white p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-xl lg:sticky lg:top-32">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#252F61]/20 rounded-full blur-2xl pointer-events-none" />
              <Monitor className="text-blue-300 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-4">Request a Product Demo</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed mb-8">
                Explore how {product.title} can modernize your business workflows. Schedule a live walkthrough with our solutions engineering team.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#0E1535] py-4 px-6 text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

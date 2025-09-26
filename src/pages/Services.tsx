import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Early Risk Detection",
    description:
      "Identify students who are at high risk of dropout through AI-driven analytics.",
    icon: "🔍",
  },
  {
    title: "Smart Dashboards",
    description:
      "Visualize attendance, marks, and fee data in one place for better decisions.",
    icon: "📊",
  },
  {
    title: "Mentor Assignment",
    description:
      "Connect struggling students with mentors for personalized guidance.",
    icon: "👨‍🏫",
  },
  {
    title: "Reports & Insights",
    description:
      "Download detailed reports in Excel/PDF to track progress and share easily.",
    icon: "📑",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-10">
            Our Services
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border border-purple-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-purple-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

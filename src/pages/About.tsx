import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About <span className="text-blue-600">VidyaSetu</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            VidyaSetu is an AI-powered platform designed to help institutions
            detect early signs of academic risk among students. Our mission is
            simple:
            <span className="font-semibold text-blue-800">
              {" "}
              Detect Early. Intervene Timely. Save Futures.
            </span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With smart dashboards, risk analysis, and mentoring insights,
            VidyaSetu bridges the gap between students and educators — ensuring
            every learner receives the right support before it’s too late.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

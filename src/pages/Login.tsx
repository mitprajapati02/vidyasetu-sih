import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FeatureItem {
  text: string;
  color: string;
}

const coreFeatures: FeatureItem[] = [
  {
    text: "Smart Data Merge – Combine attendance, marks, and fee sheets into one view.",
    color: "bg-green-100",
  },
  {
    text: "Color-Based Risk Insights – Instantly see high, medium, and low-risk students.",
    color: "bg-green-200",
  },
  {
    text: "Admin Dashboard – A consolidated view for better decision-making.",
    color: "bg-green-300",
  },
  {
    text: "Instant Mentor Alerts – Share at-risk student lists with insights in real time.",
    color: "bg-green-400",
  },
  {
    text: "Human in Control – Admin sets rule-based thresholds, keeping educators in charge.",
    color: "bg-green-400",
  },
];

const extraFeatures: FeatureItem[] = [
  {
    text: "AI/ML Insights – Learn from your own success stories for more accurate predictions.",
    color: "bg-red-100",
  },
  {
    text: "Role-Based Dashboards – Tailored for Admin, Mentor, Faculty, Parents, and Students.",
    color: "bg-red-100",
  },
  {
    text: "Logs & Scheduling – Track actions, set meetings, and plan counseling sessions.",
    color: "bg-red-100",
  },
  {
    text: "Insightful Graphs – Visualize student performance and risk trends.",
    color: "bg-red-200",
  },
  {
    text: "Action Tools for Mentors – Flag/unflag students, schedule sessions, and track progress.",
    color: "bg-red-200",
  },
  {
    text: "Student-Friendly Dashboard – Students can view scores, request mentoring, and see counseling schedules.",
    color: "bg-red-200",
  },
  {
    text: "Parent Notifications – Parents stay updated with student progress and alerts.",
    color: "bg-red-300",
  },
  {
    text: "In-App Notifications – Every dashboard has instant updates.",
    color: "bg-red-300",
  },
  {
    text: "Secure & Modern – Authentication system with a clean, responsive UI.",
    color: "bg-red-300",
  },
];

const Features: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-6 py-12 ">
      {/* Core Features Section */}
      <section
        className="mb-16 text-center py-5 bg-blue-100"
        style={{ border: "solid 1px ", borderRadius: "10px" }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 ">
          Problem-Solving Core Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  p-4">
          {coreFeatures.map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-2xl shadow hover:shadow-lg transition`}
            >
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-10 px-8 py-3 bg-blue-600 text-white  font-semibold rounded-full shadow hover:bg-blue-700 transition"
          onClick={() => navigate("/upload-sheets")}
        >
          Experience It Now
        </button>
      </section>

      {/* Extra Features Section */}
      <section
        className="text-center  py-5 "
        style={{
          border: "solid 1px ",
          borderRadius: "10px",
          backgroundColor: "rgba(223,224,226,0.4)",
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          What We Also Provide
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
          {extraFeatures.map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-2xl shadow hover:shadow-lg transition`}
            >
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg font-semibold text-gray-700">
          More features coming soon…
        </p>
      </section>
    </div>
  );
};

const Login = () => {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-gray-100">
    //   <Features />
    // </div>
    <>
      <Header />
      <Features />
      <Footer />
    </>
  );
};

export default Login;

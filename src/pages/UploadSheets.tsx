import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  FileSpreadsheet,
  Users,
  BookOpen,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { X } from "lucide-react";

interface SampleFileFillerProps {
  handleFileUpload: (file: File, type: "attendance" | "marks" | "fees") => void;
}

const SampleDataFiller: React.FC<SampleFileFillerProps> = ({
  handleFileUpload,
}) => {
  const [visible, setVisible] = useState(true);

  // Function to fetch sample files from public folder and send to handleFileUpload
  const fillSampleFiles = async () => {
    const sampleFiles = [
      {
        type: "attendance",
        url: "/sample-attendance.xlsx",
        name: "sample-attendance.xlsx",
      },
      { type: "marks", url: "/sample-marks.xlsx", name: "sample-marks.xlsx" },
      { type: "fees", url: "/sample-fees.xlsx", name: "sample-fees.xlsx" },
    ];

    for (const fileInfo of sampleFiles) {
      const res = await fetch(fileInfo.url);
      const blob = await res.blob();
      const file = new File([blob], fileInfo.name, { type: blob.type });
      handleFileUpload(file, fileInfo.type as "attendance" | "marks" | "fees");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed left-0 top-1/3 z-50 flex flex-col items-center bg-white shadow-lg rounded-r-xl p-4 space-y-4">
      {/* Cancel icon */}
      <button
        onClick={() => setVisible(false)}
        className="self-end text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Fill Sample Data Button */}
      <button
        onClick={fillSampleFiles}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Fill Sample Data
      </button>
    </div>
  );
};

const UploadSheets = () => {
  const [attendance, setAttendance] = useState<File | null>(null);
  const [marks, setMarks] = useState<File | null>(null);
  const [fees, setFees] = useState<File | null>(null);

  const [minAttendance, setMinAttendance] = useState(75);
  const [minMarks, setMinMarks] = useState(35);
  const [feeStatus, setFeeStatus] = useState("due");
  const [mentorName, setMentorName] = useState("");
  const [mentorEmail, setMentorEmail] = useState("");

  const navigate = useNavigate();

  // ✅ keep handleFileUpload logic the same
  const handleFileUpload = (
    file: File,
    type: "attendance" | "marks" | "fees"
  ) => {
    switch (type) {
      case "attendance":
        setAttendance(file);
        break;
      case "marks":
        setMarks(file);
        break;
      case "fees":
        setFees(file);
        break;
    }
  };

  // ✅ updated handleSubmit with backend call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (attendance) formData.append("attendance", attendance);
    if (marks) formData.append("marks", marks);
    if (fees) formData.append("fees", fees);

    formData.append("min_attendance", String(minAttendance));
    formData.append("min_marks", String(minMarks));
    formData.append("fee_status", feeStatus);
    formData.append("mentor_name", mentorName);
    formData.append("mentor_email", mentorEmail);

    try {
      const response = await fetch(
        "https://vidyasetu-backend-sih-production.up.railway.app/dropout",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Response:", data);
      console.log("Form Data Submitted:", data);
      if (response.ok) {
        navigate("/admin-dashboard", { state: { data } });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  const sampleFormats = {
    attendance: {
      headers: [
        "roll_no",
        "name",
        "subject1_attendance",
        "subject2_attendance",
        "subject3_attendance",
      ],
      example: ["001", "John Doe", "40", "85", "20"],
    },
    marks: {
      headers: [
        "roll_no",
        "name",
        "subject1_marks",
        "subject2_marks",
        "subject3_marks",
      ],
      example: ["001", "John Doe", "30", "78", "100"],
    },
    fees: {
      headers: ["roll_no", "name", "total_fee", "fee_paid", "fee_status"],
      example: ["001", "John Doe", "5000", "3000", "Due"],
    },
  };

  const FileUploadCard = ({
    title,
    icon: Icon,
    type,
    file,
    sampleFormat,
  }: {
    title: string;
    icon: any;
    type: "attendance" | "marks" | "fees";
    file: File | null;
    sampleFormat: any;
  }) => (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary p-2 bg-blue-100">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>Upload CSV or Excel file</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            file
              ? "bg-blue-400 border-blue-600"
              : "border-primary/30 hover:border-primary/50"
          }`}
        >
          <Upload
            className={`h-8 w-8 mx-auto mb-2 ${
              file ? "text-white" : "text-primary/60"
            }`}
          />
          <div className="space-y-2">
            <Label htmlFor={`${type}-upload`} className="cursor-pointer">
              <div
                className={`text-sm font-medium ${
                  file ? "text-white" : "text-gray-800"
                }`}
              >
                {file ? file.name : "Click to upload or drag and drop"}
              </div>
              <div
                className={`text-xs ${
                  file ? "text-white/90" : "text-muted-foreground"
                }`}
              >
                CSV, XLSX files (Max 10MB)
              </div>
            </Label>
            <Input
              id={`${type}-upload`}
              type="file"
              accept=".csv,.xlsx,.xls"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(file, type);
              }}
            />
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2 text-primary">
            Ideal Format:
          </h4>
          <div className="text-xs space-y-1">
            <div className="font-medium text-muted-foreground">
              Headers: {sampleFormat.headers.join(" | ")}
            </div>
            <div className="text-muted-foreground">
              Example: {sampleFormat.example.join(" | ")}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl pb-4 font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              Upload Student Data
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Upload your student data files to get started with VidyaSetu's
              early intervention system
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl shadow relative group">
              {/* Label */}
              <label
                htmlFor="aiToggle"
                className="text-gray-800 font-medium cursor-not-allowed flex items-center"
              >
                Like to integrate AI-ML?
              </label>

              {/* Toggle Button (Disabled) */}
              <button
                id="aiToggle"
                disabled
                className="relative w-14 h-8 bg-gray-300 rounded-full cursor-not-allowed flex items-center px-1 transition"
              >
                <span className="absolute left-1 w-6 h-6 bg-white rounded-full shadow"></span>
              </button>

              {/* Icon with Tooltip */}
              <div className="relative">
                <Lock className="text-gray-500 w-5 h-5 cursor-pointer" />

                {/* Tooltip on hover */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-sm rounded-md px-3 py-2 w-64">
                  If you want to integrate AI-ML model, please{" "}
                  <a
                    href="/login"
                    className="underline text-blue-400 hover:text-blue-300"
                  >
                    login first
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
          <SampleDataFiller handleFileUpload={handleFileUpload} />

          {/* File Upload Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <FileUploadCard
              title="Attendance Data"
              icon={Users}
              type="attendance"
              file={attendance}
              sampleFormat={sampleFormats.attendance}
            />
            <FileUploadCard
              title="Marks/Assessment"
              icon={BookOpen}
              type="marks"
              file={marks}
              sampleFormat={sampleFormats.marks}
            />
            <FileUploadCard
              title="Fees Data"
              icon={CreditCard}
              type="fees"
              file={fees}
              sampleFormat={sampleFormats.fees}
            />
          </div>

          <Separator className="mb-12" />

          {/* Configuration Form */}
          <Card className="max-w-4xl mx-auto bg-blue-100 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary p-2 bg-blue-100">
                Configure Thresholds & Mentors
              </CardTitle>
              <CardDescription>
                Set rules for identifying at-risk students and assign mentors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Thresholds */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="attendance-threshold">
                    Minimum Attendance (%)
                  </Label>
                  <Input
                    id="attendance-threshold"
                    type="number"
                    value={minAttendance}
                    onChange={(e) => setMinAttendance(parseInt(e.target.value))}
                    placeholder="75"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passing-marks">Passing Marks (%)</Label>
                  <Input
                    id="passing-marks"
                    type="number"
                    value={minMarks}
                    onChange={(e) => setMinMarks(parseInt(e.target.value))}
                    placeholder="40"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Fee Status</Label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="fee-status"
                        value="due"
                        checked={feeStatus === "due"}
                        onChange={(e) => setFeeStatus(e.target.value)}
                      />
                      <span>Due</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="fee-status"
                        value="overdue"
                        checked={feeStatus === "overdue"}
                        onChange={(e) => setFeeStatus(e.target.value)}
                      />
                      <span>Overdue</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="fee-status"
                        value="paid"
                        checked={feeStatus === "paid"}
                        onChange={(e) => setFeeStatus(e.target.value)}
                      />
                      <span>Paid</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Mentor Assignment */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary p-2 bg-blue-100">
                  Assign Mentor
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="mentor-name">Mentor Name</Label>
                    <Input
                      id="mentor-name"
                      value={mentorName}
                      onChange={(e) => setMentorName(e.target.value)}
                      placeholder="Mentor Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor-email">Mentor Email</Label>
                    <Input
                      id="mentor-email"
                      type="email"
                      value={mentorEmail}
                      onChange={(e) => setMentorEmail(e.target.value)}
                      placeholder="mentor@school.edu"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-6">
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  className="px-12 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/80 hover:to-primary-glow/80 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Generate Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadSheets;

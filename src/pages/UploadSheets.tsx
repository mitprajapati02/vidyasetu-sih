import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Upload, FileSpreadsheet, Users, BookOpen, CreditCard, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UploadSheets = () => {
  const navigate = useNavigate();
  const [attendanceFile, setAttendanceFile] = useState<File | null>(null);
  const [marksFile, setMarksFile] = useState<File | null>(null);
  const [feesFile, setFeesFile] = useState<File | null>(null);
  const [thresholds, setThresholds] = useState({
    minAttendance: 75,
    passingMarks: 40,
    mentorName: "",
    mentorEmail: ""
  });

  const handleFileUpload = (file: File, type: 'attendance' | 'marks' | 'fees') => {
    switch(type) {
      case 'attendance':
        setAttendanceFile(file);
        break;
      case 'marks':
        setMarksFile(file);
        break;
      case 'fees':
        setFeesFile(file);
        break;
    }
  };

  const handleSubmit = () => {
    // Navigate to admin dashboard
    navigate('/admin-dashboard');
  };

  const sampleFormats = {
    attendance: {
      headers: ["StudentID", "Name", "Subject", "Attendance%", "TotalClasses"],
      example: ["ST001", "John Doe", "Mathematics", "85", "20"]
    },
    marks: {
      headers: ["StudentID", "Name", "Subject", "TestScore", "MaxMarks"],
      example: ["ST001", "John Doe", "Mathematics", "78", "100"]
    },
    fees: {
      headers: ["StudentID", "Name", "FeesAmount", "FeesPaid", "FeesStatus"],
      example: ["ST001", "John Doe", "5000", "3000", "Pending"]
    }
  };

  const FileUploadCard = ({ 
    title, 
    icon: Icon, 
    type, 
    file, 
    sampleFormat 
  }: { 
    title: string; 
    icon: any; 
    type: 'attendance' | 'marks' | 'fees';
    file: File | null;
    sampleFormat: any;
  }) => (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>Upload CSV or Excel file</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
          <Upload className="h-8 w-8 mx-auto mb-2 text-primary/60" />
          <div className="space-y-2">
            <Label htmlFor={`${type}-upload`} className="cursor-pointer">
              <div className="text-sm font-medium">
                {file ? file.name : "Click to upload or drag and drop"}
              </div>
              <div className="text-xs text-muted-foreground">
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
          <h4 className="text-sm font-medium mb-2 text-primary">Ideal Format:</h4>
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
            Upload Student Data
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your student data files to get started with VidyaSetu's early intervention system
          </p>
        </div>

        {/* File Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <FileUploadCard
            title="Attendance Data"
            icon={Users}
            type="attendance"
            file={attendanceFile}
            sampleFormat={sampleFormats.attendance}
          />
          <FileUploadCard
            title="Marks/Assessment"
            icon={BookOpen}
            type="marks"
            file={marksFile}
            sampleFormat={sampleFormats.marks}
          />
          <FileUploadCard
            title="Fees Data"
            icon={CreditCard}
            type="fees"
            file={feesFile}
            sampleFormat={sampleFormats.fees}
          />
        </div>

        <Separator className="mb-12" />

        {/* Configuration Form */}
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Configure Thresholds & Mentors</CardTitle>
            <CardDescription>Set rules for identifying at-risk students and assign mentors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Thresholds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="attendance-threshold">Minimum Attendance (%)</Label>
                <Input
                  id="attendance-threshold"
                  type="number"
                  value={thresholds.minAttendance}
                  onChange={(e) => setThresholds({...thresholds, minAttendance: parseInt(e.target.value)})}
                  placeholder="75"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passing-marks">Passing Marks (%)</Label>
                <Input
                  id="passing-marks"
                  type="number"
                  value={thresholds.passingMarks}
                  onChange={(e) => setThresholds({...thresholds, passingMarks: parseInt(e.target.value)})}
                  placeholder="40"
                />
              </div>
            </div>

            {/* Mentor Assignment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Assign Mentor</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="mentor-name">Mentor Name</Label>
                  <Input
                    id="mentor-name"
                    value={thresholds.mentorName}
                    onChange={(e) => setThresholds({...thresholds, mentorName: e.target.value})}
                    placeholder="Dr. Sarah Johnson"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentor-email">Mentor Email</Label>
                  <Input
                    id="mentor-email"
                    type="email"
                    value={thresholds.mentorEmail}
                    onChange={(e) => setThresholds({...thresholds, mentorEmail: e.target.value})}
                    placeholder="sarah.johnson@school.edu"
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
  );
};

export default UploadSheets;
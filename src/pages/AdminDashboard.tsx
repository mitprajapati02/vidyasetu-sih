import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  AlertTriangle,
  TrendingDown,
  UserCheck,
  GraduationCap,
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-muted-foreground">
        No data available. Please upload files first.
        <div
          className="animate-fade-up pl-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            onClick={() => navigate("/upload-sheets")}
            className=" text-white hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:text-black hover:scale-105 transition-all duration-300"
          >
            Try for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  // ✅ Extract from API response
  const { filters, mentor, students, summary } = data;

  const getRiskBadgeClass = (risk: string) => {
    switch (risk) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-orange-500 text-white";
      case "Low":
        return "bg-green-500 text-white";
      default:
        return "";
    }
  };

  const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    icon: Icon,
    description,
    bgColor,
  }) => (
    <Card
      className={`backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 ${
        bgColor || "bg-card/50"
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );

  const exportData = (format: "pdf" | "excel") => {
    console.log(`Exporting data as ${format}`);
    // Here you can hook into a real export service
  };

  return (
    <>
      {" "}
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className=" bg-[#F57152] p-4 flex justify-between items-center mb-12">
            <div className="bg-purple-200 p-4 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl ">Monitoring students for dropout risk</p>
              <p className="text-sm text-muted-foreground mt-2">
                Mentor: <span className="font-medium">{mentor.name}</span> (
                {mentor.email})
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => exportData("pdf")}
                className="border-primary/40 hover:bg-primary/10 hover:text-black"
              >
                <FileText className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button
                variant="outline"
                onClick={() => exportData("excel")}
                className="border-primary/40 hover:bg-primary/10 hover:text-black"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <StatCard
              title="Total Students"
              value={summary.total_students}
              icon={Users}
              description="Enrolled students"
              bgColor="bg-blue-100"
            />

            <StatCard
              title="High Risk Students"
              value={summary.high_risk_students}
              icon={AlertTriangle}
              description="Need immediate attention"
              bgColor="bg-red-100"
            />

            <StatCard
              title="Dropout %"
              value={`${summary.dropout_percentage}%`}
              icon={TrendingDown}
              description="Based on current trends"
              bgColor="bg-yellow-100"
            />

            <StatCard
              title="Mentor Assigned"
              value={mentor.name}
              icon={UserCheck}
              description="Monitoring students"
              bgColor="bg-green-100"
            />

            <StatCard
              title="Overall Class Status"
              value={summary.overall_status}
              icon={GraduationCap}
              description="Performance indicator"
              bgColor="bg-purple-100"
            />
          </div>

          {/* Main Table */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary p-4 bg-blue-100 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Student Risk Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Marks</TableHead>
                    <TableHead>Fee Status</TableHead>
                    <TableHead>Risk Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student: any) => {
                    // Map risk levels to colors
                    const riskColors: Record<string, string> = {
                      High: "hsla(16, 64.1%, 75.8%, 1)", // Red-ish for high risk
                      Medium: "hsla(48, 89%, 56%, 1)", // Yellow for medium risk
                      Low: "hsla(135, 64%, 76%, 1)", // Green for low risk
                    };

                    return (
                      <TableRow
                        key={student.roll_no}
                        className="hover:opacity-90"
                        style={{
                          backgroundColor:
                            riskColors[student.risk_level] || "transparent",
                        }}
                      >
                        <TableCell className="font-medium">
                          {student.roll_no}
                        </TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>
                          <span
                            className={`font-medium ${
                              student.avg_attendance < filters.min_attendance
                                ? "text-destructive"
                                : "text-green-600"
                            }`}
                          >
                            {student.avg_attendance.toFixed(1)}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`font-medium ${
                              student.avg_marks < filters.min_marks
                                ? "text-destructive"
                                : "text-green-600"
                            }`}
                          >
                            {student.avg_marks.toFixed(1)}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              student.fee_status === "Paid"
                                ? "secondary"
                                : student.fee_status === "Due"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {student.fee_status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={getRiskBadgeClass(student.risk_level)}
                          >
                            {student.risk_level}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Legend Footer */}
          <div className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-muted-foreground">Low Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm text-muted-foreground">
                  Medium Risk
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-destructive rounded"></div>
                <span className="text-sm text-muted-foreground">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-destructive" />
                <span className="text-sm text-muted-foreground">
                  Dropout Chances: {summary.dropout_percentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;

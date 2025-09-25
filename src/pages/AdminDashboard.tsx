import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, AlertTriangle, TrendingDown, UserCheck, GraduationCap, Download, FileText } from "lucide-react";

const AdminDashboard = () => {
  // Mock data for demonstration
  const stats = {
    totalStudents: 347,
    atRiskStudents: 23,
    predictedDropout: 6.6,
    mentorsAssigned: 8,
    overallStatus: "Good"
  };

  const students = [
    {
      id: "ST001",
      name: "John Doe",
      attendance: 65,
      testScore: 45,
      feesStatus: "Overdue",
      riskLevel: "High"
    },
    {
      id: "ST002", 
      name: "Jane Smith",
      attendance: 88,
      testScore: 78,
      feesStatus: "Paid",
      riskLevel: "Low"
    },
    {
      id: "ST003",
      name: "Mike Johnson",
      attendance: 72,
      testScore: 38,
      feesStatus: "Pending",
      riskLevel: "Medium"
    },
    {
      id: "ST004",
      name: "Sarah Wilson",
      attendance: 58,
      testScore: 32,
      feesStatus: "Overdue",
      riskLevel: "High"
    },
    {
      id: "ST005",
      name: "David Brown",
      attendance: 85,
      testScore: 82,
      feesStatus: "Paid",
      riskLevel: "Low"
    },
    {
      id: "ST006",
      name: "Emma Davis",
      attendance: 70,
      testScore: 55,
      feesStatus: "Pending",
      riskLevel: "Medium"
    }
  ];

  const getRiskBadgeVariant = (risk: string) => {
    switch(risk) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'secondary';
      default: return 'default';
    }
  };

  const getRiskBadgeClass = (risk: string) => {
    switch(risk) {
      case 'High': return 'bg-destructive text-destructive-foreground';
      case 'Medium': return 'bg-orange-500 text-white';
      case 'Low': return 'bg-green-500 text-white';
      default: return '';
    }
  };

  const StatCard = ({ title, value, icon: Icon, description, trend }: any) => (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className="text-xs text-green-600 mt-1">↗ {trend}</div>
        )}
      </CardContent>
    </Card>
  );

  const exportData = (format: 'pdf' | 'excel') => {
    // Mock export functionality
    console.log(`Exporting data as ${format}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Monitor student progress and identify at-risk students
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => exportData('pdf')}
              className="border-primary/40 hover:bg-primary/10"
            >
              <FileText className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button 
              variant="outline" 
              onClick={() => exportData('excel')}
              className="border-primary/40 hover:bg-primary/10"
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
            value={stats.totalStudents}
            icon={Users}
            description="Enrolled students"
            trend="+2.5% from last month"
          />
          <StatCard
            title="At-Risk Students"
            value={stats.atRiskStudents}
            icon={AlertTriangle}
            description="Need immediate attention"
          />
          <StatCard
            title="Predicted Dropout %"
            value={`${stats.predictedDropout}%`}
            icon={TrendingDown}
            description="Based on current trends"
          />
          <StatCard
            title="Mentors Assigned"
            value={stats.mentorsAssigned}
            icon={UserCheck}
            description="Active mentors"
          />
          <StatCard
            title="Overall Class Status"
            value={stats.overallStatus}
            icon={GraduationCap}
            description="Class performance"
          />
        </div>

        {/* Main Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Users className="h-6 w-6" />
              Student Risk Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Test Score</TableHead>
                  <TableHead>Fees Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        student.attendance < 75 ? 'text-destructive' : 
                        student.attendance < 85 ? 'text-orange-500' : 'text-green-600'
                      }`}>
                        {student.attendance}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        student.testScore < 40 ? 'text-destructive' : 
                        student.testScore < 60 ? 'text-orange-500' : 'text-green-600'
                      }`}>
                        {student.testScore}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        student.feesStatus === 'Paid' ? 'secondary' :
                        student.feesStatus === 'Pending' ? 'default' : 'destructive'
                      }>
                        {student.feesStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskBadgeClass(student.riskLevel)}>
                        {student.riskLevel}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
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
              <span className="text-sm text-muted-foreground">Medium Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-destructive rounded"></div>
              <span className="text-sm text-muted-foreground">High Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-destructive" />
              <span className="text-sm text-muted-foreground">Dropout Chances: 6.6%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
import { useState } from "react";
import { useAuth } from "./AuthContext";
import {
  LayoutGrid,
  FileText,
  Briefcase as BriefcaseBusiness,
  CreditCard,
  Settings,
  LogOut,
  Sun,
  Moon,
  MoreVertical,
  Plus,
  Users,
  Calendar,
  Clock,
  DollarSign,
  ChevronRight,
  Search,
  Filter,
  Eye,
  EyeOff,
  Copy,
  Lock,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ... (keep all the existing component definitions)

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();

  // ... (keep all the existing render logic)

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Sidebar */}
      <div
        className={`w-64 p-4 border-r ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 text-white p-2 rounded">P</div>
          <span className={`font-semibold ${darkMode ? "text-white" : ""}`}>
            PaySync
          </span>
        </div>

        <nav className="space-y-2">
          <SidebarItem
            icon={LayoutGrid}
            label="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
            darkMode={darkMode}
          />
          <SidebarItem
            icon={FileText}
            label="Contracts"
            active={activeTab === "contracts"}
            onClick={() => setActiveTab("contracts")}
            darkMode={darkMode}
          />
          <SidebarItem
            icon={BriefcaseBusiness}
            label="Payroll"
            active={activeTab === "payroll"}
            onClick={() => setActiveTab("payroll")}
            darkMode={darkMode}
          />
          <SidebarItem
            icon={CreditCard}
            label="Cards"
            active={activeTab === "cards"}
            onClick={() => setActiveTab("cards")}
            darkMode={darkMode}
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
            darkMode={darkMode}
          />
          <div className="pt-4">
            <SidebarItem
              icon={LogOut}
              label="Log out"
              active={false}
              onClick={logout}
              darkMode={darkMode}
            />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1
              className={`text-2xl font-semibold ${
                darkMode ? "text-white" : ""
              }`}
            >
              Good afternoon, {user?.name}!
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
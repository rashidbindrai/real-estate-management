import React, { useState, useEffect } from 'react';
import { 
  Building2, BarChart3, Users, Wrench, CreditCard, 
  Plus, Search, Filter, TrendingUp, AlertCircle, CheckCircle,
  Calendar, MapPin, DollarSign, Phone, Mail, Home, Settings,
  ChevronDown, ChevronRight, Clock, Zap, FileText, Menu, X, ArrowRight
} from 'lucide-react';

const RealEstateManagementSystem = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const [properties, setProperties] = useState([
    { id: 1, name: 'Sunrise Apartments', units: 120, occupied: 108, rent: 1200, income: 129600, status: 'active' },
    { id: 2, name: 'Riverside Complex', units: 95, occupied: 88, rent: 1500, income: 132000, status: 'active' },
    { id: 3, name: 'Downtown Plaza', units: 150, occupied: 140, rent: 1800, income: 252000, status: 'active' },
    { id: 4, name: 'Hillside Residences', units: 85, occupied: 78, rent: 1350, income: 105300, status: 'active' },
    { id: 5, name: 'Lakefront Towers', units: 200, occupied: 185, rent: 2000, income: 370000, status: 'active' },
    { id: 6, name: 'Garden District', units: 65, occupied: 58, rent: 1100, income: 63800, status: 'active' },
    { id: 7, name: 'Parkview Suites', units: 110, occupied: 105, rent: 1600, income: 168000, status: 'active' },
  ]);

  const [tenants, setTenants] = useState([
    { id: 101, name: 'John Anderson', property: 'Sunrise Apartments', rent: 1200, status: 'paid', dueDate: '2025-04-01', email: 'john@email.com' },
    { id: 102, name: 'Sarah Mitchell', property: 'Riverside Complex', rent: 1500, status: 'pending', dueDate: '2025-03-28', email: 'sarah@email.com' },
    { id: 103, name: 'Michael Chen', property: 'Downtown Plaza', rent: 1800, status: 'paid', dueDate: '2025-04-01', email: 'mchen@email.com' },
    { id: 104, name: 'Emma Rodriguez', property: 'Hillside Residences', rent: 1350, status: 'overdue', dueDate: '2025-03-15', email: 'emma@email.com' },
    { id: 105, name: 'David Thompson', property: 'Lakefront Towers', rent: 2000, status: 'paid', dueDate: '2025-04-01', email: 'david@email.com' },
    { id: 106, name: 'Lisa Wong', property: 'Garden District', rent: 1100, status: 'pending', dueDate: '2025-03-30', email: 'lisa@email.com' },
  ]);

  const [finances, setFinances] = useState({
    totalRevenue: 1220700,
    totalExpenses: 456200,
    netIncome: 764500,
    occupancyRate: 87.1,
    lastMonthRevenue: 1158300,
    paymentsMissed: 12,
    maintenanceCosts: 89400,
    staffCosts: 156200,
    utilities: 78900,
    insurance: 52700,
  });

  const [maintenance, setMaintenance] = useState([
    { id: 'M001', property: 'Sunrise Apartments', issue: 'HVAC Repair', unit: '205', priority: 'high', status: 'in-progress', assignee: 'James White', date: '2025-03-24' },
    { id: 'M002', property: 'Riverside Complex', issue: 'Plumbing Issue', unit: '412', priority: 'medium', status: 'pending', assignee: 'Robert Garcia', date: '2025-03-25' },
    { id: 'M003', property: 'Downtown Plaza', issue: 'Electrical Check', unit: '808', priority: 'low', status: 'completed', assignee: 'David Kumar', date: '2025-03-20' },
    { id: 'M004', property: 'Lakefront Towers', issue: 'Window Replacement', unit: '1205', priority: 'medium', status: 'pending', assignee: 'James White', date: '2025-03-26' },
  ]);

  const [staff, setStaff] = useState([
    { id: 'S001', name: 'James White', role: 'Maintenance Manager', property: 'Sunrise Apartments', phone: '555-0101', email: 'james@company.com', status: 'active' },
    { id: 'S002', name: 'Robert Garcia', role: 'Maintenance Tech', property: 'Riverside Complex', phone: '555-0102', email: 'robert@company.com', status: 'active' },
    { id: 'S003', name: 'Sarah Johnson', role: 'Property Manager', property: 'Downtown Plaza', phone: '555-0103', email: 'sarah@company.com', status: 'active' },
    { id: 'S004', name: 'David Kumar', role: 'Electrician', property: 'Lakefront Towers', phone: '555-0104', email: 'david@company.com', status: 'active' },
  ]);

  const totalUnits = properties.reduce((sum, p) => sum + p.units, 0);
  const totalOccupied = properties.reduce((sum, p) => sum + p.occupied, 0);

  const MetricCard = ({ label, value, subtext, icon: Icon, color }) => (
    <div className={`bg-gradient-to-br ${color} p-4 md:p-6 rounded-xl border`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-xs md:text-sm font-semibold uppercase ${
            color.includes('blue') ? 'text-blue-600' :
            color.includes('green') ? 'text-green-600' :
            color.includes('purple') ? 'text-purple-600' :
            'text-red-600'
          }`}>{label}</p>
          <p className={`text-2xl md:text-3xl font-bold mt-2 ${
            color.includes('blue') ? 'text-blue-900' :
            color.includes('green') ? 'text-green-900' :
            color.includes('purple') ? 'text-purple-900' :
            'text-red-900'
          }`}>{value}</p>
          <p className={`text-xs md:text-sm mt-2 ${
            color.includes('blue') ? 'text-blue-700' :
            color.includes('green') ? 'text-green-700' :
            color.includes('purple') ? 'text-purple-700' :
            'text-red-700'
          }`}>{subtext}</p>
        </div>
        <Icon size={isMobile ? 24 : 32} className={`flex-shrink-0 ${
          color.includes('blue') ? 'text-blue-300' :
          color.includes('green') ? 'text-green-300' :
          color.includes('purple') ? 'text-purple-300' :
          'text-red-300'
        }`} />
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-4 md:space-y-6 pb-24 md:pb-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <MetricCard 
          label="Revenue" 
          value={`$${(finances.totalRevenue / 1000).toFixed(0)}K`}
          subtext="+5.3% vs last month"
          icon={DollarSign}
          color="from-blue-50 to-blue-100 border-blue-200"
        />
        <MetricCard 
          label="Net Income" 
          value={`$${(finances.netIncome / 1000).toFixed(0)}K`}
          subtext={`${((finances.netIncome / finances.totalRevenue) * 100).toFixed(1)}% margin`}
          icon={TrendingUp}
          color="from-green-50 to-green-100 border-green-200"
        />
        <MetricCard 
          label="Occupancy" 
          value={`${finances.occupancyRate}%`}
          subtext={`${totalOccupied} of ${totalUnits} units`}
          icon={Home}
          color="from-purple-50 to-purple-100 border-purple-200"
        />
        <MetricCard 
          label="Pending" 
          value={finances.paymentsMissed}
          subtext="Action needed"
          icon={AlertCircle}
          color="from-red-50 to-red-100 border-red-200"
        />
      </div>

      {/* Alerts Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button 
          onClick={() => toggleSection('alerts')}
          className="w-full p-4 md:p-6 flex items-center justify-between border-b border-gray-200 hover:bg-gray-50 transition active:bg-gray-100"
        >
          <h2 className="text-base md:text-lg font-bold text-gray-900">Alerts & Issues</h2>
          <ChevronDown size={20} className={`text-gray-600 transition ${expandedSections.alerts ? 'rotate-180' : ''}`} />
        </button>
        
        {expandedSections.alerts && (
          <div className="p-4 space-y-3 md:p-6">
            <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-red-900 text-sm">Overdue Payments</p>
                  <p className="text-red-700 text-xs mt-1 break-words">12 tenants with overdue rent</p>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Wrench size={18} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-orange-900 text-sm">Maintenance Backlog</p>
                  <p className="text-orange-700 text-xs mt-1">5 pending repairs</p>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Users size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-blue-900 text-sm">Staff Vacancies</p>
                  <p className="text-blue-700 text-xs mt-1">2 maintenance positions open</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Properties Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button 
          onClick={() => toggleSection('properties')}
          className="w-full p-4 md:p-6 flex items-center justify-between border-b border-gray-200 hover:bg-gray-50 transition active:bg-gray-100"
        >
          <h2 className="text-base md:text-lg font-bold text-gray-900">Properties ({properties.length})</h2>
          <ChevronDown size={20} className={`text-gray-600 transition ${expandedSections.properties ? 'rotate-180' : ''}`} />
        </button>

        {expandedSections.properties && (
          <div className="divide-y divide-gray-200">
            {properties.map(prop => (
              <div key={prop.id} className="p-4 md:p-6 hover:bg-gray-50 transition active:bg-gray-100">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">{prop.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">{prop.units} units • ${(prop.income / 1000).toFixed(0)}K/mo</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold flex-shrink-0">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-xs">
                    <p className="text-gray-500 uppercase">Occupied</p>
                    <p className="text-lg font-bold text-gray-900">{prop.occupied}/{prop.units}</p>
                  </div>
                  <div className="text-xs">
                    <p className="text-gray-500 uppercase">Rate</p>
                    <p className="text-lg font-bold text-gray-900">${prop.rent}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: `${(prop.occupied/prop.units)*100}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Maintenance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <button 
          onClick={() => toggleSection('maintenance')}
          className="w-full p-4 md:p-6 flex items-center justify-between border-b border-gray-200 hover:bg-gray-50 transition active:bg-gray-100"
        >
          <h2 className="text-base md:text-lg font-bold text-gray-900">Maintenance ({maintenance.length})</h2>
          <ChevronDown size={20} className={`text-gray-600 transition ${expandedSections.maintenance ? 'rotate-180' : ''}`} />
        </button>

        {expandedSections.maintenance && (
          <div className="divide-y divide-gray-200">
            {maintenance.map(item => (
              <div key={item.id} className="p-4 md:p-6 hover:bg-gray-50 transition active:bg-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.issue}</p>
                    <p className="text-xs text-gray-600 mt-1 truncate">{item.property} • Unit {item.unit}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 whitespace-nowrap ${
                    item.priority === 'high' ? 'bg-red-100 text-red-700' :
                    item.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{item.priority}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">by {item.assignee}</p>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    item.status === 'completed' ? 'bg-green-100 text-green-700' :
                    item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-4 pb-24 md:pb-8">
      <div className="flex gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex-1">Properties</h1>
        <button className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition active:bg-blue-800 flex-shrink-0">
          <Plus size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {properties.map(prop => (
          <div key={prop.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition active:shadow-lg">
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">{prop.name}</h3>
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1"><MapPin size={12} /> Location</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold flex-shrink-0">Active</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Units</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{prop.units}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Occ.</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{prop.occupied}</p>
                </div>
              </div>

              <div className="mb-3 bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: `${(prop.occupied/prop.units)*100}%`}}></div>
              </div>

              <div className="text-xs md:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rent</span>
                  <span className="font-bold text-gray-900">${prop.rent}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-600">Monthly</span>
                  <span className="font-bold text-gray-900">${(prop.income/1000).toFixed(0)}K</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTenants = () => (
    <div className="space-y-4 pb-24 md:pb-8">
      <div className="flex gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex-1">Tenants</h1>
        <button className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition active:bg-blue-800 flex-shrink-0">
          <Plus size={20} />
        </button>
      </div>

      <div className="relative">
        <Search size={18} className="absolute left-3 top-3 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search tenants..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
        />
      </div>

      <div className="space-y-2">
        {tenants.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase())).map(tenant => (
          <div key={tenant.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition active:shadow-md">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{tenant.name}</p>
                <p className="text-xs text-gray-600 mt-1 truncate">{tenant.property}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 whitespace-nowrap ${
                tenant.status === 'paid' ? 'bg-green-100 text-green-700' :
                tenant.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>{tenant.status}</span>
            </div>
            
            <div className="flex items-center justify-between text-xs md:text-sm mb-2">
              <span className="text-gray-600">Rent: <span className="font-bold text-gray-900">${tenant.rent}</span></span>
              <span className="text-gray-600">Due: {new Date(tenant.dueDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</span>
            </div>

            <div className="flex gap-2 pt-2 border-t border-gray-200">
              <a href={`mailto:${tenant.email}`} className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-blue-50 text-blue-600 rounded text-xs font-medium hover:bg-blue-100 active:bg-blue-200 transition">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFinance = () => (
    <div className="space-y-4 pb-24 md:pb-8">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900">Finance</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 md:p-6 rounded-xl">
          <p className="text-blue-100 text-xs font-semibold uppercase">Revenue</p>
          <p className="text-2xl md:text-3xl font-bold mt-2">${(finances.totalRevenue / 1000).toFixed(1)}K</p>
          <p className="text-blue-100 text-xs mt-2">Annual</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 md:p-6 rounded-xl">
          <p className="text-orange-100 text-xs font-semibold uppercase">Expenses</p>
          <p className="text-2xl md:text-3xl font-bold mt-2">${(finances.totalExpenses / 1000).toFixed(1)}K</p>
          <p className="text-orange-100 text-xs mt-2">Annual</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 md:p-6 rounded-xl">
          <p className="text-green-100 text-xs font-semibold uppercase">Net</p>
          <p className="text-2xl md:text-3xl font-bold mt-2">${(finances.netIncome / 1000).toFixed(1)}K</p>
          <p className="text-green-100 text-xs mt-2">{((finances.netIncome / finances.totalRevenue) * 100).toFixed(1)}% margin</p>
        </div>
      </div>

      {/* Expense Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h2 className="font-bold text-gray-900 text-base">Expenses</h2>
        </div>
        <div className="p-4 md:p-6 space-y-4">
          {[
            { label: 'Maintenance', value: finances.maintenanceCosts, color: 'bg-orange-500' },
            { label: 'Staff', value: finances.staffCosts, color: 'bg-blue-500' },
            { label: 'Utilities', value: finances.utilities, color: 'bg-green-500' },
            { label: 'Insurance', value: finances.insurance, color: 'bg-red-500' },
          ].map((expense, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2 text-xs md:text-sm">
                <p className="font-semibold text-gray-900">{expense.label}</p>
                <p className="font-bold text-gray-900">${(expense.value / 1000).toFixed(1)}K</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${expense.color}`}
                  style={{width: `${(expense.value / finances.totalExpenses) * 100}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMaintenance = () => (
    <div className="space-y-4 pb-24 md:pb-8">
      <div className="flex gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex-1">Facilities</h1>
        <button className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition active:bg-blue-800 flex-shrink-0">
          <Plus size={20} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-red-600 font-semibold text-xs uppercase">High</p>
          <p className="text-2xl md:text-3xl font-bold text-red-900 mt-1">{maintenance.filter(m => m.priority === 'high').length}</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-yellow-600 font-semibold text-xs uppercase">In Progress</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-900 mt-1">{maintenance.filter(m => m.status === 'in-progress').length}</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-green-600 font-semibold text-xs uppercase">Done</p>
          <p className="text-2xl md:text-3xl font-bold text-green-900 mt-1">{maintenance.filter(m => m.status === 'completed').length}</p>
        </div>
      </div>

      <div className="space-y-2">
        {maintenance.map(item => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition active:shadow-md">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{item.issue}</p>
                <p className="text-xs text-gray-600 mt-1 truncate">{item.property} • Unit {item.unit}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 whitespace-nowrap ${
                item.priority === 'high' ? 'bg-red-100 text-red-700' :
                item.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>{item.priority}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">{item.assignee}</span>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                item.status === 'completed' ? 'bg-green-100 text-green-700' :
                item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHR = () => (
    <div className="space-y-4 pb-24 md:pb-8">
      <div className="flex gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex-1">Staff</h1>
        <button className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition active:bg-blue-800 flex-shrink-0">
          <Plus size={20} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-purple-600 font-semibold text-xs uppercase">Total</p>
          <p className="text-2xl md:text-3xl font-bold text-purple-900 mt-1">{staff.length}</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-blue-600 font-semibold text-xs uppercase">Tech</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-900 mt-1">{staff.filter(s => s.role.includes('Tech') || s.role.includes('Electrician')).length}</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-green-600 font-semibold text-xs uppercase">Manager</p>
          <p className="text-2xl md:text-3xl font-bold text-green-900 mt-1">{staff.filter(s => s.role.includes('Manager') || s.role.includes('Property')).length}</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 md:p-4 text-center">
          <p className="text-orange-600 font-semibold text-xs uppercase">Open</p>
          <p className="text-2xl md:text-3xl font-bold text-orange-900 mt-1">2</p>
        </div>
      </div>

      <div className="space-y-2">
        {staff.map(person => (
          <div key={person.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition active:shadow-md">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {person.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{person.name}</p>
                <p className="text-xs text-gray-600 mt-0.5 truncate">{person.role}</p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{person.property}</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold flex-shrink-0 whitespace-nowrap">Active</span>
            </div>

            <div className="flex gap-2 pt-3 border-t border-gray-200">
              <a href={`tel:${person.phone}`} className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-blue-50 text-blue-600 rounded text-xs font-medium hover:bg-blue-100 active:bg-blue-200 transition">
                <Phone size={14} /> Call
              </a>
              <a href={`mailto:${person.email}`} className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-blue-50 text-blue-600 rounded text-xs font-medium hover:bg-blue-100 active:bg-blue-200 transition">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'properties', name: 'Properties', icon: Building2 },
    { id: 'tenants', name: 'Tenants', icon: Users },
    { id: 'finance', name: 'Finance', icon: CreditCard },
    { id: 'maintenance', name: 'Facilities', icon: Wrench },
    { id: 'hr', name: 'Staff', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 size={20} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-white">RealEstate Pro</h1>
              <p className="text-xs text-gray-400">800+ Units</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-300 hover:text-white transition p-2">
              <Settings size={20} />
            </button>
            <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              AD
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 hidden lg:block sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 space-y-2">
            {modules.map(module => {
              const Icon = module.icon;
              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModule(module.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition active:scale-95 ${
                    activeModule === module.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium text-sm md:text-base">{module.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
            {activeModule === 'dashboard' && renderDashboard()}
            {activeModule === 'properties' && renderProperties()}
            {activeModule === 'tenants' && renderTenants()}
            {activeModule === 'finance' && renderFinance()}
            {activeModule === 'maintenance' && renderMaintenance()}
            {activeModule === 'hr' && renderHR()}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gray-800 border-t border-gray-700 shadow-2xl">
        <div className="flex items-center justify-around">
          {modules.map(module => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => {
                  setActiveModule(module.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition active:scale-95 ${
                  activeModule === module.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium mt-1 truncate">{module.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealEstateManagementSystem;

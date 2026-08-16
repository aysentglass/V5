'use client';

import { useState, useEffect } from 'react';
import { Lock, Download, Mail, Building, Globe, Phone, Package, MessageSquare, Calendar, LogOut, Search } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  country: string;
  whatsapp: string;
  product: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('admin_token');
    if (saved) setAuthed(true);
  }, []);

  useEffect(() => {
    if (authed) loadInquiries();
  }, [authed]);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/inquiries', {
        headers: { Authorization: `Bearer ${password || localStorage.getItem('admin_token')}` },
      });
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/inquiries?password=${encodeURIComponent(password)}`);
      if (res.ok) {
        localStorage.setItem('admin_token', password);
        setAuthed(true);
        setError('');
        const data = await res.json();
        setInquiries(data);
      } else {
        setError('Incorrect password');
      }
    } catch {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setAuthed(false);
    setPassword('');
  };

  const handleExport = () => {
    const token = password || localStorage.getItem('admin_token') || '';
    const url = `/api/admin?token=${encodeURIComponent(token)}`;
    window.open(url, '_blank');
  };

  const filtered = inquiries.filter(
    (q) =>
      q.name.toLowerCase().includes(search.toLowerCase()) ||
      q.email.toLowerCase().includes(search.toLowerCase()) ||
      q.company.toLowerCase().includes(search.toLowerCase()) ||
      q.country.toLowerCase().includes(search.toLowerCase())
  );

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary">AYSENT Admin</h1>
            <p className="text-gray-500 mt-2">Enter password to view inquiries</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none mb-4"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">AYSENT Inquiry Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/60">{inquiries.length} total inquiries</span>
          <button
            onClick={handleExport}
            className="flex items-center px-4 py-2 bg-accent rounded-lg hover:bg-accent-light transition-colors text-sm font-medium"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, company, country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-white"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p>No inquiries found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((q) => (
              <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{q.name}</h3>
                    {q.company && (
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Building className="w-4 h-4 mr-1" />
                        {q.company}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(q.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-accent" />
                    <a href={`mailto:${q.email}`} className="hover:text-accent truncate">{q.email}</a>
                  </div>
                  {q.country && (
                    <div className="flex items-center text-gray-600">
                      <Globe className="w-4 h-4 mr-2 text-accent" />
                      {q.country}
                    </div>
                  )}
                  {q.whatsapp && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-accent" />
                      {q.whatsapp}
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <Package className="w-4 h-4 mr-2 text-accent" />
                    {q.product}
                  </div>
                </div>

                {q.message && (
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                    <p className="font-medium text-gray-500 mb-1">Message:</p>
                    <p className="whitespace-pre-wrap">{q.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

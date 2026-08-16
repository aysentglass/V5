import fs from 'fs';
import path from 'path';

export interface Inquiry {
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

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
  }
}

export function getAllInquiries(): Inquiry[] {
  try {
    ensureDataFile();
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw) as Inquiry[];
  } catch {
    return [];
  }
}

export function saveInquiry(data: Omit<Inquiry, 'id' | 'createdAt'>): Inquiry {
  const inquiry: Inquiry = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    createdAt: new Date().toISOString(),
  };

  try {
    ensureDataFile();
    const all = getAllInquiries();
    all.unshift(inquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
  } catch (e) {
    console.error('Failed to save inquiry to file:', e);
  }

  return inquiry;
}

export function inquiriesToCSV(inquiries: Inquiry[]): string {
  const headers = ['Date', 'Name', 'Company', 'Email', 'Country', 'WhatsApp', 'Product', 'Message'];
  const rows = inquiries.map((q) => [
    new Date(q.createdAt).toLocaleString('en-US'),
    q.name,
    q.company,
    q.email,
    q.country,
    q.whatsapp,
    q.product,
    q.message.replace(/\n/g, ' '),
  ]);
  const escape = (val: string) => `"${(val || '').replace(/"/g, '""')}"`;
  return [headers, ...rows].map((row) => row.map(escape).join(',')).join('\n');
}

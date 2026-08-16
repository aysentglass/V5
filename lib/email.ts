import nodemailer from 'nodemailer';
import type { Inquiry } from './store';

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'aaronliu@aysentglass.com';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.aysentglass.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER || 'noreply@aysentglass.com',
    pass: process.env.SMTP_PASS || '',
  },
} as nodemailer.TransportOptions);

export async function sendInquiryNotification(inquiry: Inquiry) {
  if (!process.env.SMTP_PASS) {
    console.log('[Email] SMTP not configured, skipping notification. Inquiry:', inquiry.email);
    return false;
  }

  try {
    await transporter.sendMail({
      from: `"AYSENT Website" <${process.env.SMTP_USER || 'noreply@aysentglass.com'}>`,
      to: NOTIFY_EMAIL,
      subject: `New Inquiry from ${inquiry.name} - ${inquiry.product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1F3A; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Website Inquiry</h2>
          </div>
          <div style="padding: 24px; background: #f8fafc; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; width: 30%;">Name</td><td style="padding: 8px;">${inquiry.name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${inquiry.company || '-'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Country</td><td style="padding: 8px;">${inquiry.country || '-'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">WhatsApp</td><td style="padding: 8px;">${inquiry.whatsapp || '-'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Product</td><td style="padding: 8px;">${inquiry.product}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px;">${inquiry.message.replace(/\n/g, '<br>')}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Submitted</td><td style="padding: 8px;">${new Date(inquiry.createdAt).toLocaleString()}</td></tr>
            </table>
          </div>
        </div>
      `,
    });
    console.log('[Email] Notification sent to', NOTIFY_EMAIL);
    return true;
  } catch (e) {
    console.error('[Email] Failed to send notification:', e);
    return false;
  }
}

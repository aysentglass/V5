'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '8615163206207';
const WECHAT_ID = '+86-15163206207';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AYSENT%2C%20I%27m%20interested%20in%20PDLC%20smart%20film`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-3 sm:right-5 bottom-20 sm:bottom-24 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 3.2c-7.046 0-12.77 5.723-12.77 12.77 0 2.252.586 4.436 1.698 6.356L3.2 28.8l6.675-1.756a12.73 12.73 0 0 0 6.13 1.577h.004c7.045 0 12.77-5.723 12.77-12.77S23.05 3.2 16.004 3.2zm0 23.184h-.003a10.54 10.54 0 0 1-5.373-1.473l-.384-.229-3.958 1.04 1.055-3.86-.251-.397a10.556 10.556 0 0 1-1.617-5.612c0-5.833 4.744-10.577 10.577-10.577 2.825 0 5.485 1.102 7.477 3.095a10.52 10.52 0 0 1 3.096 7.48c0 5.833-4.744 10.576-10.577 10.576zm5.797-7.918c-.317-.158-1.874-.924-2.165-1.029-.29-.106-.502-.158-.714.159-.212.317-.82 1.029-1.006 1.24-.185.212-.37.238-.687.08-.317-.159-1.338-.493-2.548-1.572-.942-.838-1.578-1.874-1.763-2.191-.185-.317-.02-.488.139-.646.143-.143.317-.37.476-.555.159-.185.212-.317.317-.529.106-.212.053-.397-.027-.555-.079-.159-.714-1.722-.978-2.358-.259-.625-.521-.54-.714-.55l-.608-.008c-.212 0-.555.079-.846.397-.291.317-1.109 1.085-1.109 2.643 0 1.558 1.136 3.062 1.295 3.277.159.212 2.243 3.424 5.434 4.804.758.328 1.349.524 1.809.67.76.241 1.451.207 2.001.125.61-.089 1.874-.766 2.138-1.506.265-.74.265-1.374.185-1.506-.079-.133-.291-.212-.608-.37z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </a>

      {/* WeChat Floating Button */}
      <button
        onClick={() => setWechatOpen(!wechatOpen)}
        className="fixed right-3 sm:right-5 bottom-36 sm:bottom-40 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#07C160] rounded-full flex items-center justify-center shadow-lg hover:bg-[#06ad56] hover:scale-110 transition-all duration-300"
        aria-label="WeChat"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M8.691 2C4.768 2 1.5 4.657 1.5 7.955c0 1.883 1.064 3.567 2.717 4.688l-.679 2.043 2.378-1.192c.847.168 1.542.337 2.475.337.217 0 .432-.007.644-.021a5.22 5.22 0 0 1-.216-1.493c0-3.074 2.75-5.566 6.14-5.566.217 0 .432.01.644.027C14.953 3.838 12.098 2 8.691 2zm-2.71 3.15a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72zm5.42 0a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72zm4.713 3.57c-2.95 0-5.347 2.075-5.347 4.635 0 2.56 2.397 4.635 5.347 4.635.615 0 1.206-.095 1.764-.267l1.92.96-.532-1.604c1.367-.938 2.242-2.32 2.242-3.724 0-2.56-2.397-4.635-5.394-4.635zm-1.84 2.225a.688.688 0 1 1 0 1.375.688.688 0 0 1 0-1.375zm3.68 0a.688.688 0 1 1 0 1.375.688.688 0 0 1 0-1.375z" />
        </svg>
      </button>

      {/* WeChat Popup */}
      {wechatOpen && (
        <div className="fixed right-20 sm:right-24 bottom-36 sm:bottom-40 z-50 bg-white rounded-2xl shadow-2xl p-5 w-56 sm:w-64 animate-fade-in-up border border-gray-100">
          <button
            onClick={() => setWechatOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
          <h4 className="font-bold text-primary mb-3 text-center">Add WeChat</h4>
          <div className="flex justify-center mb-3">
            <img
              src="/images/wechat-qr.png"
              alt="WeChat QR Code"
              className="w-40 h-40 rounded-lg border border-gray-200 object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">WeChat ID</p>
            <p className="font-semibold text-primary text-sm">{WECHAT_ID}</p>
          </div>
        </div>
      )}
    </>
  );
}

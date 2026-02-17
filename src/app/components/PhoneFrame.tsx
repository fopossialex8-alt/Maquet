import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-red-900 to-yellow-600 p-4">
      {/* Phone Mockup */}
      <div className="relative w-full max-w-[360px] h-[700px] bg-black rounded-[3rem] shadow-2xl border-[14px] border-black overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-b-3xl z-50"></div>
        
        {/* Screen */}
        <div className="w-full h-full bg-white overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
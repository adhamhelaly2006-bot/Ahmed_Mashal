
import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import { FloralBranch } from './components/Icons';

const CountdownDisplay: React.FC<{ time: number; label: string }> = ({ time, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white rounded-lg shadow-lg">
      <span className="text-4xl sm:text-5xl font-light text-gray-700">{String(time).padStart(2, '0')}</span>
    </div>
    <span className="mt-2 text-sm text-gray-600 uppercase tracking-widest">{label}</span>
  </div>
);

const App: React.FC = () => {
  const weddingDate = "2026-01-29T20:00:00";
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);
  const locationUrl = "https://maps.app.goo.gl/JMU4XZtpuA2ouDti7";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center font-montserrat text-gray-700 overflow-hidden p-4">
      
      {/* Floral Decorations */}
      <FloralBranch className="absolute top-0 left-0 w-48 sm:w-64 text-green-800/60 transform -scale-x-100" />
      <FloralBranch className="absolute bottom-0 right-0 w-48 sm:w-64 text-pink-400/50" />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-8 py-12">

        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg tracking-widest text-gray-600">YOU ARE INVITED TO THE WEDDING OF</p>
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-great-vibes text-7xl sm:text-9xl text-gray-800">Ahmed</h1>
          <p className="font-great-vibes text-4xl sm:text-5xl text-gray-600 my-2">&</p>
          <h1 className="font-great-vibes text-7xl sm:text-9xl text-gray-800">Hend</h1>
        </div>

        <div className="w-full max-w-md animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="h-px bg-gray-300 w-1/2 mx-auto my-6"></div>
        </div>

        {days + hours + minutes + seconds > 0 ? (
          <div className="flex justify-center space-x-2 sm:space-x-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <CountdownDisplay time={days} label="Days" />
            <CountdownDisplay time={hours} label="Hours" />
            <CountdownDisplay time={minutes} label="Minutes" />
            <CountdownDisplay time={seconds} label="Seconds" />
          </div>
        ) : (
           <p className="text-xl text-gray-600 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>Happily Ever After!</p>
        )}

        <div className="animate-fadeInUp text-gray-700 text-lg" style={{ animationDelay: '1s' }}>
            <p className="tracking-widest text-xl">29 . 01 . 2026</p>
            <p className="mt-2">AT 8 PM</p>
        </div>

        <div className="animate-fadeInUp text-gray-600" style={{ animationDelay: '1.2s' }}>
            <p className="text-xl font-medium">Perla (Grand Babylon)</p>
            <p className="mt-1" dir="rtl">بطريق المحله طنطا</p>
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '1.4s' }}>
          <a
            href={locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700/70 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-800/80 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;

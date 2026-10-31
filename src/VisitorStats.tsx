import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, onDisconnect, set, push, increment } from 'firebase/database';

// As suas chaves do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbIMwOxn9RqShC3eWFMfAF0RKhkXXZcTI",
  authDomain: "monitora-ms.firebaseapp.com",
  databaseURL: "https://monitora-ms-default-rtdb.firebaseio.com",
  projectId: "monitora-ms",
  storageBucket: "monitora-ms.firebasestorage.app",
  messagingSenderId: "272641354626",
  appId: "1:272641354626:web:b702688c220d7b0f25fd9b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function useVisitorStats() {
  const [stats, setStats] = useState({ online: 0, last30Days: 0, total: 0 });

  useEffect(() => {
    const monthKey = new Date().toISOString().slice(0, 7);
    const totalRef = ref(db, 'stats/total');
    const monthRef = ref(db, `stats/months/${monthKey}`);
    const onlineUsersRef = ref(db, 'online/users');
    const connectedRef = ref(db, '.info/connected');

    if (!sessionStorage.getItem('visit_counted')) {
      set(totalRef, increment(1));
      set(monthRef, increment(1));
      sessionStorage.setItem('visit_counted', 'true');
    }

    let sessionRef: any = null;
    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        sessionRef = push(onlineUsersRef);
        set(sessionRef, true);
        onDisconnect(sessionRef).remove();
      }
    });

    const unsubOnline = onValue(onlineUsersRef, (snap) => {
      const data = snap.val() || {};
      setStats((prev) => ({ ...prev, online: Object.keys(data).length }));
    });

    const unsubTotal = onValue(totalRef, (snap) => {
      setStats((prev) => ({ ...prev, total: snap.val() || 0 }));
    });

    const unsubMonth = onValue(monthRef, (snap) => {
      setStats((prev) => ({ ...prev, last30Days: snap.val() || 0 }));
    });

    return () => {
      if (sessionRef) set(sessionRef, null);
      unsubOnline();
      unsubTotal();
      unsubMonth();
    };
  }, []);

  return stats;
}

export const VisitorStats: React.FC = () => {
  const { online, last30Days, total } = useVisitorStats();

  return (
    <div className="fixed bottom-3 right-72 z-50 flex items-center bg-[#0f172a] border border-slate-800 rounded-2xl px-2 py-3 shadow-lg font-sans select-none w-max">
      
      {/* 1. Indicador Online (Tempo Real) */}
      <div className="flex flex-col px-5 min-w-[110px]">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <p className="text-[10px] text-slate-400 font-semibold tracking-wide">
            ONLINE AGORA
          </p>
        </div>
        <p className="text-emerald-400 font-bold text-[15px] leading-tight mt-0.5">
          {online > 0 ? online : 1}
        </p>
      </div>

      <div className="w-px h-8 bg-slate-700/50 mx-2"></div>

      {/* 2. Últimos 30 Dias */}
      <div className="flex flex-col px-5 min-w-[110px]">
        <p className="text-[10px] text-slate-400 font-semibold tracking-wide">
          ÚLTIMOS 30 DIAS
        </p>
        <p className="text-cyan-400 font-bold text-[15px] leading-tight mt-0.5">
          {last30Days.toLocaleString('pt-BR')}
        </p>
      </div>

      <div className="w-px h-8 bg-slate-700/50 mx-2"></div>

      {/* 3. Total de Acessos */}
      <div className="flex flex-col px-5 min-w-[110px]">
        <p className="text-[10px] text-slate-400 font-semibold tracking-wide">
          TOTAL DE ACESSOS
        </p>
        <p className="text-white font-bold text-[15px] leading-tight mt-0.5">
          {total.toLocaleString('pt-BR')}
        </p>
      </div>

    </div>
  );
};

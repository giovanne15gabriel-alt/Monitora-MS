import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, onDisconnect, set, push, increment } from 'firebase/database';

// As tuas chaves reais do Firebase inseridas aqui
const firebaseConfig = {
  apiKey: "AIzaSyDbIMwOxn9RqShC3eWFMfAF0RKhkXXZcTI",
  authDomain: "monitora-ms.firebaseapp.com",
  databaseURL: "https://monitora-ms-default-rtdb.firebaseio.com",
  projectId: "monitora-ms",
  storageBucket: "monitora-ms.firebasestorage.app",
  messagingSenderId: "272641354626",
  appId: "1:272641354626:web:b702688c220d7b0f25fd9b"
};

// Inicializa a ligação com o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Hook contendo toda a lógica de contagem e presença em tempo real
function useVisitorStats() {
  const [stats, setStats] = useState({ online: 0, last30Days: 0, total: 0 });

  useEffect(() => {
    const monthKey = new Date().toISOString().slice(0, 7); // Ex: "2026-10"
    const totalRef = ref(db, 'stats/total');
    const monthRef = ref(db, `stats/months/${monthKey}`);
    const onlineUsersRef = ref(db, 'online/users');
    const connectedRef = ref(db, '.info/connected');

    // Incrementa visita única por sessão no total e no mês
    if (!sessionStorage.getItem('visit_counted')) {
      set(totalRef, increment(1));
      set(monthRef, increment(1));
      sessionStorage.setItem('visit_counted', 'true');
    }

    // Gere a ligação "Online"
    let sessionRef: any = null;
    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        sessionRef = push(onlineUsersRef);
        set(sessionRef, true);
        onDisconnect(sessionRef).remove(); // Remove quando o utilizador fechar o separador
      }
    });

    // Ouve as mudanças de utilizadores online
    const unsubOnline = onValue(onlineUsersRef, (snap) => {
      const data = snap.val() || {};
      setStats((prev) => ({ ...prev, online: Object.keys(data).length }));
    });

    // Ouve as mudanças do total
    const unsubTotal = onValue(totalRef, (snap) => {
      setStats((prev) => ({ ...prev, total: snap.val() || 0 }));
    });

    // Ouve as mudanças do mês
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

// Componente Visual Principal
export const VisitorStats: React.FC = () => {
  const { online, last30Days, total } = useVisitorStats();

  return (
    <div className="fixed bottom-3 right-72 z-50 flex items-center bg-[#0f172a] border border-slate-800 rounded-2xl px-5 py-3 shadow-lg font-sans select-none w-max">
      
      {/* Indicador Online (Tempo Real) */}
      <div className="flex items-center gap-2 pr-4" title="Utilizadores online agora">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <Eye className="w-5 h-5 text-cyan-400 ml-1" strokeWidth={2} />
        <span className="text-emerald-400 font-bold text-sm ml-1">
          {online > 0 ? online : 1}
        </span>
      </div>

      <div className="w-px h-8 bg-slate-700/50 mx-2"></div>

      {/* Últimos 30 Dias */}
      <div className="px-4">
        <p className="text-[10px] text-slate-400 font-semibold tracking-wide">
          ÚLTIMOS 30 DIAS
        </p>
        <p className="text-cyan-400 font-bold text-[15px] leading-tight mt-0.5">
          {last30Days.toLocaleString('pt-BR')}
        </p>
      </div>

      <div className="w-px h-8 bg-slate-700/50 mx-2"></div>

      {/* Total de Acessos */}
      <div className="pl-4">
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

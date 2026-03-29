import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Menu, EyeOff, Eye, ChevronDown, ChevronUp, Home as HomeIcon, Send, PlusCircle, MessageSquare, Mail } from "lucide-react";
import tarjetaImg from "@/assets/tarjeta.png";

const Home = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [cuentasOpen, setCuentasOpen] = useState(true);
  const [tarjetasOpen, setTarjetasOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="bg-background px-5 pt-6 pb-8">
        {/* Top row: avatar + name + menu */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border-2 border-foreground/40 flex items-center justify-center">
              <User className="h-6 w-6 text-foreground/60" />
            </div>
            <div>
              <p className="text-base font-bold text-foreground">Hola Cristina Misi</p>
              <p className="text-sm font-semibold text-[hsl(80,100%,50%)]">contrato *4696</p>
            </div>
          </div>
          <button className="text-foreground/80">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Balance */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="flex items-center gap-2 text-sm font-bold text-[hsl(80,100%,50%)] mb-2"
          >
            {balanceVisible ? "Ocultar" : "Mostrar"}
            {balanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          <p className="text-4xl font-bold text-foreground">
            {balanceVisible ? "0,50 €" : "••••"}
          </p>
          <p className="text-sm text-foreground/80 mt-1">Saldo total de tus cuentas</p>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 rounded-t-3xl bg-[hsl(0,0%,94%)] px-5 pt-5 pb-24 space-y-1">
        {/* Balance dropdown */}
        <button onClick={() => navigate("/mis-cuentas")} className="w-full bg-white rounded-xl px-4 py-3.5 flex items-center justify-between">
          <span className="text-[hsl(0,0%,25%)] text-base">Balance (tengo y debo)</span>
          <ChevronDown className="h-5 w-5 text-[hsl(0,0%,50%)]" />
        </button>

        {/* Separator */}
        <div className="h-px bg-[hsl(0,0%,85%)] my-2" />

        {/* Mis cuentas */}
        <div>
          <button
            onClick={() => setCuentasOpen(!cuentasOpen)}
            className="w-full flex items-center justify-between py-3"
          >
            <span className="text-[hsl(0,0%,20%)] text-lg font-medium">Mis cuentas</span>
            {cuentasOpen ? (
              <ChevronUp className="h-5 w-5 text-[hsl(0,0%,50%)]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[hsl(0,0%,50%)]" />
            )}
          </button>
          {cuentasOpen && (
            <div className="bg-white rounded-xl px-4 py-4 mb-2">
              <p className="text-[hsl(0,0%,30%)] text-sm font-semibold uppercase tracking-wide">
                Cuenta corriente general
              </p>
              <p className="text-[hsl(166,100%,24%)] text-lg font-bold mt-1">0,50 €</p>
            </div>
          )}
        </div>

        {/* Separator */}
        <div className="h-px bg-[hsl(0,0%,85%)] my-2" />

        {/* Mis tarjetas */}
        <div>
          <button
            onClick={() => setTarjetasOpen(!tarjetasOpen)}
            className="w-full flex items-center justify-between py-3"
          >
            <span className="text-[hsl(0,0%,20%)] text-lg font-medium">Mis tarjetas</span>
            {tarjetasOpen ? (
              <ChevronUp className="h-5 w-5 text-[hsl(0,0%,50%)]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[hsl(0,0%,50%)]" />
            )}
          </button>
          {tarjetasOpen && (
            <img src={tarjetaImg} alt="Tarjeta Caja Rural" className="rounded-xl w-full" />
          )}
        </div>
      </div>

      {/* Chat FAB */}
      <div className="fixed bottom-20 right-5">
        <button className="h-14 w-14 rounded-full bg-[hsl(80,100%,50%)] flex items-center justify-center shadow-lg">
          <MessageSquare className="h-6 w-6 text-[hsl(166,100%,24%)]" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[hsl(0,0%,90%)] flex items-center justify-around py-2 px-2">
        <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Inicio" active />
        <NavItem icon={<Send className="h-5 w-5" />} label="Enviar dinero" />
        <div className="flex flex-col items-center -mt-5">
          <button className="h-12 w-12 rounded-full bg-[hsl(166,100%,30%)] flex items-center justify-center shadow-md">
            <PlusCircle className="h-6 w-6 text-white" />
          </button>
          <span className="text-[10px] text-[hsl(0,0%,50%)] mt-0.5">Contratar</span>
        </div>
        <NavItem icon={<span className="text-lg font-bold">%.</span>} label="Bizum" />
        <NavItem icon={<Mail className="h-5 w-5" />} label="Bandeja" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button className="flex flex-col items-center gap-0.5 min-w-[56px]">
    <span className={active ? "text-[hsl(166,100%,24%)]" : "text-[hsl(0,0%,50%)]"}>{icon}</span>
    <span className={`text-[10px] ${active ? "text-[hsl(166,100%,24%)] font-semibold" : "text-[hsl(0,0%,50%)]"}`}>
      {label}
    </span>
  </button>
);

export default Home;

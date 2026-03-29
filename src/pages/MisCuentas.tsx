import { useNavigate } from "react-router-dom";
import { ArrowLeft, Menu, ClipboardCopy, Send, Wallet, ArrowUpDown, SlidersHorizontal, ArrowLeftRight, MessageSquare, Home as HomeIcon, PlusCircle, Mail } from "lucide-react";

const MisCuentas = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="bg-background px-5 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <span className="text-lg font-bold text-foreground">Mis cuentas</span>
          <button>
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
        <p className="text-xl font-bold text-foreground">Cuenta Corriente General *4...</p>
      </div>

      {/* Balance Card */}
      <div className="mx-5 -mt-1 bg-white rounded-2xl px-6 py-6 shadow-sm">
        <p className="text-4xl font-bold text-[hsl(0,0%,20%)]">0,50 €</p>
      </div>

      {/* Dot indicator */}
      <div className="flex justify-center py-4">
        <div className="h-2 w-2 rounded-full bg-[hsl(0,0%,40%)]" />
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-8 pb-6">
        <ActionBtn icon={<ClipboardCopy className="h-6 w-6 text-white" />} label="Copiar IBAN" />
        <ActionBtn icon={<Send className="h-6 w-6 text-white" />} label="Enviar dinero" />
        <ActionBtn icon={<Wallet className="h-6 w-6 text-white" />} label={"Detalle de\nla cuenta"} />
      </div>

      {/* Movimientos */}
      <div className="flex-1 bg-[hsl(0,0%,96%)] px-5 pt-4 pb-24">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-[hsl(0,0%,15%)]">Movimientos</span>
          <div className="flex gap-3">
            <ArrowUpDown className="h-5 w-5 text-[hsl(0,0%,40%)]" />
            <SlidersHorizontal className="h-5 w-5 text-[hsl(0,0%,40%)]" />
          </div>
        </div>

        {/* 28 mar */}
        <p className="text-sm text-[hsl(0,0%,45%)] mb-2">28 mar</p>
        <div className="bg-white rounded-xl px-4 py-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,40%)]" />
              <div>
                <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.Karla Nohelia</p>
                <p className="text-xs text-[hsl(0,0%,50%)]">Fecha Valor 28 Mar 2026</p>
              </div>
            </div>
            <span className="text-base font-semibold text-[hsl(0,0%,15%)]">-0,50 €</span>
          </div>
        </div>

        {/* 20 mar */}
        <p className="text-sm text-[hsl(0,0%,45%)] mb-2">20 mar</p>
        <div className="bg-white rounded-xl px-4 py-3 mb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,40%)]" />
              <div>
                <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.El Bardi</p>
                <p className="text-xs text-[hsl(0,0%,50%)]">Fecha Valor 20 Mar 2026</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-base font-semibold text-[hsl(0,0%,15%)]">-1,00 €</p>
              <p className="text-sm text-[hsl(0,0%,15%)]">1,00 €</p>
            </div>
          </div>
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
        <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Inicio" />
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

const ActionBtn = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-14 w-14 rounded-full bg-[hsl(166,100%,24%)] flex items-center justify-center">
      {icon}
    </div>
    <span className="text-xs text-[hsl(0,0%,30%)] text-center whitespace-pre-line">{label}</span>
  </div>
);

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button className="flex flex-col items-center gap-0.5 min-w-[56px]">
    <span className={active ? "text-[hsl(166,100%,24%)]" : "text-[hsl(0,0%,50%)]"}>{icon}</span>
    <span className={`text-[10px] ${active ? "text-[hsl(166,100%,24%)] font-semibold" : "text-[hsl(0,0%,50%)]"}`}>
      {label}
    </span>
  </button>
);

export default MisCuentas;

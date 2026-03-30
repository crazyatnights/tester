import { useNavigate } from "react-router-dom";
import { ArrowLeft, Menu, ClipboardCopy, Send, Wallet, ArrowUpDown, SlidersHorizontal, ArrowLeftRight, MessageSquare, Home as HomeIcon, PlusCircle, Mail } from "lucide-react";
import bizumImg from "@/assets/bizum.png";

const MisCuentas = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[hsl(0,0%,96%)]">
      {/* Green header */}
      <div className="bg-background px-5 pt-6 pb-16 relative">
        <div className="flex items-center justify-between mb-5">
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

      {/* Balance Card – overlaps header */}
      <div className="mx-5 -mt-8 bg-white rounded-2xl px-6 py-5 shadow-sm z-10 relative">
        <p className="text-3xl font-bold text-[hsl(0,0%,20%)] text-center">0,50 €</p>
      </div>

      {/* Dot indicator */}
      <div className="flex justify-center py-5">
        <div className="h-2 w-2 rounded-full bg-[hsl(0,0%,50%)]" />
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-10 pb-5">
        <ActionBtn icon={<ClipboardCopy className="h-6 w-6 text-white" />} label="Copiar IBAN" />
        <ActionBtn icon={<Send className="h-6 w-6 text-white" />} label="Enviar&#10;dinero" />
        <ActionBtn icon={<Wallet className="h-6 w-6 text-white" />} label={"Detalle de\nla cuenta"} />
      </div>

      {/* Divider */}
      <div className="h-px bg-[hsl(0,0%,85%)]" />

      {/* Movimientos */}
      <div className="flex-1 px-5 pt-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-[hsl(0,0%,15%)]">Movimientos</span>
          <div className="flex gap-4">
            <ArrowUpDown className="h-5 w-5 text-[hsl(0,0%,40%)]" />
            <SlidersHorizontal className="h-5 w-5 text-[hsl(0,0%,40%)]" />
          </div>
        </div>
    
                {/* 30 mar - Transaction 1 */}
        <p className="text-sm text-[hsl(0,0%,50%)] mb-2 mt-4">30 mar</p>
        <div className="flex items-center justify-between py-3 border-b border-[hsl(0,0%,90%)]">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            <div>
              <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.El Bardi</p>
              <p className="text-xs text-[hsl(0,0%,55%)]">Fecha Valor 30 Mar 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-[hsl(0,0%,15%)]">-0,50 €</p>
            <p className="text-sm text-[hsl(0,0%,40%)]">1,00 €</p>
          </div>
        </div>

        {/* 30 mar - Transaction 2 */}
        <p className="text-sm text-[hsl(0,0%,50%)] mb-2 mt-4">30 mar</p>
        <div className="flex items-center justify-between py-3 border-b border-[hsl(0,0%,90%)]">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            <div>
              <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.El Bardi</p>
              <p className="text-xs text-[hsl(0,0%,55%)]">Fecha Valor 30 Mar 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-[hsl(0,0%,15%)]">-0,50 €</p>
            <p className="text-sm text-[hsl(0,0%,40%)]">1,00 €</p>
          </div>
        </div>

        {/* 30 mar - Transaction 3 */}
        <p className="text-sm text-[hsl(0,0%,50%)] mb-2 mt-4">30 mar</p>
        <div className="flex items-center justify-between py-3 border-b border-[hsl(0,0%,90%)]">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            <div>
              <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.El Bardi</p>
              <p className="text-xs text-[hsl(0,0%,55%)]">Fecha Valor 30 Mar 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-[hsl(0,0%,15%)]">-0,50 €</p>
            <p className="text-sm text-[hsl(0,0%,40%)]">1,00 €</p>
          </div>
        </div>

        {/* 28 mar */}
        <p className="text-sm text-[hsl(0,0%,50%)] mb-2 mt-4">28 mar</p>
        <div className="flex items-center justify-between py-3 border-b border-[hsl(0,0%,90%)]">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            <div>
              <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.Karla Nohelia</p>
              <p className="text-xs text-[hsl(0,0%,55%)]">Fecha Valor 28 Mar 2026</p>
            </div>
          </div>
          <span className="text-base font-semibold text-[hsl(0,0%,15%)]">-0,50 €</span>
        </div>

        {/* 20 mar */}
        <p className="text-sm text-[hsl(0,0%,50%)] mb-2 mt-4">20 mar</p>
        <div className="flex items-center justify-between py-3 border-b border-[hsl(0,0%,90%)]">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            <div>
              <p className="text-base font-medium text-[hsl(0,0%,15%)]">Trf.El Bardi</p>
              <p className="text-xs text-[hsl(0,0%,55%)]">Fecha Valor 20 Mar 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-[hsl(0,0%,15%)]">-1,00 €</p>
            <p className="text-sm text-[hsl(0,0%,40%)]">1,00 €</p>
          </div>
        </div>

      {/* Chat FAB */}
      <div className="fixed bottom-20 right-5 z-20">
        <button className="h-14 w-14 rounded-full bg-[hsl(80,100%,50%)] flex items-center justify-center shadow-lg">
          <MessageSquare className="h-6 w-6 text-[hsl(166,100%,24%)]" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[hsl(0,0%,90%)] flex items-center justify-around py-2 px-2 z-20">
        <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Inicio" />
        <NavItem icon={<Send className="h-5 w-5" />} label="Enviar dinero" />
        <div className="flex flex-col items-center -mt-5">
          <button className="h-12 w-12 rounded-full bg-[hsl(166,100%,30%)] flex items-center justify-center shadow-md">
            <PlusCircle className="h-6 w-6 text-white" />
          </button>
          <span className="text-[10px] text-[hsl(0,0%,50%)] mt-0.5">Contratar</span>
        </div>
        <NavItem icon={<img src={bizumImg} alt="Bizum" className="h-[30px] w-[30px] object-contain" />} label="Bizum" />
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
    <span className="text-xs text-[hsl(0,0%,35%)] text-center whitespace-pre-line leading-tight">{label}</span>
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

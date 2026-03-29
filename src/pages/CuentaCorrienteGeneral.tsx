import { useNavigate } from "react-router-dom";
import { ArrowLeft, ClipboardList, Info } from "lucide-react";

const CuentaCorrienteGeneral = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[hsl(0,0%,96%)]">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 flex items-center gap-3 border-b border-[hsl(0,0%,90%)]">
        <button onClick={() => navigate(-1)} data-testid="button-back">
          <ArrowLeft className="h-5 w-5 text-[hsl(0,0%,30%)]" />
        </button>
        <span className="text-sm font-semibold text-[hsl(0,0%,20%)] tracking-wide uppercase">
          Cuenta Corriente General *472
        </span>
      </div>

      {/* Balance card */}
      <div className="mx-5 mt-6 bg-white rounded-xl px-6 py-5 shadow-sm">
        <p className="text-3xl font-bold text-[hsl(0,0%,15%)] text-center" data-testid="text-balance">
          0,50 €
        </p>
      </div>

      {/* Details */}
      <div className="mx-5 mt-6 bg-white rounded-xl divide-y divide-[hsl(0,0%,90%)] shadow-sm">
        {/* IBAN */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[hsl(0,0%,40%)]">IBAN</span>
            <div className="flex items-center gap-3">
              <button data-testid="button-copy-iban">
                <ClipboardList className="h-5 w-5 text-[hsl(0,0%,45%)]" />
              </button>
              <button data-testid="button-info-iban">
                <Info className="h-5 w-5 text-[hsl(0,0%,45%)]" />
              </button>
            </div>
          </div>
          <p className="text-base font-medium text-[hsl(0,0%,15%)] mt-1" data-testid="text-iban">
            ES3031870871
          </p>
        </div>

        {/* SWIFT/BIC */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[hsl(0,0%,40%)]">SWIFT/BIC</span>
            <button data-testid="button-info-swift">
              <Info className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            </button>
          </div>
          <p className="text-base font-medium text-[hsl(0,0%,15%)] mt-1" data-testid="text-swift">
            BCOEESMM18
          </p>
        </div>

        {/* Titular */}
        <div className="px-5 py-4">
          <span className="text-sm text-[hsl(0,0%,40%)]">Titular</span>
          <p className="text-base font-medium text-[hsl(0,0%,15%)] mt-1" data-testid="text-titular">
            Cristina
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom action bar */}
      <div className="pb-8 flex flex-col items-center gap-2">
        <div className="h-1 w-10 rounded-full bg-[hsl(0,0%,70%)]" />
        <p className="text-base font-semibold text-[hsl(0,0%,20%)]">¿Qué quieres hacer?</p>
      </div>
    </div>
  );
};

export default CuentaCorrienteGeneral;

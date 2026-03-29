import { useNavigate } from "react-router-dom";
import { ArrowLeft, ClipboardList, Info } from "lucide-react";

const CuentaCorrienteGeneral = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[hsl(166,30%,93%)]">
      {/* Header – green background */}
      <div className="bg-[hsl(166,100%,24%)] px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} data-testid="button-back">
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <span className="text-sm font-semibold text-white tracking-wide uppercase">
          Cuenta Corriente General *472
        </span>
      </div>

      {/* Balance card */}
      <div className="mx-5 mt-6 bg-white rounded-xl px-6 py-5 border border-[hsl(0,0%,88%)] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
        <p className="text-3xl font-bold text-[hsl(0,0%,15%)] text-center" data-testid="text-balance">
          0,50 €
        </p>
      </div>

      {/* Details – plain items on light background */}
      <div className="mx-5 mt-6 space-y-5">
        {/* IBAN */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[hsl(0,0%,35%)]">IBAN</span>
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
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[hsl(0,0%,35%)]">SWIFT/BIC</span>
            <button data-testid="button-info-swift">
              <Info className="h-5 w-5 text-[hsl(0,0%,45%)]" />
            </button>
          </div>
          <p className="text-base font-medium text-[hsl(0,0%,15%)] mt-1" data-testid="text-swift">
            BCOEESMM18
          </p>
        </div>

        {/* Titular */}
        <div>
          <span className="text-sm text-[hsl(0,0%,35%)]">Titular</span>
          <p className="text-base font-medium text-[hsl(0,0%,15%)] mt-1" data-testid="text-titular">
            Cristina
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer – green background with dash and action text */}
      <div className="bg-[hsl(166,100%,24%)] pt-3 pb-8 flex flex-col items-center gap-2">
        <div className="h-1 w-10 rounded-full bg-white/40" />
        <p className="text-base font-semibold text-white">¿Qué quieres hacer?</p>
      </div>
    </div>
  );
};

export default CuentaCorrienteGeneral;

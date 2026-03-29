import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.length > 0) {
      navigate("/home");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-6 py-8">
      {/* Menu icon top-right */}
      <div className="w-full flex justify-end">
        <button className="text-foreground/80 hover:text-foreground">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Logo */}
      <div className="mt-12 mb-6">
        <img src={logo} alt="Logo" width={100} height={100} />
      </div>

      {/* Greeting */}
      <h1 className="text-2xl font-semibold text-foreground mb-10">
        ¡Hola, Cristina Misi!
      </h1>

      {/* Password field */}
      <div className="w-full max-w-sm">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-foreground/40 bg-transparent px-4 py-3.5 text-foreground placeholder:text-foreground/60 focus:outline-none focus:border-foreground"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        {/* Forgot password */}
        <p className="mt-3 text-center text-sm text-foreground/80">
          ¿La has olvidado?{" "}
          <a href="#" className="font-semibold underline">
            Solicitar nueva contraseña
          </a>
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom section */}
      <div className="w-full max-w-sm space-y-4 pb-8">
        <button className="w-full text-center text-sm font-semibold text-foreground">
          Acceder con otro DNI, NIF o NIE
        </button>

        <button
          onClick={handleLogin}
          className="w-full rounded-full bg-primary py-4 text-center text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Index;

import React, { useState } from "react";
import ClipeameLogo from "./assets/Clipeame_Logo.png";
import { Link } from "react-router-dom";

export default function Landing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!accepted) {
      setError(
        "Para continuar, por favor acepta los Términos y Condiciones y la Política de Privacidad."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://back-landing.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }

      setSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (err: any) {
      setError("Ha ocurrido un error al registrarte. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black px-4 text-white">
        <h2 className="text-2xl font-bold">¡Registro exitoso!</h2>
        <p className="mt-2">Gracias por unirte a nuestra lista de espera.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black px-4">
      <img
        src={ClipeameLogo}
        alt="Clipeame logo"
        className="w-32 md:w-44 lg:w-80 pb-20"
      />

      <h1 className="text-center text-3xl md:text-5xl font-bold">
        <span className="text-blue-500">Únete ahora</span>{" "}
        <span className="text-white">a la lista de espera.</span>
      </h1>
      <p className="mt-2 text-center text-lg md:text-2xl text-gray-400">
        Recibe una notificación cuando lancemos.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col space-y-4 w-full max-w-sm"
      >
        <label className="flex flex-col text-gray-300 text-sm">
          <span className="mb-1">Nombre</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col text-gray-300 text-sm">
          <span className="mb-1">Email *</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none"
            required
          />
        </label>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              if (e.target.checked) setError("");
            }}
            className="h-5 w-5 accent-blue-500"
          />
          <label className="text-gray-300 text-sm">
            He leído y acepto la{" "}
            <Link to="/privacity" className="hover:underline">
              Política de Privacidad
            </Link>{" "}
            y los{" "}
            <Link to="/terms" className="hover:underline">
              Términos y Condiciones
            </Link>{" "}
            de Clipeame
          </label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-400 disabled:opacity-50 cursor-pointer text-white font-medium py-2 rounded-full transition"
        >
          {loading ? "Enviando..." : "Unirme"}
        </button>
      </form>

      <div className="mt-12 flex flex-col items-center text-xs text-gray-500 space-y-1">
        <Link to="/terms" className="hover:underline">
          Términos &amp; Condiciones
        </Link>
        <Link to="/privacity" className="hover:underline">
          Política de Privacidad
        </Link>
        <Link to="/legal" className="hover:underline">
          Aviso legal
        </Link>
      </div>
    </div>
  );
}

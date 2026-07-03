import { useEffect } from "react";
import { X } from "lucide-react";

function Modal({ open, onClose, children }) {
  // Fermeture avec touche ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // bloque scroll background
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-all duration-300
        ${open ? "visible bg-black/40 backdrop-blur-sm" : "invisible opacity-0"}
      `}
    >
      {/* MODAL BOX */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-white rounded-2xl shadow-2xl
          w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%]
          max-h-[90vh] overflow-y-auto
          p-4 sm:p-6
          transition-all duration-300
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3
            p-2 rounded-full
            text-gray-500
            hover:bg-red-500 hover:text-white
            transition
          "
        >
          <X size={18} />
        </button>

        {/* CONTENT */}
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
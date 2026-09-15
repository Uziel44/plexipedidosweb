import { useState, useCallback, useRef, useEffect } from "react";

export function useWhatsAppRedirect(link) {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const open = useCallback(() => {
    if (loading) return;
    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
      setLoading(false);
    }, 450);
  }, [link, loading]);

  return { open, loading };
}

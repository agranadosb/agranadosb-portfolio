import { useEffect, useId, useState } from "react";

export function useMobileMenuPresenter() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const handle = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", handle);
    return () => desktopQuery.removeEventListener("change", handle);
  }, []);

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return { open, menuId, toggle, close };
}

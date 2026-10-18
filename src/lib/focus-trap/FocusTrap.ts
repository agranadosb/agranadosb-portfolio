interface FocusTrapOptions {
  initialFocus?: HTMLElement | null;
  onEscape?: () => void;
}

const FOCUSABLE = 'button:not([tabindex="-1"]), [href], [tabindex]:not([tabindex="-1"])';

export class FocusTrap {
  private readonly container: HTMLElement;
  private readonly options: FocusTrapOptions;
  private readonly previousFocus: HTMLElement | null;
  private readonly boundKeyDown: (e: KeyboardEvent) => void;

  constructor(container: HTMLElement, options: FocusTrapOptions = {}) {
    this.container = container;
    this.options = options;
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.boundKeyDown = this.onKeyDown.bind(this);
  }

  activate(): void {
    (this.options.initialFocus ?? this.firstFocusable())?.focus();
    document.addEventListener("keydown", this.boundKeyDown);
  }

  deactivate(): void {
    document.removeEventListener("keydown", this.boundKeyDown);
    this.previousFocus?.focus();
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      this.options.onEscape?.();
      return;
    }
    if (e.key === "Tab") this.trapTab(e);
  }

  private trapTab(e: KeyboardEvent): void {
    const focusable = this.focusableElements();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  private focusableElements(): HTMLElement[] {
    return Array.from(this.container.querySelectorAll<HTMLElement>(FOCUSABLE));
  }

  private firstFocusable(): HTMLElement | undefined {
    return this.focusableElements()[0];
  }
}

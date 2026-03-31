import { useEffect, useState } from "react";

const PHONE_NUMBER = "9173181186";
const PHONE_LABEL = "(917) 318-1186";
const EMAIL_ADDRESS = "Ebasse3@gmail.com";
const MOBILE_QUERY = "(max-width: 900px)";

export default function QuoteButton({
  className = "btn btn--primary",
  children = "Request a Quote"
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const syncViewport = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!isSheetOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsSheetOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isSheetOpen]);

  return (
    <>
      {isMobile ? (
        <button
          className={className}
          type="button"
          onClick={() => setIsSheetOpen(true)}
        >
          {children}
        </button>
      ) : (
        <a className={className} href={`mailto:${EMAIL_ADDRESS}`}>
          {children}
        </a>
      )}
      {isMobile && isSheetOpen ? (
        <div
          className="quote-sheet"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-sheet-title"
        >
          <button
            className="quote-sheet__backdrop"
            type="button"
            aria-label="Close contact options"
            onClick={() => setIsSheetOpen(false)}
          />
          <div className="quote-sheet__panel">
            <p className="eyebrow">Get in Touch</p>
            <h3 id="quote-sheet-title">Choose how you want to reach us.</h3>
            <div className="quote-sheet__actions">
              <a className="btn btn--primary" href={`tel:${PHONE_NUMBER}`}>
                Call {PHONE_LABEL}
              </a>
              <a className="btn btn--secondary" href={`mailto:${EMAIL_ADDRESS}`}>
                Email {EMAIL_ADDRESS}
              </a>
            </div>
            <button
              className="quote-sheet__close"
              type="button"
              onClick={() => setIsSheetOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

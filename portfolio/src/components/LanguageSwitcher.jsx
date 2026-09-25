"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
    const [language, setLanguage] = useState("pt");

    return (
        <div
            className="language-switcher"
            role="group"
            aria-label="Selecionar idioma"
        >
            <button
                type="button"
                className={language === "pt" ? "language-option active" : "language-option"}
                aria-pressed={language === "pt"}
                onClick={() => setLanguage("pt")}
            >
                PT
            </button>

            <span className="language-divider" aria-hidden="true">
        /
      </span>

            <button
                type="button"
                className={language === "en" ? "language-option active" : "language-option"}
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>
        </div>
    );
}
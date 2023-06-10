import { Divider } from "antd";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";

import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { useLoadFile } from "../queries/useLoadFile.query";

const uk = require("../contents/about/uk.md");
const en = require("../contents/about/en.md");

export function About() {
  const { lang } = useParams<{ lang?: string }>();
  const file = useMemo(() => {
    switch (lang) {
      case "uk":
        return uk;
      default:
        return en;
    }
  }, [lang]);

  const content$ = useLoadFile(file);

  return (
    <>
     <div className="text-center">
        <span>
          {"🇬🇧 "}
          <Link
            className={!lang || lang == "en" ? "underline" : ""}
            to="/about/en"
          >
            English
          </Link>
        </span>
        <Divider type="vertical" />
        <span>
          {"🇺🇦 "}
          <Link className={lang === "uk" ? "underline" : ""} to="/about/uk">
            Українська
          </Link>
        </span>
      </div>
      <article className="about p-4 bg-white mt-5 rounded-lg shadow-2xl">
        <ReactMarkdown>{content$.data}</ReactMarkdown>
      </article>

      <Footer />
    </>
  );
}

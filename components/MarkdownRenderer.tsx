import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdownRenderers = {
  // TODO: Add appropriate tailwind styles to each level under h1
  heading: ({ level, children }) => {
    if (level === 1) {
      return (
        <h1 className="text-2xl font-semibold text-gray-900">{children}</h1>
      );
    } else if (level === 2) {
      return (
        <h2 className="text-2xl font-semibold text-gray-900">{children}</h2>
      );
    } else if (level === 3) {
      return (
        <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
      );
    } else if (level === 4) {
      return (
        <h4 className="text-2xl font-semibold text-gray-900">{children}</h4>
      );
    } else if (level === 5) {
      return (
        <h5 className="text-2xl font-semibold text-gray-900">{children}</h5>
      );
    } else {
      return (
        <h6 className="text-2xl font-semibold text-gray-900">{children}</h6>
      );
    }
  },
  code: ({ language, value }) => {
    let startLine = 0;
    let ADDED = [];
    let REMOVED = [];
    const lines = value.split("\n");
    if (lines[0].indexOf("added") > -1 || lines[0].indexOf("removed") > -1) {
      startLine = 1;
      const cmd = JSON.parse(lines[0]);
      if (cmd.added) {
        ADDED = cmd.added;
      }
      if (cmd.removed) {
        REMOVED = cmd.removed;
      }
    }

    const renderValue = lines.slice(startLine).join("\n");

    return (
      <div className="rounded bg-gray-800">
        <SyntaxHighlighter
          language={language}
          style={okaidia}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={(lineNumber) => {
            let style = { display: "block", backgroundColor: "transparent" };
            if (ADDED.includes(lineNumber)) {
              style.backgroundColor = "rgba(240, 255, 244, 0.7)";
            } else if (REMOVED.includes(lineNumber)) {
              style.backgroundColor = "rgba(254, 215, 215, 0.7)";
            }
            return { style };
          }}
        >
          {renderValue}
        </SyntaxHighlighter>
      </div>
    );
  },
};

export interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return <ReactMarkdown source={content} renderers={markdownRenderers} />;
}

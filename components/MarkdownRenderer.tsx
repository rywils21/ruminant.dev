import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdownRenderers = {
  list: ({ ordered, children }) => {
    if (ordered) {
      return <ol className="list-decimal list-outside pl-6">{children}</ol>;
    } else {
      return <ul className="list-disc list-outside pl-6">{children}</ul>;
    }
  },
  listItem: ({ children, ...rest }) => {
    return (
      <li className="text-lg text-gray-900 leading-normal mt-2">{children}</li>
    );
  },
  heading: ({ level, children }) => {
    if (level === 1) {
      return (
        <h1 className="text-4xl font-semibold text-gray-900 leading-normal mt-12">
          {children}
        </h1>
      );
    } else if (level === 2) {
      return (
        <h2 className="leading-tight text-3xl font-bold text-gray-900 mb-2 mt-10">
          {children}
        </h2>
      );
    } else if (level === 3) {
      return (
        <h3 className="leading-tight text-xl font-bold text-gray-900 mt-8 mb-2">
          {children}
        </h3>
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
  paragraph: ({ children }) => {
    return (
      <p className="text-lg text-gray-900 leading-normal mt-2">{children}</p>
    );
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
      <div className="block my-4 rounded">
        <SyntaxHighlighter
          language={language}
          style={okaidia}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={(lineNumber) => {
            let style = {
              display: "block",
              marginLeft: "-8px",
              borderLeft: "4px solid transparent",
            };
            if (ADDED.includes(lineNumber)) {
              style.borderLeft = "4px solid #31c48d";
            } else if (REMOVED.includes(lineNumber)) {
              style.borderLeft = "4px solid #e02424";
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

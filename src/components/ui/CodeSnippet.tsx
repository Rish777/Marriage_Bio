import React from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = 'python',
  showLineNumbers = true,
  className = '',
}) => {
  // Simple syntax highlighting functions
  const highlightPython = (code: string): string => {
    // Define Python keywords, built-ins, etc.
    const keywords = ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'try', 'except', 'with', 'as', 'in', 'not', 'and', 'or', 'True', 'False', 'None'];
    const builtins = ['print', 'len', 'range', 'int', 'str', 'float', 'list', 'dict', 'set', 'tuple'];
    
    // Replace strings
    let highlighted = code.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-mint">$&</span>');
    
    // Replace comments
    highlighted = highlighted.replace(/(#.*)$/gm, '<span class="text-gray-400">$1</span>');
    
    // Replace keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-blue-light">$&</span>`);
    });
    
    // Replace builtins
    builtins.forEach(builtin => {
      const regex = new RegExp(`\\b${builtin}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-yellow-400">$&</span>`);
    });
    
    return highlighted;
  };

  const highlightSQL = (code: string): string => {
    // Define SQL keywords
    const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'AS', 'GROUP', 'BY', 'ORDER', 'HAVING', 'LIMIT', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP', 'TABLE', 'VIEW', 'INDEX', 'UNIQUE', 'PRIMARY', 'KEY', 'FOREIGN', 'CONSTRAINT', 'CASCADE', 'REFERENCES', 'NOT', 'NULL', 'DEFAULT', 'DISTINCT', 'AND', 'OR', 'IN', 'BETWEEN', 'LIKE', 'IS', 'EXISTS'];
    
    // Replace strings
    let highlighted = code.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-mint">$&</span>');
    
    // Replace comments
    highlighted = highlighted.replace(/(--.*|\/\*[\s\S]*?\*\/)/gm, '<span class="text-gray-400">$1</span>');
    
    // Replace keywords (case insensitive)
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      highlighted = highlighted.replace(regex, match => `<span class="text-blue-light">${match}</span>`);
    });
    
    return highlighted;
  };

  // Apply appropriate syntax highlighting based on language
  const getHighlightedCode = () => {
    switch (language.toLowerCase()) {
      case 'python':
        return highlightPython(code);
      case 'sql':
        return highlightSQL(code);
      default:
        return code;
    }
  };

  // Split code into lines for line numbering
  const codeLines = code.split('\n');
  
  return (
    <div className={`code-snippet ${className}`}>
      <pre>
        {showLineNumbers ? (
          <code>
            {codeLines.map((line, index) => (
              <div key={index} className="flex">
                <span className="text-gray-500 mr-4 select-none">{index + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: getHighlightedCode().split('\n')[index] || ' ' }} />
              </div>
            ))}
          </code>
        ) : (
          <code dangerouslySetInnerHTML={{ __html: getHighlightedCode() }} />
        )}
      </pre>
    </div>
  );
};

export default CodeSnippet;
import React, { useState } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

interface CodeMirrorProps {
  defaultValue?: string;
  mode?: string;
  theme?: string;
  lineNumbers?: boolean;
  onChange?: (editor: any, data: any, value: string) => void;
}

const CodeEditor: React.FC<CodeMirrorProps> = ({
  defaultValue = '',
  mode = 'javascript',
  theme = 'material',
  lineNumbers = true,
  onChange,
}) => {
  const [code, setCode] = useState(defaultValue);

  const options = {
    mode,
    theme,
    lineNumbers,
  };

  const handleChange = (editor: any, data: any, value: string) => {
    setCode(value);
    onChange?.(editor, data, value);
  };

  return (
    <CodeMirror
      value={code}
      options={options}
      onChange={handleChange}
    />
  );
};

export default CodeEditor;
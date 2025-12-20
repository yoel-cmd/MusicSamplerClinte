import { useState, useContext } from "react";
import { Logic } from "../../context/logic";
import { BuildMatrixFromText } from "../../util/CreatMatrix";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ComposerModal = ({ isOpen, onClose }: Props) => {
  const context = useContext(Logic);
  if (!context) throw new Error("Context error");

  const { setGridMatrix, setCol } = context;
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleGenerate = () => {
    setError("");
    const newMatrix = BuildMatrixFromText(textInput);
    
    if (newMatrix.length === 0) {
      setError("Please write valid notes (do, re, mi...)");
      return;
    }

    setGridMatrix(newMatrix);
    setCol(newMatrix.length);
    onClose();
  };

  return (
    <div className="modal-overlay" style={overlayStyle}>
      <div className="modal-content" style={contentStyle}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <h2 style={{ margin: 0, color: '#333' }}>Enter your Text Composer</h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✖️</button>
        </div>

        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          
        </p>

        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Example: do do sol sol la la sol -"
          style={textareaStyle}
        />

        {error && <p style={{ color: 'red', fontSize: '0.9rem', margin: '5px 0' }}>{error}</p>}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
          <button onClick={onClose} style={cancelButtonStyle}>Cancel</button>
          <button onClick={handleGenerate} style={saveButtonStyle}>Generate & Play</button>
        </div>

      </div>
    </div>
  );
};



const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000 
};

const contentStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '25px',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '500px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  animation: 'fadeIn 0.2s ease-out'
};

const textareaStyle: React.CSSProperties = {
  width: '100%',
  height: '100px',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontFamily: 'monospace',
  fontSize: '1.1rem',
  color: '#333',
  resize: 'vertical'
};

const saveButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const cancelButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};
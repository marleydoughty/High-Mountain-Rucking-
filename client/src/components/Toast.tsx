import { useEffect } from 'react';
import './Toast.css';

type Props = {
  message: string;
  visible: boolean;
  onHide: () => void;
};

export default function Toast({ message, visible, onHide }: Props) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onHide, 3000);
    return () => clearTimeout(t);
  }, [visible, onHide]);

  return (
    <div
      className={`toast ${visible ? 'toast--visible' : ''}`}
      role="status"
      aria-live="polite">
      {message}
    </div>
  );
}

import { LockKeyhole } from 'lucide-react';

export function ConfidentialityNotice({ children }: { children: string }) {
  return (
    <aside className="confidentiality">
      <LockKeyhole size={20} />
      <p>{children}</p>
    </aside>
  );
}

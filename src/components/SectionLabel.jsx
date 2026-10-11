export default function SectionLabel({ children }) {
  return (
    <div className="chip label">
      <span className="dot" />
      {children}
    </div>
  );
}

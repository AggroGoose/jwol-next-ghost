export default function ToggleArrow({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 3,
          fillRule: "evenodd",
        }}
        d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"
      />
    </svg>
  );
}

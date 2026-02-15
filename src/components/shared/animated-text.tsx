export default function AnimatedText({ children }: { 
  children: React.ReactNode 
}) {
  // Lightweight CSS-based hover micro-interaction (replaces framer-motion)
  return (
    <span className="inline-block overflow-hidden h-5">
      <span className="inline-block transition-transform duration-300 ease-out transform hover:-translate-y-1">
        {children}
      </span>
    </span>
  )
}
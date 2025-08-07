import type { PropsWithDetailedHTML } from '@hairy/react-lib'

export function Mouse(props: PropsWithDetailedHTML<SVGAElement>) {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" {...props as any}>
      <rect x="0.599979" y="0.514286" width="14.5714" height="22.9714" rx="6.34286" stroke="#F8FAFC" strokeWidth="1.02857" />
      {/* Animation is linear with an interval of 800ms */}
      <motion.rect
        initial={{ y: 3.1145 }}
        animate={{ y: 3.1145 + 4.11429 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        x="6.85718"
        y="4.1145"
        width="2.05714"
        height="4.11429"
        rx="1.02857"
        fill="#F8FAFC"
      />
    </svg>
  )
}

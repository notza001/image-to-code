import React from 'react'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'large' | 'small'

interface ButtonProps {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
  className = '',
}) => {
  // Size classes
  const sizeClasses = {
    large: 'px-6 py-3 text-base',
    small: 'px-4 py-2 text-sm',
  }

  // Variant classes (Active state + Hover state)
  const variantClasses = {
    primary: disabled
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border-red-700 border-2 border-transparent hover:border-red-700',
    secondary: disabled
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-yellow-400 text-red-800 hover:bg-white hover:text-gray-900 hover:border-yellow-400 border-2 border-transparent hover:border-yellow-400',
  }

  // Corner accent (เหลืองที่มุมซ้ายบน)
  const showAccent = !disabled

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        font-medium
        rounded-lg
        transition-all
        duration-200
        overflow-hidden
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Yellow corner accent */}
      {showAccent && (
        <span
          className="absolute top-0 left-0 w-4 h-4 bg-yellow-400"
          style={{
            borderBottomRightRadius: '100%',
          }}
        />
      )}

      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default Button

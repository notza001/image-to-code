import React from 'react'

interface GoogleButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  children = "Google Search",
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded border border-gray-100 hover:border-gray-200 transition-colors"
    >
      {children}
    </button>
  )
}

export default GoogleButton

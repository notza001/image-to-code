import React from 'react'

interface ProfileCardProps {
  name?: string
  title?: string
  imageUrl?: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Brianne Henderlong",
  title = "VP of Brand Experience",
  imageUrl = "https://placehold.co/80x80"
}) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white">
      {/* Profile Image - Circular */}
      <img
        src={imageUrl}
        alt={`Profile photo of ${name}, ${title}`}
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-500 tracking-wide">
          {title}
        </p>
      </div>
    </div>
  )
}

export default ProfileCard

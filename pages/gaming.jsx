import React from 'react'
import GamingContent from '../components/Gaming/GamingContent'
import GamingSB from '../components/Gaming/GamingSB'

export default function gaming() {
  return (
		<div className="flex w-full">
			<GamingSB />
			<GamingContent />
		</div>
  )
}

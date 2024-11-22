import React from 'react'
import Education from '../components/Education'
import Work from '../components/Work'
import CvButton from '../components/CvButton'

export default function About() {
  return (
    <div>
      <CvButton />
      <Education />
      <Work />
    </div>
  )
}

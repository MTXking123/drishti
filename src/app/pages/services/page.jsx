import Headercard from '@/components/Headercard'
import Section1 from '@/components/services/Section1'
// import Slider from '@/components/services/Slider'
import Whatsapp from '@/components/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <div>
      <Headercard
      desktopImage="https://www.optimalvision.co.uk/design/images/emergancy-banner.jpg"
      mobileImage="https://content.jdmagicbox.com/comp/service_catalogue/hospitals-attr-laser-refractive-and-cataract-surgery-hos321-6.jpg"
      title="Services"
      // description="A good idiom for kids is 'It's raining cats and dogs.' Kids know what both cats and dogs are from an early age."
      />
      
      <Section1/>
      <Whatsapp/>
    </div>
  )
}

export default page
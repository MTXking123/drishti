import Section2 from '@/components/aboutus/Sec1'
import Section1 from '@/components/aboutus/Sect'
// import Section2 from '@/components/aboutus/Section2'
import Headercard from '@/components/Headercard'
import Whatsapp from '@/components/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <div>
      <Headercard
       desktopImage="https://www.drkhanna.ca/images/banner-default.jpg"
       mobileImage="https://content.jdmagicbox.com/comp/def_content_category/vision-therapy-services/1e592f2ddf-vision-therapy-services-2-u6wei.jpg"
       title="About Us"
      //  description="A good idiom for kids is 'It's raining cats and dogs.' Kids know what both cats and dogs are from an early age."
       
      />
        <Section1/>
        <Section2/>
        <Whatsapp/>
    </div>
  )
}

export default page
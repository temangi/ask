import React from 'react'
import Header from '../components/Header/Heade'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Team from '../components/Team/Team'
import Contacts from '../components/Contacts/Contacts'
import Servis from '../components/Servis/Servis'

function ServicePage() {
  return (
    <section>
      <Header/>
      <Main/>
      <Team />
      <Servis/>
      <Contacts/>
      <Footer/>
    </section>
  )
}

export default ServicePage

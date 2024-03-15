import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, accusantium quo! Expedita sint iusto quaerat excepturi velit similique.</p>
        <div className="region_container">
        <div className="card">
         <img src="https://images.pexels.com/photos/8889370/pexels-photo-8889370.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="https://images.pexels.com/photos/13461334/pexels-photo-13461334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
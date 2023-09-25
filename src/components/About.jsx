import { fadeIn, textVariant } from '../utils/motion'

import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { styles } from '../styles'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
      variants={fadeIn("right","spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>  {title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} className='mt-5'>
      <p className={styles.sectionSubText}>Présentation</p>
      <h2 className={styles.sectionHeadText}>A propos du jeu</h2>
    </motion.div>
    <motion.p variants={fadeIn("right","", 0.2,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Choc des stars est une application web qui confronte des stars de différents domaines, tels que <span className="font-bold text-white-100">la musique</span>, le cinéma, le sport, etc., dans un <span className="font-bold text-red-700">ring de boxe</span>. Les utilisateurs peuvent choisir deux stars pour s'affronter, et le système génère un résultat aléatoire pour l'affrontement.
L'application offre une manière amusante et originale de comparer les stars de différents domaines. 
    
    


    </motion.p>
    <motion.p variants={fadeIn("left","", 0.2,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
    Les utilisateurs peuvent choisir leurs stars préférées et voir comment elles se comportent dans un défi inattendu.
    </motion.p>

    {/* <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div> */}
    </>
  )
}

export default SectionWrapper( About, "about")
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { stars } from "../constants";
import { styles } from "../styles";
import { useState } from "react";
import { versus } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onSelect,
  isSelected,
}) => {

  const cardClasses = isSelected
  ? "bg-green-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  : "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer";

  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[320px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end card-img_hover">
            <div
              onClick={onSelect}
              className={cardClasses}
            >
              <img
                src={versus}
                alt="github"
                className="w-1/2 h-1/2  object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  console.log("jugadores selecionador :", selectedCharacters);

  const handleCharacterSelect = (character) => {
    if (selectedCharacters.includes(character)) {
      // El personaje ya está en la lista, así que lo eliminamos.
      const updatedCharacters = selectedCharacters.filter(
        (char) => char !== character
      );
      setSelectedCharacters(updatedCharacters);
    } else if (selectedCharacters.length < 2) {
      // El personaje no está en la lista y hay menos de 2 seleccionados, así que lo agregamos.
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Cards</p>
        <h2 className={styles.sectionHeadText}>Stars</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Vous trouverez ici des informations sur chaque star du sport ou du
          spectacle, avec trois notes, des scores pour le football, le
          basket-ball et la danse, ainsi qu'un lien vers la biographie de la
          star.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {stars.map((project, index) => (
          <ProjectCard
            key={`projec-${index}`}
            index={index}
            {...project}
            onSelect={() => handleCharacterSelect(project)}
    isSelected={selectedCharacters.includes(project)} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "cards");

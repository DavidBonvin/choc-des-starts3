import { compareAndAnnounceWinner, fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
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
            <div onClick={onSelect} className={cardClasses}>
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

  const [gameResult, setGameResult] = useState(null);

  console.log("jugadores selecionador :", selectedCharacters);

  const handleCharacterSelect = (character) => {
    if (selectedCharacters.includes(character)) {
      const updatedCharacters = selectedCharacters.filter(
        (char) => char !== character
      );
      setSelectedCharacters(updatedCharacters);
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handlePlayButtonClick = () => {
    if (selectedCharacters.length === 2) {
      const [player1, player2] = selectedCharacters;
      const result = compareAndAnnounceWinner(player1.name, player2.name);

      setGameResult(result);
    } else {
      setGameResult("Seleccione 2 jugadores para jugar.");
    }
  };

  return (
    <>
      <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
        >
          <h3 className={styles.heroHeadText}>
            {selectedCharacters.length >= 1 ? selectedCharacters[0].name : " "}
          </h3>
        </motion.div>
        <button
          className="text-center justify-center w-[200px] h-[200px]"
          onClick={handlePlayButtonClick}
        >
          <img src={versus} alt="versus" />
        </button>
        {/* <EarthCanvas /> */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
        >
          <h3 className={styles.heroHeadText}>
            {selectedCharacters.length === 2 ? selectedCharacters[1].name : ""}
          </h3>
        </motion.div>
      </div>

      <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
        >
          <motion.h4
            className={styles.heroHeadText}
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            {gameResult && (
              <motion.span
                variants={slideIn("left", "tween", 0.2, 1)}
                style={{
                  color: gameResult.result.includes("gagne") ? "red" : "black",
                }}
              >
                {gameResult.result}
              </motion.span>
            )}
          </motion.h4>
          {gameResult && (
            <motion.div>
              {/* <img src={imageUrl} alt="Ganador" />  */}
              <p>Score : {gameResult.randomA}</p>
              <p>Score : {gameResult.randomB}</p>
            </motion.div>
          )}
        </motion.div>
      </div>

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

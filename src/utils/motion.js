export const textVariant = (delay) => {
 return {
   hidden: {
     y: -50,
     opacity: 0,
   },
   show: {
     y: 0,
     opacity: 1,
     transition: {
       type: "spring",
       duration: 1.25,
       delay: delay,
     },
   },
 };
};

export const fadeIn = (direction, type, delay, duration) => {
 return {
   hidden: {
     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
     opacity: 0,
   },
   show: {
     x: 0,
     y: 0,
     opacity: 1,
     transition: {
       type: type,
       delay: delay,
       duration: duration,
       ease: "easeOut",
     },
   },
 };
};

export const zoomIn = (delay, duration) => {
 return {
   hidden: {
     scale: 0,
     opacity: 0,
   },
   show: {
     scale: 1,
     opacity: 1,
     transition: {
       type: "tween",
       delay: delay,
       duration: duration,
       ease: "easeOut",
     },
   },
 };
};

export const slideIn = (direction, type, delay, duration) => {
 return {
   hidden: {
     x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
     y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
   },
   show: {
     x: 0,
     y: 0,
     transition: {
       type: type,
       delay: delay,
       duration: duration,
       ease: "easeOut",
     },
   },
 };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
 return {
   hidden: {},
   show: {
     transition: {
       staggerChildren: staggerChildren,
       delayChildren: delayChildren || 0,
     },
   },
 };
};

export function compareAndAnnounceWinner(A, B) {
  // Generate random numbers for A and B
  const randomA = Math.floor(Math.random()*11);
  const randomB = Math.floor(Math.random()*11);

  // Compare the random numbers and announce the winner
  let result = "";
  if (randomA > randomB) {
    result = `${A} a gagné !!!`;
  } else if (randomB > randomA) {
    result = `${B} a gagné !!!`;
  } else {
    result = `${A} et ${B} en egalité !!! `;
  }

  // Display the random numbers for A and B along with the result
  console.log(`Score A:${A} avec ${randomA}`);
  console.log(`Score B: ${B} avec ${randomB}`);
  console.log(`Result: ${result}`);

  return {
    result,
    randomA,
    randomB,
  };
}

// Example usage:

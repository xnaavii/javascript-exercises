const findTheOldest = function (peopleArr) {
  return peopleArr.reduce((personA, personB) => {
    if (!personA.yearOfDeath) {
      personA.yearOfDeath = new Date().getFullYear();
    }

    if (!personB.yearOfDeath) {
      personB.yearOfDeath = new Date().getFullYear();
    }

    const agePersonA = personA.yearOfDeath - personA.yearOfBirth;
    const agePersonB = personB.yearOfDeath - personB.yearOfBirth;

    if (agePersonA > agePersonB) {
      return personA;
    } else {
      return personB;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;

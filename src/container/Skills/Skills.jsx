import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { useTranslation } from "react-i18next";
import { SkillsCard } from "../../components";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const { t } = useTranslation(["Skills"]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">{t("title")}</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="p-text">{experience.year}</p>
                {/* <Years experience={experience} /> */}
              </div>
              {/* <motion.div className="app__skills-exp-works">
              </motion.div> */}
              <motion.div className="app__skills-exp-works">
                {experience.works.map((item) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-works-item"
                      data-tip
                      data-for={item.name}
                      key={item.name}
                    >
                      <SkillsCard item={item} />
                    </motion.div>
                    <ReactTooltip
                      id={item.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {item.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);

//years component
// const Years = ({ experience }) => {
//   const { t } = useTranslation(["Skills"]);
//   console.log(experience.works[0]);
//   if (experience.works.key === "Frontend developer") {
//     return <p className="bold-text">{t("experiences.Frontend.year")}</p>;
//   }
//   if (experience.works.value === "Formateur") {
//     return <p className="bold-text">{t("experiences.Formateur.year")}</p>;
//   }
// };

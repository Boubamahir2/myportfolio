import React from "react";
import { useTranslation } from "react-i18next";
import { urlFor } from "../../client";

const ProjectCards = ({ about }) => {
  const { t } = useTranslation(["About"]);
  if (about.title === "Frontend developer") {
    return (
      <>
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          {t("ProjectsSection.frontend.title")}
        </h2>
        <p className="p-text" style={{ marginTop: 10 }}>
          {t("ProjectsSection.frontend.description")}
        </p>
      </>
    );
  }
  if (about.title === "web designer") {
    return (
      <>
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          {t("ProjectsSection.web.title")}
        </h2>
        <p className="p-text" style={{ marginTop: 10 }}>
          {t("ProjectsSection.web.description")}
        </p>
      </>
    );
  }
  if (about.title === "PHP Developer") {
    return (
      <>
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          {t("ProjectsSection.php.title")}
        </h2>
        <p className="p-text" style={{ marginTop: 10 }}>
          {t("ProjectsSection.php.description")}
        </p>
      </>
    );
  }

  if (about.title === "Mern stack developer") {
    return (
      <>
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          {t("ProjectsSection.mern.title")}
        </h2>
        <p className="p-text" style={{ marginTop: 10 }}>
          {t("ProjectsSection.mern.description")}
        </p>
      </>
    );
  }
  // return (
  //   <>
  //     <img src={urlFor(about.imgUrl)} alt={about.title} />
  //     <h2 className="bold-text" style={{ marginTop: 20 }}>
  //       {/* {t("ProjectsSection.mern.title")} */}
  //       {about.title}
  //     </h2>
  //     <p className="p-text" style={{ marginTop: 10 }}>
  //       {/* {t("ProjectsSection.mern.description")} */}
  //       {about.description}
  //     </p>
  //   </>
  // );
};

export default ProjectCards;

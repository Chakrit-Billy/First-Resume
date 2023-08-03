import "./Page3.css";
function Page3() {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "js", percentage: 65 },
    { name: "React", percentage: 70 },
    { name: "Nodejs", percentage: 60 },
    { name: "Python", percentage: 85 },
  ];
  return (
    <>
      <div className="w-[1980px] h-[1080px] bg-black flex flex-col items-center pt-[50px]">
        <div className="HeaderP3 mb-[50px] ">EDUCATION</div>
        <div className="icon-decorated mt-[50px] mb-[50px]">
          <i className="fa-solid fa-school"></i>
        </div>
        <div className="flex mb-[50px]">
          <div className="contentP3 mr-[20px]">Bachelor Degree : </div>
          <div className="contentP flex justify-center items-center">
            {" "}
            Prince of Songkla University
          </div>
        </div>
        <div className=" mb-[50px]">
          <p className="w-[700px] text-white text-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quidem voluptatum atque mollitia velit soluta tenetur, neque
            inventore distinctio doloremque, id consequatur maiores nihil libero
            incidunt molestias commodi ab magnam.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="HeaderP3 ">PROFESSIONAL SKILLS</div>
          <div className="bg-[#313741] w-[1980px] h-[360px] flex items-center justify-center mt-[50px]">
            <div className="skills-container">
              {/* Left Column */}
              <div className="skills-column ">
                {skills.slice(0, 3).map((skill) => (
                  <div className="skill" key={skill.name}>
                    <p>{skill.name}</p>
                    <div className="skill-bar">
                      <div
                        className={`skill-level ${skill.name.toLowerCase()}`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <span className="percentage">{`${skill.percentage}%`}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="skills-column">
                {skills.slice(3).map((skill) => (
                  <div className="skill" key={skill.name}>
                    <p>{skill.name}</p>
                    <div className="skill-bar">
                      <div
                        className={`skill-level ${skill.name.toLowerCase()}`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <span className="percentage">{`${skill.percentage}%`}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3;

import "./Page3.css";
function Page3() {
  const skills = [
    {
      category: "Programming Languages",
      skills: ["Javascript", "Python", "Matlab", "C and C++"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js"],
    },
    { category: "Databases", skills: ["MongoDB", "PostgreSQL"] },
    {
      category: "Others",
      skills: ["Git", "Postman", "Vs code", "Arduino IDE"],
    },
  ];
  return (
    <>
      <div className='w-[1980px] h-[1080px] bg-black flex flex-col items-center pt-[50px]'>
        <div className='HeaderP3 mb-[50px] '>EDUCATION</div>
        <div className='icon-decorated mt-[50px] mb-[50px]'>
          <i className='fa-solid fa-school'></i>
        </div>
        <div className='flex mb-[50px]'>
          <div className='contentP3 mr-[20px]'>Bachelor Degree : </div>
          <div className='contentP flex justify-center items-center'>
            {" "}
            Prince of Songkla University
          </div>
        </div>
        <div className=' mb-[50px]'>
          <p className='w-[700px] text-white text-[24px]'>
            As a recent graduate with a GPA of 3.59, I am proud to have achieved
            the second-highest honors in my academic journey. My dedication to
            excellence is not only reflected in my grades but also in my
            unwavering passion for web development. This fervor is what fuels my
            aspiration to become a proficient full-stack developer.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='HeaderP3 '>PROFESSIONAL SKILLS</div>
          <div className='bg-[#313741] w-[1980px] h-[360px] flex items-center justify-center mt-[50px]'>
            <div className='grid grid-cols-4 gap-8 mx-auto'>
              {skills.map((category, index) => (
                <div key={index} className='text-white text-center'>
                  <div className='text-2xl font-semibold mb-4 border-b-2 border-gray-600 pb-2'>
                    {category.category}
                  </div>
                  <ul className='list-none p-0'>
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className='mb-2 text-lg text-green-400'>
                        <span className='bg-gray-800 rounded-lg px-2 py-1'>
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3;

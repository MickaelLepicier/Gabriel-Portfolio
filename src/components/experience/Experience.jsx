import React from 'react'
import img_experience from '../../assets/experience.png'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden flex flex-col text-gray-600 body-font">
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full "></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full "></div>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute  rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
          <img
            src={img_experience}
            className="object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10"
            alt="Experience"
          />
        </div>
        {/* *** Experience *** */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-orange-500 ">Experience</h1>

          {/* <h2 className="title-font font-bold text-white sm:text-2xl">EBRD World Bank | 2021 - Present</h2> */}

          {/* EBRD World Bank */}
            <h3 className="text-orange-300 leading-relaxed ">
              <strong>EBRD World Bank | 10.2022 - Present</strong>
              <br />
              <strong>Procurement Advisor with Business Development Focus</strong>
            </h3>
          <ul className="mb-8 text-white leading-relaxed ">
            <li className="p-2">
              Assisted in <strong>sustainability documentation</strong> and key procurement initiatives.
            </li>
            <li className="p-2">
              Organized <strong>webinars, delegations, and technology lectures</strong> in collaboration with AI experts
              such as <strong>Google DeepMind</strong>.
            </li>
            <li className="p-2">
              Participated in <strong>international conferences</strong> with multiple MDBs worldwide, including the{' '}
              <strong>Head of Procurement Sustainability Day</strong>.
            </li>
            <li className="p-2">
              <strong>Key achievements:</strong> Managed procurement operations in <strong>Central Asia</strong>,
              created client training programs, conducted <strong>legal research</strong> on sensitive topics, and
              finalized major deals such as the <strong>Aktau Port</strong> and <strong>Pavlodar Tram</strong> tenders
              in <strong>Kazakhstan</strong>.
            </li>
          </ul>

          {/* Ministry of Economy */}
            <h3 className=" text-orange-300 leading-relaxedp-1">
              <strong>Ministry of Economy & Industry Trade | 1.2022 - 10.2022</strong>
              <br />
              <strong>Deputy Director, Middle East & India-Africa</strong>
            </h3>
          <ul className="mb-8 text-white leading-relaxed ">
            <li className="p-2">
              Oversaw <strong>financial attachés</strong> across Africa, the Middle East, and India.
            </li>
            <li className="p-2">
              Organized a <strong>trade conference</strong> with senior Kenyan officials and assisted in drafting{' '}
              <strong>Israel's first free trade agreement</strong> with the <strong>UAE</strong> following the{' '}
              <strong>Abraham Accords</strong>.
            </li>
            <li className="p-2">
              Led <strong>international delegations</strong> to promote Israeli technology and investment.
            </li>
            <li className="p-2">
              <strong>Key achievements:</strong> Increased trade volumes between{' '}
              <strong>Israel, the Middle East, Africa, and India</strong>, and organized the conference that finalized
              the <strong>Israel-Kenya trade agreement</strong>.
            </li>
          </ul>

          {/* Bar Exam Sabbatical */}
            {/* <h3 className="text-white leading-relaxed p-1"> */}
            <h3 className="mb-8 text-orange-300 leading-relaxed ">
              <strong>Bar Exam Studies Sabbatical | 2021 - 2022</strong>
            </h3>
          

          {/* SVSM Law Firm */}
            <h3 className="text-orange-300 leading-relaxed ">
              <strong>Law Firm, Simon-Vekslar Spierer Maoz (SVSM) | 10.2019 - 11.2021</strong>
              <br />
              <strong>Legal Intern</strong>
            </h3>
          <ul className="mb-8 text-white leading-relaxed ">
            <li className="p-2">
              <strong>Project Management:</strong> Worked alongside clients to provide effective legal advice on{' '}
              <strong>Israeli bureaucracy</strong> and regulatory processes.
            </li>
            <li className="p-2">
              Served as a <strong>legal assistant</strong> on cases involving <strong>tenders and contracts</strong>{' '}
              worth hundreds of millions of USD.
            </li>
            <li className="p-2">
              Assisted in the <strong>representation of clients</strong> before the{' '}
              <strong>Supreme and District Courts</strong>.
            </li>
            <li className="p-2">
              Contributed to large <strong>infrastructure projects</strong> in Israel, including the{' '}
              <strong>Light Rail system</strong>.
            </li>
            <li className="p-2">
              <strong>Key achievements:</strong> Conducted <strong>legal research and documentation</strong> supporting
              the successful resolution of over seven cases, including one before the <strong>Supreme Court</strong>.
            </li>
          </ul>

          {/* <h2 className='title-font font-bold text-white sm:text-2xl'> 2024 :</h2>
             <p className='mb-8 text-white leading-relaxed '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, optio.</p>
    */}
        </div>
      </div>
    </section>
  )
}

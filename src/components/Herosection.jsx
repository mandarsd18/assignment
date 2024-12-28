import Image from "next/image";
import React from "react";
import collegeImg from "../../public/Images/cambridge.jpeg";
import doctor from "../../public/Images/doctor.png";
const Herosection = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[80vh]">
          <Image
            src={collegeImg}
            alt="img"
            className="w-full h-full object-cover"
          />
          <div className="absolute h-full top-0 left-0 right-0 bottom-0  bg-black/60"></div>
          <div className="absolute top-[10%] left-[17%]  flex flex-col items-center justify-center">
            <h1 className="text-7xl text-white font-bold text-center my-4">
              Study <span className="text-teal-400">MBBS</span> At{" "}
              <span className="text-teal-400">Uzbekistan's</span> <br /> Leading
              Univercities
            </h1>
            <button className="bg-teal-500  mt-7 px-5 py-2 font-semibold rounded-md text-white">
              Apply Now
            </button>
          </div>
          <div className="absolute left-[5%] bottom-[5%]">
            <h1 className="text-white font-semibold mb-3">
              Study in NMC & WHO recognized medical colleges
            </h1>
            <ul className=" space-y-3">
              {[
                "Get the best of quality education in Uzbekistan",
                "Direct Admissions: Students will get direct admission to the medical university of Uzbekistan",
                "Low tuition fee: Medical universities in Uzbekistan offer low-cost education to foreign students.",
                "100% Safety: Uzbekistan is the safest European country.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-teal-500">✔</span>
                  <p className="text-white">{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
          <div className="h-[15vh] bg-[#fffbef] relative">

            <Image
            src={doctor}
            alt="img"
            className="h-[70vh] w-fit absolute bottom-0 right-0"
            />
            <div className=" w-[90%] mx-auto h-full flex items-center justify-start gap-4">
                <div className=" border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl text-black font-extrabold">12+</h1>
                    <p className="font-semibold">Years of Experience</p>
                </div>
                <div className=" border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl text-black font-extrabold">1000+</h1>
                    <p className="font-semibold">Satisfied students
                    counselled</p>
                </div>
                <div className=" border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl text-black font-extrabold">10+</h1>
                    <p className="font-semibold">Universities
                    affiliated with us!</p>
                </div>
                <div className=" border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl text-black font-extrabold">100+</h1>
                    <p className="font-semibold">Vice Assitance</p>
                </div>
            </div>

          </div>
      </div>
    </>
  );
};

export default Herosection;
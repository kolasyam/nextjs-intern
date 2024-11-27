import React from 'react';
import { DiGithubFull } from 'react-icons/di';
import { IoCodeSlash } from 'react-icons/io5';

interface ParentProps {
  string1: string;
  string2: string;
  string3: string[];
  string4:string;
  string5:number;
  string6:number;
}

const ParentComponent: React.FC<ParentProps> = ({ string1, string2,string3,string4,string5,string6}) => {
  return (
    <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    {/* <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                        <Image src={string1} alt="/" width={string5} height={string6}/>
                    </div> */}
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                        {string2}
                    </h1>
                    {string3.map((item)=>(
                     // eslint-disable-next-line react/jsx-key
                     <div className='flex flex-row justify-between items-center flex-wrap'>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">{item}</div>
                        {/* <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">tailwindcss</div>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">nextjs</div>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">typescript</div> */}
                    </div> 

                    ))}
                    <p className="leading-relaxed mb-3">
                     {/* This weather app utilizes the AccuWeather API to fetch accurate weather data and presents it in a user-friendly interface. The application is responsive, ensuring seamless functionality and optimal user experience across both mobile and desktop devices. */}
                     {string4}
                    </p>
                    <div className="flex justify-center flex-wrap">
                        <button className="px-7 py-2 bg-slate-400 rounded-md mr-10  hover:bg-slate-500">
                        <IoCodeSlash size={20}/>
                        </button>
                        <button className="px-7 py-2 bg-slate-400 rounded-md hover:bg-slate-500">
                        <DiGithubFull size={25}/>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
  );
};

export default ParentComponent;



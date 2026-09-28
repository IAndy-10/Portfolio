"use client"

import Link from 'next/link';
import { serviceData } from '@/data';

const PanelServices = () => {
    return (
        <div className="relative px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {serviceData.map((item, index) => (
                    <div key={index}>
                        <Link href={item.href}>
                            <div
                                className="relative flex items-end justify-center px-4 py-6 h-[200px] md:h-[250px] rounded-lg cursor-pointer bg-cover bg-center group transition-transform duration-300 transform hover:translate-y-1 hover:shadow-[0_5px_10px_0_rgba(0,0,0,0.75)]"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-lg"></div>
                                <h3 className="relative mb-4 text-lg text-white z-10">{item.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PanelServices;

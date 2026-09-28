import { FC } from 'react';
import { 
    dataAboutPage_More_Conferences, 
    dataAboutPage_More_OtherBackground, 
    dataAboutPage_More_Volunteering 
} from "@/data";

// Types
interface TimeLineData {
    id: number;
    title: string;
    subtitle: string;
    description: string | string[];
    date: string;
}

interface TimeLineSectionProps {
    title: string;
    data: TimeLineData[];
    noTopMargin?: boolean;
    style?: React.CSSProperties;
}

// Section component using NEW FORMAT
const TimeLineSection: FC<TimeLineSectionProps> = ({ title, data, noTopMargin, style }) => (
    <div className={`my-10 ${noTopMargin ? 'mt-0' : 'mt-10'}`}>
        <h2 className="text-black mb-4 text-2xl font-bold" style={style}>
            {title}
        </h2>

        <div className="-my-6">
            {data.map((item) => (
                <div key={item.id} className="relative py-6">

                    {/* Row 1: Title*/}
                    <div className="flex items-center gap-3 justify-left">
                        <h3 className="text-black text-xl font-bold">
                            {item.title}
                        </h3>
                    </div>

                    {/* Row 2: Subtitle + Date */}
                    <div className="flex items-center gap-3 mt-1">
                        <div className="text-lg font-semibold text-gray-400">
                            {item.subtitle}
                        </div>

                        <time className="inline-flex items-center justify-center text-xs font-semibold px-3 h-6 text-emerald-600 bg-emerald-100 rounded-full">
                            {item.date}
                        </time>
                    </div>


                    {/* Row 3: Description (bullets) */}
                    <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
                        {Array.isArray(item.description) ? (
                            item.description.map((line, i) => (
                                <li key={i}>{line}</li>
                            ))
                        ) : (
                            <li>{item.description}</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

// Title indentation (same as before)
const titleStyle: React.CSSProperties = {
    marginLeft: '0rem'
};

const TimeLine: FC = () => {
    return (
        <div className="flex flex-col justify-left w-full">

            <TimeLineSection
                style={titleStyle}
                title="Other Academic Background"
                noTopMargin={true}
                data={dataAboutPage_More_OtherBackground}
            />

            <TimeLineSection
                style={titleStyle}
                title="Conferences"
                data={dataAboutPage_More_Conferences}
            />

            <TimeLineSection
                style={titleStyle}
                title="Volunteering"
                data={dataAboutPage_More_Volunteering}
            />

        </div>
    );
};

export default TimeLine;

interface TimeLineData {
    id: number;
    title: string;
    subtitle: string;
    description: string | string[];
    date: string;
}

interface TimeLineProps {
    data: TimeLineData[];
}

const TimeLine = ({ data }: TimeLineProps) => {
    return (
        <div className="flex flex-col justify-left">
            <div className="w-full md:pb-4 md:pt-2">
                <div className="-my-6">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="relative py-6"
                        >
                            {/* Row 1: Title + Date */}
                            <div className="flex items-center gap-3">
                                <h3 className="text-black text-xl font-bold">
                                    {item.title}
                                </h3>

                                <time className="inline-flex items-center justify-center text-xs font-semibold px-3 h-6 text-emerald-600 bg-emerald-100 rounded-full">
                                    {item.date}
                                </time>
                            </div>

                            {/* Row 2: Subtitle */}
                            <div className="text-lg font-semibold text-gray-400 mt-1">
                                {item.subtitle}
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
        </div>
    );
};

export default TimeLine;

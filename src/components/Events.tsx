"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const events = [
    {
        title: "Escape Room",
        category: "Challenge",
        description: "Consulting-style case puzzles with escape-room gamification where teams solve challenges to progress.",
        date: "Consortium '26",
        logo: "/escaperoom-CL_1DC28.webp",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScsR58O5viGcxSRaCAL69OYS2Y9dplU2vEt0C1qRPDGIV2ukQ/viewform?usp=send_form",
    },
    {
        title: "IPL Auction",
        category: "Strategy",
        description: "Build the strongest team with smart bidding, analytics, and prediction.",
        date: "Consortium '26",
        logo: "/iplauction-CM6tDsO9.webp",
        link: "https://ipl.ecellvnit.org/",
    },
    {
        title: "NEO",
        category: "Program",
        description: "A PAN India exam and skill program for classes 7-12 to nurture entrepreneurial skills.",
        date: "Consortium '26",
        logo: "/neo-s6SKDkcM.webp",
        link: "https://neo.ecellvnit.org/",
    },
    {
        title: "Jugaad",
        category: "Innovation",
        description: "Teams receive Rs 100 to maximize through creative ideation, bargaining, and financial management.",
        date: "Consortium '26",
        logo: "/jugaad-Cwv8sXek.webp",
        link: "https://jugaad.ecellvnit.org/",
    },
    {
        title: "StartUp Conclave",
        category: "Conclave",
        description: "A national business plan competition that turns ideas into successful ventures.",
        date: "Consortium '26",
        logo: "/suc-Bc2Eb1A0.webp",
        link: "https://startupconclave.ecellvnit.org/",
    },
    {
        title: "Wallstreet",
        category: "Finance",
        description: "A stock trading competition to test managerial skills, trading acumen, and market intuition.",
        date: "Consortium '26",
        logo: "/wallstreet-BjgcvuFk.webp",
        link: "https://wallstreet.ecellvnit.org/",
    },
    {
        title: "CEO",
        category: "Leadership",
        description: "Real-world challenges, calculated risks, and competition to become influential leaders.",
        date: "Consortium '26",
        logo: "/ceo-CiTAFyd_.webp",
        link: "https://ceo.ecellvnit.org/",
    },
    {
        title: "Startup Expo",
        category: "Exhibition",
        description: "A national exhibition for startups to showcase innovations and network with participants and investors.",
        date: "Consortium '26",
        logo: "/expo-BuSr9Ws3.webp",
        link: "https://expo.ecellvnit.org/",
    },
    {
        title: "Hult Prize",
        category: "Competition",
        description: "The world's largest student startup competition focused on SDG-aligned businesses.",
        date: "Consortium '26",
        logo: "/hultprize-CoQqOHCs.webp",
        link: "https://www.instagram.com/hultprize_vnit/",
    },
    {
        title: "Internship Fair",
        category: "Career",
        description: "Connect - Grow - Innovate. Meet recruiters and explore internship opportunities.",
        date: "Consortium '26",
        logo: "/internshipfair-ognCY5vl.webp",
        link: "mailto:team_ecell@vnit.ac.in",
    },
    {
        title: "Networking Arena",
        category: "Workshop",
        description: "Connect with experts across domains to exchange ideas, guidance, and collaboration.",
        date: "Consortium '26",
        logo: "/networkingarena-D40gd633.webp",
        link: "https://unstop.com/o/E3sMC2w?lb=XXfTQEEf&utm_medium=Share&utm_source=teamvni42274&utm_campaign=Workshops",
    },
    {
        title: "Pitch in the Car",
        category: "Pitch",
        description: "A 4-minute startup pitch judged on innovation, clarity, feasibility, and market potential.",
        date: "Consortium '26",
        logo: "/pitchinthecar-DyolDNEq.webp",
        link: "https://unstop.com/o/CGW3AvD?lb=6vnimjjW&utm_medium=Share&utm_source=aryansin7258&utm_campaign=Competitions",
    },
    {
        title: "Pitch Perfect",
        category: "Pitch",
        description: "A rapid-fire pitch event focused on clarity, confidence, and idea impact.",
        date: "Consortium '26",
        logo: null,
        link: "https://forms.gle/kyAMkdXzezwa5dFi6",
    },
];

export default function Events() {
    return (
        <section id="events" className="py-32 bg-background relative px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center uppercase tracking-tight">
                    Flagship <span className="text-conso-red">Events</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <a
                            key={index}
                            href={event.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-conso-red/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-conso-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-black/50 backdrop-blur-md uppercase tracking-wider group-hover:border-conso-red/50 transition-colors">
                                        {event.category}
                                    </span>
                                    <ArrowUpRight className="text-white/40 group-hover:text-conso-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <div className="flex items-center gap-4 mb-3">
                                    {event.logo ? (
                                        <div className="relative h-10 w-20 shrink-0">
                                            <Image
                                                src={event.logo}
                                                alt={`${event.title} logo`}
                                                fill
                                                className="object-contain"
                                                sizes="80px"
                                            />
                                        </div>
                                    ) : null}
                                    <h3 className="text-2xl font-bold group-hover:text-conso-red transition-colors">
                                        {event.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {event.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-mono text-white/40 group-hover:text-white/80 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-conso-red" />
                                    {event.date}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

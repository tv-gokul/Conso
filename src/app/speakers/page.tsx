import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const speakers = [
    {
        name: "Dr. Kiran Bedi",
        role: "24th Lt. Governor",
        org: "Puducherry",
        image: "/kiran.webp",
    },
    {
        name: "Vikas Aggarwal",
        role: "Cofounder & Angel Investor",
        org: "FWC & Ola",
        image: "/vikas.webp",
    },
    {
        name: "Pranav Koshal",
        role: "Associate",
        org: "Kalaari Capital",
        image: "/pranav.webp",
    },
    {
        name: "Rajeev Suri",
        role: "Managing Partner",
        org: "Orios Venture Partners",
        image: "/rajeev.webp",
    },
    {
        name: "Vishwajeet Sinha",
        role: "Chief Marketing Officer",
        org: "Meesho",
    },
    {
        name: "Adityan Kayalakal",
        role: "Senior Director",
        org: "Byju's",
    },
    {
        name: "Sanket Narkar",
        role: "Chief Marketing Officer",
        org: "PhysicsWallah",
    },
    {
        name: "Tridha Choudhury",
        role: "Actress",
        image: "/tridha.webp",
    },
    {
        name: "Jimmy Mistry",
        role: "Chairman & MD",
        org: "Della Group",
    },
    {
        name: "Lt. Gen Satish Dua",
        role: "Corps Commander",
        org: "Surgical Strike, URI",
    },
    {
        name: "Simon Taufel",
        role: "Former Cricket Umpire",
        org: "International Cricket Council",
        image: "/simon.webp",
    },
    {
        name: "Aman Dhattarwal",
        role: "Founder of Apni Kaksha & Apna College",
        org: "YouTube, 7M+ subscribers",
        image: "/aman.webp",
    },
    {
        name: "Anil Swarup",
        role: "Former IAS Officer",
        org: "Former Lit. Sec of India",
    },
    {
        name: "Pankhuri Gidwani",
        role: "Miss Grand India International",
        org: "2018",
        image: "/pankhuri.webp",
    },
    {
        name: "Divya Ganesh",
        role: "Partner",
        org: "McKinsey & Company",
    },
    {
        name: "Nandu Giriyapur",
        role: "Managing Director",
        org: "Deloitte Company",
        image: "/nandu.webp",
    },
    {
        name: "Sharad Somani",
        role: "Executive Director",
        org: "KPMG, Singapore",
        image: "/sharad.webp",
    },
    {
        name: "Shirish Andhare",
        role: "Director & Head of Product",
        org: "Twitter",
    },
    {
        name: "Ravi Batulla",
        role: "Head Merchant Acquiring Solutions",
        org: "Wimbo",
    },
    {
        name: "Jatin Sapru",
        role: "Television Presenter",
        org: "Star Sports",
    },
    {
        name: "Santosh Panpaliya",
        role: "Senior Vice President & Head HR",
        org: "Global Delivery at Infosys",
    },
    {
        name: "Karan Shah",
        role: "Founder & CEO",
        org: "IIDE - The Digital School",
    },
    {
        name: "Harsh Goela",
        role: "Co-Founder",
        org: "Goela School of Finance LLP",
    },
    {
        name: "Satish Krishnan",
        role: "Former MD & Head",
        org: "Standard Chartered Bank",
    },
    {
        name: "Nitin Bawankule",
        role: "Director and Head",
        org: "Digital Native Business, AWS India",
    },
    {
        name: "Somdutta Singh",
        role: "Founder & CEO",
        org: "Assiduus Global",
    },
    {
        name: "Ashwani Lohani",
        role: "Chief Executive Officer",
        org: "GMR Group",
        image: "/ashwani.webp",
    },
    {
        name: "Sohrab Sitaram",
        role: "Co-Founder & Director",
        org: "Keventers",
        image: "/sohrab.webp",
    },
    {
        name: "Anurag Batra",
        role: "Chairman & Editor in Chief",
        org: "BW Businessworld",
    },
];

function getInitials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");
}

function SpeakerCard({ name, role, org, image }: { name: string; role?: string; org?: string; image?: string }) {
    return (
        <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 via-black/80 to-black/90 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_0%,rgba(255,46,46,0.25),transparent_45%)]" />
            <div className="relative">
                <div className="h-24 bg-conso-red" />
                <div className="-mt-14 flex flex-col items-center px-6">
                    <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-black/90 shadow-[0_16px_40px_rgba(0,0,0,0.55)] bg-white/5 flex items-center justify-center text-white/80 text-xl font-bold">
                        {image ? (
                            <Image
                                src={image}
                                alt={name}
                                width={112}
                                height={112}
                                className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                            />
                        ) : (
                            <span>{getInitials(name)}</span>
                        )}
                    </div>
                    <div className="mt-5 text-center">
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{name}</h3>
                        {role ? (
                            <p className="text-xs md:text-sm font-mono text-white/60 mt-2">{role}</p>
                        ) : null}
                        {org ? (
                            <p className="text-xs md:text-sm font-mono text-white/40 mt-1">{org}</p>
                        ) : null}
                    </div>
                </div>
                <div className="px-6 pb-8" />
            </div>
        </div>
    );
}

export default function SpeakersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-conso-red selection:text-white">
            <Navbar />

            <div className="pt-32 pb-24 px-6 container mx-auto">
                <div className="relative text-center mb-20">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-conso-red/20 blur-2xl" />
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                        Previous <span className="text-conso-red">Speakers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Icons and innovators who have shared the Consortium stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                    {speakers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.name}
                            name={speaker.name}
                            role={speaker.role}
                            org={speaker.org}
                            image={speaker.image}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}

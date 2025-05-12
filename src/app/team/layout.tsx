import Navbar from "@/components/layout/navbar"

export const metadata = {
    title: "Team",
    description: "Team",
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
    return <>{
        <div className="relative min-h-screen  ">
            <Navbar bg="bg-foreground" bgOnScrolled="bg-foreground" />
            {children}
        </div>
    }</>
}
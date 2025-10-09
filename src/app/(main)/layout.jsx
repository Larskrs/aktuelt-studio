import Navigation from "./_components/navigation";

export default function Layout ({children}) {
    return (
        <div className="text-white bg-black min-h-screen">
            <Navigation />
            <main className="flex flex-col min-h-screen">
                {children}
            </main>
        </div>
    );
}
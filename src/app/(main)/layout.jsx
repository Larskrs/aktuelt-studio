import Navigation from "@/components/layout/PrimaryNavigation/nav";

export default function Layout ({children}) {


    return <div>
        <Navigation />
        <main>
            {children}
        </main>
            
    </div>
}
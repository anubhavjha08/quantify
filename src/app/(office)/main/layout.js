import Header from "@/components/dashboard/Header";


export default function RootLayout({ children }) {
    return (
        <div className="flex">

            <div className="bg-slate-900 text-slate-50 min-h-screen w-56 text-center">
                Sidebar
            </div>

            <main className="w-full bg-slate-100 min-h-screen">
                <Header />
                {children}</main>
        </div>
    );
}
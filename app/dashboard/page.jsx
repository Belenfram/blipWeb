import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserInfo from "@/components/UserInfo";

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <UserInfo />
            </main>
            <Footer />
        </div>
    );
}
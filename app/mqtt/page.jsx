import Footer from "@/components/Footer";
import MqttClient from "@/components/MqttClient";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
        <div>
            <Navbar />
            <main>
                <MqttClient />
            </main>
            <Footer />
        </div>
  );
};

export default HomePage;
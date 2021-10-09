import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div style={{ minHeight: "85vh" }}>
      <HeroSection />
    </div>
  );
};

export default Home;

import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import HeroSection from '../components/HeroSection';
import Eq from '../components/Eq';
import CardSection from '../components/CardSection';
import FeatureSection from '../components/FeatureSection';
import familiarAnimationData from '../../public/ghost/ghost1.json'; // Update the path as needed
import Lottie from 'lottie-react';// Your custom scroll list component
// import '../styles/home.module.css';
import InfiniteScrollList from '../components/InfiniteScrollList';

// import Eq from '../components/Eq';
// import Scroll from '../components/Scroll';
const contentItems = [
  { id: 1, content: "It's not as easy as 1-2-3." },
  { id: 2, content: 'Old habits are hard to break.' },
  { id: 3, content: "You and your motivation don't have a long-term relationship." },
  { id: 4, content: "Books just don't offer practical solutions." },
  // Add more content items as needed
];

export default function Home() {
  return (
    <div className="bg-[#F8EDE3] min-h-screen"> {/* Set the background color and minimum height to fill the screen */}
      <Header />
      <Head>
        <title>Your App Name</title>
        <meta name="description" content="Master your life by mastering emotions with Your App Name." />
      </Head>

      <HeroSection />
      <Eq />
      {/* <Intro /> */}
      {/* <Scroll /> */}
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-wrap">
          {/* Include Lottie animation next to the title */}
          <div className="w-32 h-32"> {/* Adjust width and height as needed */}
            <Lottie animationData={familiarAnimationData} />
          </div>
          <h1 className="text-5xl text-center my-12 ml-4">Does this sound familiar...</h1>
          <div className="w-32 h-32"> {/* Adjust width and height as needed */}
            <Lottie animationData={familiarAnimationData} />
          </div>
        </div>
        <CardSection />
      </div>
      <FeatureSection />
      <InfiniteScrollList />

    </div>
  )
}
import { Tagline } from './components/Tagline'; //import Tagline

// home page component
export default function Home() {
  return (  //returns jsx
    <main className="min-h-screen flex items-center justify-center"> {/*main content*/}
      <div className="max-w-xl space-y-4"> {/*general box container*/}
        <h1 className="text-3xl font-bold"> {/*main heading tag for page*/}
          UGC Campaign Tracker
        </h1>
        <p className="text-gray-600">
          Track your UGC campaigns across TikTok, Instagram, and YouTube. Log performance,
          estimate revenue, and understand which platforms and campaigns make you the most money.
        </p>
        <Tagline /> {/*components must start with capital letter*/}
      </div>
    </main>
  );
}
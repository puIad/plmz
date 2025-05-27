import { ReactNode, useEffect, useState } from 'react';

interface VideoLoaderProps {
  children: ReactNode;
}

export default function VideoLoader({ children }: VideoLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Match your video duration
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="w-[100%] aspect-video">
          <video
            src="/polymaze animation.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

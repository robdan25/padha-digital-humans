import { useState, useRef } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const PhaeInAction = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 opacity-0 animate-fade-in-up">
          See <span className="text-primary glow-text">Phae</span> in action
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-12 opacity-0 animate-fade-in-up delay-100">
          Watch how digital humans come to life with PADHA
        </p>

        {/* Video Card */}
        <div className="relative opacity-0 animate-scale-in delay-200">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-aqua/30 via-purple/20 to-aqua/30 rounded-2xl blur-xl animate-glow-pulse" />

          {/* Video container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-card neon-border group cursor-pointer">
            {/* Placeholder Image */}
            {!isPlaying && (
              <img
                src={`${import.meta.env.BASE_URL}RealPhae.jpeg`}
                alt="Phae Preview"
                className="absolute inset-0 w-full h-full object-cover"
                onLoad={() => setPosterLoaded(true)}
              />
            )}

            {/* Video element */}
            <video
              ref={videoRef}
              playsInline
              className={`w-full h-full object-cover ${!isPlaying ? 'opacity-0' : 'opacity-100'}`}
              onClick={togglePlay}
              onTouchEnd={togglePlay}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={`${import.meta.env.BASE_URL}PHAEearly.mp4`} type="video/mp4" />
            </video>

            {/* Play button overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] transition-all group-hover:bg-black/40"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-aqua to-purple flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(0,255,255,0.7)]">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>
            )}

            {/* Volume control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-aqua/20 transition-all z-10"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Volume2 className="w-5 h-5 text-aqua" />
              )}
            </button>

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default PhaeInAction;

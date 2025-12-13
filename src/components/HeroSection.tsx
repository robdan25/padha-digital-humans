import heroAvatar from "@/assets/hero-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Coming Soon Label */}
        <div className="flex justify-center mb-6 opacity-0 animate-fade-in-down">
          <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-aqua tracking-wider uppercase glow-text-subtle">
            Coming Soon
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-center font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 opacity-0 animate-fade-in-up delay-100">
          <span className="text-foreground">Meet </span>
          <span className="text-primary glow-text">Phae</span>
          <span className="text-foreground"> — Your First</span>
          <br />
          <span className="gradient-text">PADHA Digital Human Avatar</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-200">
          An interactive, face-to-face AI experience powered by PADHA — the on-chain fuel 
          that energizes digital humans.
        </p>

        {/* Video/Image Container */}
        <div className="relative rounded-3xl overflow-hidden opacity-0 animate-scale-in delay-300">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-aqua/30 via-purple/20 to-aqua/30 rounded-3xl blur-xl animate-glow-pulse" />
          
          {/* Video wrapper */}
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-card neon-border">
            {/* Video element - hidden until you upload your VEO3 clip */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
              id="hero-video"
              onCanPlay={(e) => {
                const video = e.currentTarget;
                video.style.opacity = '1';
                const image = document.getElementById('hero-image');
                if (image) image.style.opacity = '0';
              }}
            >
              {/* Replace src when you upload your VEO3 video */}
              <source src="/placeholder-video.mp4" type="video/mp4" />
            </video>
            
            {/* Hero image fallback */}
            <img
              id="hero-image"
              src={`${import.meta.env.BASE_URL}PHAE_land.png`}
              alt="Phae - PADHA Digital Human Avatar with futuristic aqua and purple holographic effects"
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={(e) => {
                console.error('Image failed to load from:', (e.currentTarget as HTMLImageElement).src);
              }}
              onLoad={(e) => {
                console.log('Image loaded successfully from:', (e.currentTarget as HTMLImageElement).src);
              }}
            />
            
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Play button hint */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
              <span>Interactive Demo Soon</span>
            </div>
          </div>
        </div>

        {/* Caption under video */}
        <p className="text-center text-muted-foreground mt-8 text-base md:text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
          After BaseScan verification and internal checks, Phae will be able to <span className="text-primary glow-text-subtle">see you</span>,
          <span className="text-primary glow-text-subtle"> hear you</span>, and
          <span className="text-primary glow-text-subtle"> talk with you</span> in short real-time sessions —
          all powered by tiny PADHA micro-burns.
        </p>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;

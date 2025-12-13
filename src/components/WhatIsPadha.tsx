import { Flame, Eye, Link, MessageSquare, Zap } from "lucide-react";

const WhatIsPadha = () => {
  const features = [
    { icon: Flame, text: "Micro-burn every interaction", color: "text-orange-400" },
    { icon: Eye, text: "Real-time avatar vision + awareness", color: "text-aqua" },
    { icon: Link, text: "100% on-chain verified sessions", color: "text-purple" },
    { icon: MessageSquare, text: "Seamless AI conversations", color: "text-aqua" },
    { icon: Zap, text: "Powered by Phaeton AI", color: "text-yellow-400" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-aqua/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              <span className="gradient-text">PADHA</span>: Fuel for Digital Human Avatars
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              PADHA is the utility token designed to power the next generation of digital human avatars.
              Once live sessions begin, every minute of interaction will burn a tiny amount of PADHA — paying for compute,
              upgrades, and transparency on-chain.
            </p>

            {/* Feature list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center border border-border">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9&chain=base"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-8 py-4 rounded-xl font-medium overflow-hidden hover-glow"
            >
              <div className="absolute inset-0 border-2 border-aqua/50 rounded-xl group-hover:border-aqua transition-colors" />
              <div className="absolute inset-0 bg-aqua/0 group-hover:bg-aqua/10 transition-colors rounded-xl" />
              <span className="relative text-aqua group-hover:text-aqua-glow transition-colors font-semibold">
                Trade PADHA on Uniswap (Base)
              </span>
            </a>
          </div>

          {/* Right Column - Highlight Card */}
          <div className="opacity-0 animate-fade-in-up delay-300">
            <div className="relative">
              {/* Card glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-aqua/20 via-purple/10 to-aqua/20 rounded-3xl blur-2xl" />
              
              <div className="relative glass-card rounded-3xl p-8 md:p-10 neon-border overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-aqua/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple/10 to-transparent rounded-tr-full" />
                
                {/* Quote marks */}
                <div className="text-6xl text-aqua/20 font-serif leading-none mb-4">"</div>
                
                <p className="text-foreground text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                  PADHA is the <span className="text-primary glow-text-subtle">'gas'</span> for talking to digital humans — 
                  like ETH, but built for <span className="text-purple">AI</span>.
                </p>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <img
                      src={`${import.meta.env.BASE_URL}Phaemas.png`}
                      alt="Phaeton AI Logo"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-foreground font-medium">Phaeton AI</p>
                      <p className="text-muted-foreground text-sm">Infrastructure Provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPadha;

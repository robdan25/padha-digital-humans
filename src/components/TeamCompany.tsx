import { ExternalLink } from "lucide-react";

const TeamCompany = () => {
  return (
    <section id="team-company" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 opacity-0 animate-fade-in-up">
          Team & Company
        </h2>

        <div className="opacity-0 animate-fade-in-up delay-100">
          {/* Founder Info */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Robert Danville & Pierre Morenzie – Co-Founders, PADHA Coin & Phaeton AI
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Robert Danville and Pierre Morenzie lead the PADHA Coin project and the broader Phaeton AI ecosystem, combining product vision, AI engineering, and smart-contract expertise to build practical AI tools and digital human avatars.
            </p>

            {/* Verification & Profiles */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Verification & profiles:</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/robert-danville-3971b3336/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-aqua hover:text-aqua/80 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Company:</span> Phaeton AI Inc – registered in Canada
                  <br />
                  <a
                    href="https://www.canadacompanyregistry.com/company?utm_source=phaeton-ai-inc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-aqua hover:text-aqua/80 transition-colors mt-1"
                  >
                    <span>Public record</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Sites */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Official sites:</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://PADHACoin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-aqua hover:text-aqua/80 transition-colors"
                  >
                    <span>PADHACoin.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://phaetonai.com/padha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-aqua hover:text-aqua/80 transition-colors"
                  >
                    <span>PhaetonAI.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default TeamCompany;

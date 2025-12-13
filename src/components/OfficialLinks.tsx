const OfficialLinks = () => {
  const contractAddress = "0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9";

  return (
    <section id="official-links" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-fade-in-up">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              7. Official Links & Community
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Website:</strong>{' '}
                <a
                  href="https://PADHACoin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors"
                >
                  PADHACoin.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">Ecosystem:</strong>{' '}
                <a
                  href="https://phaetonai.com/padha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors"
                >
                  PhaetonAI.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">Token info JSON (for wallets & DEXs):</strong>{' '}
                <a
                  href="https://padhacoin.com/padha-tokenlist.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors break-all"
                >
                  https://padhacoin.com/padha-tokenlist.json
                </a>
              </li>
              <li>
                <strong className="text-foreground">Explorer:</strong>{' '}
                <a
                  href={`https://basescan.org/token/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors"
                >
                  BaseScan
                </a>
                {' — contract '}
                <code className="px-2 py-1 rounded bg-muted/50 text-primary text-xs font-mono">
                  {contractAddress}
                </code>
              </li>
              <li>
                <strong className="text-foreground">DEX analytics:</strong>{' '}
                <a
                  href="https://www.dextools.io/app/en/base/pair-explorer/0x48138310efb5545c5d9a44ef370137705cd7f76d31b9fe3d509c059641911185?t=1765493439853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors"
                >
                  DEXTools (Base)
                </a>
                {', plus other Base-compatible analytics as they index PADHA.'}
              </li>
              <li>
                <strong className="text-foreground">Social:</strong>{' '}
                <a
                  href="https://x.com/PADHACoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors"
                >
                  @PADHACoin on Twitter/X
                </a>
                {' and our '}
                <a
                  href="https://discord.gg/YOUR_INVITE_CODE_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua hover:text-aqua/80 underline transition-colors"
                >
                  Discord community
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default OfficialLinks;

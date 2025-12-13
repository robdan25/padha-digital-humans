import { useState } from "react";
import { Copy, Check } from "lucide-react";

const TokenDetails = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9";
  const baseScanUrl = `https://basescan.org/token/${contractAddress}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = contractAddress;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section id="token-details" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 opacity-0 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
            Core token info
          </h2>

          {/* Token Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">Name:</span>
              <strong className="text-foreground">PADHA Coin</strong>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">Symbol:</span>
              <strong className="text-foreground">PADHA</strong>
            </div>
            <div className="flex items-center gap-2 flex-wrap md:col-span-2">
              <span className="text-muted-foreground">Network:</span>
              <strong className="text-foreground">Base (Ethereum L2) — Chain ID 8453</strong>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">Standard:</span>
              <strong className="text-foreground">ERC-20</strong>
            </div>

            {/* Contract Address Row */}
            <div className="flex items-center gap-2 flex-wrap md:col-span-2">
              <span className="text-muted-foreground">Contract address:</span>
              <code className="px-2 py-1 rounded bg-muted/50 text-primary text-sm font-mono break-all">
                {contractAddress}
              </code>
              <button
                onClick={handleCopy}
                className={`ml-2 px-3 py-1 border rounded-lg font-semibold transition-all ${
                  copied
                    ? 'border-aqua bg-aqua/10 text-aqua shadow-[0_0_0_2px_rgba(34,211,238,0.25)]'
                    : 'border-muted-foreground/15 hover:border-aqua/50 hover:bg-aqua/5'
                }`}
                aria-label="Copy contract address"
              >
                {copied ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">Decimals:</span>
              <strong className="text-foreground">18</strong>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">Total supply:</span>
              <strong className="text-foreground">1,000,000,000 PADHA (fixed)</strong>
            </div>

            {/* External Links Row */}
            <div className="flex items-center gap-2 flex-wrap md:col-span-2">
              <span className="text-muted-foreground">External links:</span>
              <a
                href={baseScanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua hover:text-aqua/80 underline font-semibold transition-colors"
                title="Open on BaseScan"
              >
                View on BaseScan
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://www.dextools.io/app/en/base/pair-explorer/0x48138310efb5545c5d9a44ef370137705cd7f76d31b9fe3d509c059641911185?t=1765493439853"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua hover:text-aqua/80 underline font-semibold transition-colors"
                title="Open on DEXTools"
              >
                View on DEXTools
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href={`https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=${contractAddress}&chain=base`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua hover:text-aqua/80 underline font-semibold transition-colors"
                title="Trade PADHA on Uniswap (Base)"
              >
                Trade on Uniswap (Base)
              </a>
            </div>

            {/* Token List JSON Link */}
            <div className="flex items-center gap-2 flex-wrap md:col-span-2">
              <span className="text-muted-foreground">Token list JSON:</span>
              <a
                href="https://padhacoin.com/padha-tokenlist.json"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua hover:text-aqua/80 underline font-semibold transition-colors"
                title="Token list JSON for wallets and DEXs"
              >
                https://padhacoin.com/padha-tokenlist.json
              </a>
            </div>
          </div>

          {/* Utility Section */}
          <h3 className="font-heading font-bold text-2xl text-foreground mb-4 mt-8">
            Utility (what PADHA is for)
          </h3>
          <ul className="space-y-2 text-muted-foreground ml-5 list-disc">
            <li>
              Designed to power face-to-face AI conversations with digital humans like <strong className="text-foreground">#Phae</strong>.
            </li>
            <li>
              Small amounts of PADHA will be <strong className="text-foreground">consumed</strong> to pay for AI compute, storage, and infrastructure once live sessions begin.
            </li>
            <li>
              Future use: longer sessions, premium avatar features, and developer tools.
            </li>
          </ul>

          {/* Notes Section */}
          <div className="mt-8 pt-6 border-t border-muted-foreground/10">
            <p className="font-semibold text-foreground mb-2">Notes</p>
            <ul className="space-y-2 text-muted-foreground ml-5 list-disc text-sm">
              <li>No ICO/IEO conducted; token launched on Base.</li>
              <li>Always verify the contract address from this page before interacting.</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer - Outside the box */}
        <p className="text-sm text-muted-foreground/70 text-center max-w-2xl mx-auto leading-relaxed mt-8">
          PADHA is built as a utility token, not a promise of profits. Nothing on this site is financial or investment advice.
          Always do your own research before interacting with any token.
        </p>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default TokenDetails;

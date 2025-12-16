import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Copy, Check, ArrowLeft } from "lucide-react";

const DocsPage = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
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
    <>
      <Helmet>
        <title>PADHA Coin Docs — Token Info & Verification (Base)</title>
        <meta name="description" content="Official PADHA Coin (PADHA) docs: Base network token info, contract verification steps, utility, and official links." />
        <link rel="canonical" href="https://padhacoin.com/early/docs/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PADHA Coin Docs — Token Info & Verification (Base)" />
        <meta property="og:description" content="Official PADHA Coin (PADHA) docs: Base network token info, contract verification steps, utility, and official links." />
        <meta property="og:url" content="https://padhacoin.com/early/docs/" />
        <meta property="og:image" content="https://padhacoin.com/og/padha-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PADHACoin" />
        <meta name="twitter:title" content="PADHA Coin Docs — Token Info & Verification (Base)" />
        <meta name="twitter:description" content="Official PADHA Coin (PADHA) docs: Base network token info, contract verification steps, utility, and official links." />
        <meta name="twitter:image" content="https://padhacoin.com/og/padha-og.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Background effects */}
        <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--aqua) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--aqua) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 py-4">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}Master1024BlueR.png`}
                  alt="PADHA Logo"
                  className="w-10 h-10 rounded-xl transition-all duration-300 group-hover:shadow-glow-intense"
                />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                <span className="text-foreground">PADHA</span>
              </span>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-aqua transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="relative z-10 pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-center font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Docs & Technical Overview
            </h1>

            <p className="text-muted-foreground text-lg mb-12 text-center">
              This page summarizes the key technical and economic properties of PADHA Coin on Base.
              It is meant to help explorers, integrators, and users verify they are interacting with the correct contract.
            </p>

            <div className="space-y-8">
              {/* 1. Summary */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  1. Summary
                </h2>
                <p className="text-muted-foreground mb-4">
                  PADHA Coin (<strong className="text-foreground">PADHA</strong>) is a Base-native ERC-20 utility token
                  intended to meter and pay for real usage of digital human avatar sessions in the Phaeton AI ecosystem
                  (starting with Phae). PADHA is designed for usage (compute, storage, infrastructure), not as an investment promise.
                </p>
              </div>

              {/* 2. Core Token Info */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  2. Core Token Info
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Name:</strong> PADHA Coin</li>
                  <li><strong className="text-foreground">Symbol:</strong> PADHA</li>
                  <li><strong className="text-foreground">Network:</strong> Base (Ethereum L2)</li>
                  <li><strong className="text-foreground">Chain ID:</strong> 8453</li>
                  <li><strong className="text-foreground">Standard:</strong> ERC-20</li>
                  <li className="flex items-center gap-2 flex-wrap">
                    <strong className="text-foreground">Contract:</strong>
                    <code className="px-2 py-1 rounded bg-muted/50 text-primary text-sm font-mono break-all">
                      {contractAddress}
                    </code>
                    <button
                      onClick={handleCopy}
                      className={`px-3 py-1 border rounded-lg font-semibold transition-all text-sm ${
                        copied
                          ? 'border-aqua bg-aqua/10 text-aqua shadow-[0_0_0_2px_rgba(34,211,238,0.25)]'
                          : 'border-muted-foreground/15 hover:border-aqua/50 hover:bg-aqua/5 text-muted-foreground'
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
                  </li>
                  <li><strong className="text-foreground">Decimals:</strong> 18</li>
                  <li><strong className="text-foreground">Total supply:</strong> 1,000,000,000 PADHA (fixed)</li>
                </ul>
              </div>

              {/* 3. Launch & Distribution */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  3. Launch & Distribution
                </h2>
                <p className="text-muted-foreground mb-4">
                  State clearly:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-4">
                  <li><strong className="text-foreground">No ICO/IEO conducted</strong></li>
                  <li><strong className="text-foreground">No seed/private sale conducted</strong></li>
                  <li><strong className="text-foreground">Launch method:</strong> Permissionless deployment on Base; initial liquidity supplied by deployer</li>
                  <li><strong className="text-foreground">Primary market:</strong> Uniswap v3 PADHA/ETH pool on Base</li>
                  <li><strong className="text-foreground">Price discovery is market-driven</strong> via liquidity pools</li>
                </ul>
              </div>

              {/* 4. Utility */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  4. Utility
                </h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-4">
                  <li>
                    <strong className="text-foreground">Session metering</strong> for digital human avatar interactions
                    (compute, storage, bandwidth)
                  </li>
                  <li>
                    <strong className="text-foreground">Premium features</strong> (future): longer sessions, premium avatar features, developer tools
                  </li>
                  <li>
                    <strong className="text-foreground">On-chain telemetry</strong> (future): usage analytics via micro-burn accounting
                  </li>
                </ul>
              </div>

              {/* 5. How to Verify the Contract */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  5. How to Verify the Contract
                </h2>
                <p className="text-muted-foreground mb-4">Numbered checklist:</p>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside ml-4">
                  <li>
                    <strong className="text-foreground">Verify the official contract address</strong> from{' '}
                    <a href="https://padhacoin.com/early/" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      PADHACoin.com
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Check token details on BaseScan</strong> (name/symbol/decimals/supply) at{' '}
                    <a href={`https://basescan.org/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      BaseScan
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Review verified source code</strong> for no minting / no blacklist / no seizure
                  </li>
                  <li>
                    <strong className="text-foreground">Confirm token list JSON entry</strong> (chainId 8453, decimals 18, icon URLs) at{' '}
                    <a href="https://padhacoin.com/padha-tokenlist.json" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline break-all">
                      https://padhacoin.com/padha-tokenlist.json
                    </a>
                  </li>
                </ol>
              </div>

              {/* 6. Security & Risk Overview */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  6. Security & Risk Overview
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Verified source code on BaseScan</strong> (code tab)
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">SolidityScan QuickScan score:</strong> 91.1/100, 0 Critical/High
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Note: Automated scans are not a full audit. The contract source code is publicly verifiable on BaseScan
                  for independent review. Always do your own research before interacting with any smart contract.
                </p>
              </div>

              {/* 7. Official Links */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  7. Official Links
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Website:</strong>{' '}
                    <a href="https://padhacoin.com/early/" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      https://padhacoin.com/early/
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Ecosystem:</strong>{' '}
                    <a href="https://phaetonai.com/padha" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      https://phaetonai.com/padha
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Token list JSON:</strong>{' '}
                    <a href="https://padhacoin.com/padha-tokenlist.json" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline break-all">
                      https://padhacoin.com/padha-tokenlist.json
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">BaseScan token page:</strong>{' '}
                    <a href={`https://basescan.org/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline break-all">
                      https://basescan.org/token/{contractAddress}
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">DEXTools (pair explorer):</strong>{' '}
                    <a href="https://www.dextools.io/app/en/base/pair-explorer/0x48138310efb5545c5d9a44ef370137705cd7f76d31b9fe3d509c059641911185" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline break-all">
                      DEXTools Base Pair
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Uniswap (Base) swap:</strong>{' '}
                    <a href={`https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=${contractAddress}&chain=base`} target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      Uniswap Swap
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">X:</strong>{' '}
                    <a href="https://x.com/PADHACoin" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      https://x.com/PADHACoin
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Discord:</strong>{' '}
                    <a href="https://padhacoin.com/discord" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      https://padhacoin.com/discord
                    </a>
                    {' (redirects to '}
                    <a href="https://discord.gg/8M9DqXcq" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      discord.gg/8M9DqXcq
                    </a>
                    {')'}
                  </li>
                  <li>
                    <strong className="text-foreground">GitHub:</strong>{' '}
                    <a href="https://github.com/robdan25/padha-digital-humans" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                      https://github.com/robdan25/padha-digital-humans
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Contact:</strong>{' '}
                    <a href="mailto:join@padhacoin.com" className="text-aqua hover:text-aqua/80 underline">
                      join@padhacoin.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Background gradient orbs */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </>
  );
};

export default DocsPage;

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const Docs = () => {
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
    <section id="docs" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 opacity-0 animate-fade-in-up">
          Docs & Technical Overview
        </h2>

        <p className="text-muted-foreground text-lg mb-12 text-center opacity-0 animate-fade-in-up delay-100">
          This page summarizes the key technical and economic properties of PADHA Coin on Base. It is meant to help explorers, integrators, and users verify they are interacting with the correct contract.
        </p>

        <div className="space-y-8 opacity-0 animate-fade-in-up delay-200">
          {/* Summary */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              1. Summary
            </h3>
            <p className="text-muted-foreground mb-4">
              PADHA Coin (<strong className="text-foreground">PADHA</strong>) is a Base-native ERC-20 utility token used inside the Phaeton AI ecosystem
              to power digital human avatars such as <strong className="text-foreground">Phae</strong>, our first digital human. Instead of being marketed primarily as a trading
              asset, PADHA is designed to meter and pay for real usage: AI compute, storage, and infrastructure backing
              avatar conversations.
            </p>
            <p className="text-muted-foreground">
              Right now, visitors can see a pre-recorded Phae demo video on PADHACoin.com. After BaseScan verification and internal checks, the next step is to open short, real-time sessions where Phae can see and hear users in the browser, with PADHA designed to meter usage over time.
            </p>
          </div>

          {/* Contract & Network */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              2. Contract & Network
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Standard:</strong> ERC-20</li>
              <li><strong className="text-foreground">Network:</strong> Base (Ethereum L2)</li>
              <li><strong className="text-foreground">Chain ID:</strong> 8453</li>
              <li className="flex items-center gap-2 flex-wrap">
                <strong className="text-foreground">Contract:</strong>{' '}
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
            <p className="text-muted-foreground text-sm">
              The contract source code is verified on BaseScan. Always verify the contract address from this site (PADHACoin.com) before interacting.
            </p>
          </div>

          {/* Launch & Distribution */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              3. Launch & Distribution
            </h3>
            <p className="text-muted-foreground mb-4">
              PADHA Coin did <strong className="text-foreground">not</strong> launch via an ICO, IEO, seed round, or private sale. No public token sale
              was conducted.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Launch method:</strong> Permissionless deployment on Base, followed by initial liquidity supplied by the deployer.</li>
              <li><strong className="text-foreground">Primary market:</strong> Uniswap v3 PADHA/ETH pool on Base.</li>
              <li><strong className="text-foreground">Fundraising:</strong> No funds were raised via ICO/IEO/private sale using PADHA.</li>
              <li><strong className="text-foreground">Team allocation:</strong> Any treasury or team holdings are funded from the deployer's own liquidity and not from an ICO.</li>
            </ul>
            <p className="text-muted-foreground">
              As a result, PADHA's initial price and ongoing price discovery are set entirely by the open market through
              liquidity pools and secondary trading.
            </p>
          </div>

          {/* Utility & Use Cases */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              4. Utility & Use Cases
            </h3>
            <p className="text-muted-foreground mb-4">Within the Phaeton AI ecosystem, PADHA is intended to be used for:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
              <li><strong className="text-foreground">Session metering:</strong> Paying for compute, storage, and bandwidth during avatar sessions.</li>
              <li><strong className="text-foreground">Premium features:</strong> Unlocking longer or higher-resolution avatar sessions, priority routing, and advanced interaction modes.</li>
              <li><strong className="text-foreground">Developer tools:</strong> Accessing future SDK / API features that require on-chain consumption of PADHA.</li>
              <li><strong className="text-foreground">On-chain telemetry:</strong> Using micro-burns to record that a conversation took place, enabling transparent usage analytics.</li>
            </ul>
            <p className="text-muted-foreground">
              These utilities are focused on real usage of digital human avatars, not on speculative token mechanics.
              PADHA is designed as "fuel" for AI interactions rather than as a promise of profit.
            </p>
          </div>

          {/* Integrations & Tooling */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              5. Integrations & Tooling
            </h3>
            <p className="text-muted-foreground mb-4">
              The core contract is a standard ERC-20 on Base, which makes it compatible with common Web3 tooling,
              including wallets, explorers, and DEX interfaces.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong className="text-foreground">Explorer:</strong> View the token on BaseScan using the contract above.</li>
              <li><strong className="text-foreground">DEX analytics:</strong> PADHA trading activity may be visible on third-party tools such as DEXTools and others that index the Base network.</li>
              <li><strong className="text-foreground">Wallets:</strong> PADHA can be added to any EVM-compatible wallet by pasting the contract address.</li>
            </ul>
          </div>

          {/* How to verify PADHA Coin yourself */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              How to verify the PADHA Coin contract yourself
            </h3>

            {/* 1. Confirm official contract */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">1. Confirm the official contract address</h4>
            <p className="text-muted-foreground mb-2">
              PADHA Coin is deployed on Base (Ethereum L2), chain ID 8453.
            </p>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Official contract:</strong>{' '}
              <code className="px-2 py-1 rounded bg-muted/50 text-primary text-sm font-mono">
                {contractAddress}
              </code>
            </p>
            <p className="text-muted-foreground mb-4">
              Always copy this address from our official sites:{' '}
              <a href="https://PADHACoin.com" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                PADHACoin.com
              </a>
              {' or '}
              <a href="https://phaetonai.com/padha" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                PhaetonAI.com
              </a>.
            </p>

            {/* 2. Check on BaseScan */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">2. Check the token on BaseScan</h4>
            <p className="text-muted-foreground mb-2">
              Open the{' '}
              <a href={`https://basescan.org/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                contract on BaseScan
              </a>
              {' and confirm:'}
            </p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside ml-4 mb-2">
              <li><strong className="text-foreground">Name:</strong> PADHA Coin</li>
              <li><strong className="text-foreground">Symbol:</strong> PADHA</li>
              <li><strong className="text-foreground">Decimals:</strong> 18</li>
              <li><strong className="text-foreground">Total supply:</strong> 1,000,000,000 PADHA (fixed)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Use the "Read Contract" and "Code" tabs to see the verified source code and standard ERC-20 functions.
            </p>

            {/* 3. Review source code */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">3. Review the verified source code</h4>
            <p className="text-muted-foreground mb-2">
              In the Code tab on BaseScan, confirm the contract is based on standard, audited building blocks (for example OpenZeppelin ERC-20).
            </p>
            <p className="text-muted-foreground mb-2">There should be <strong className="text-foreground">no</strong> custom functions that:</p>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside ml-4 mb-2">
              <li>arbitrarily mint unlimited new tokens,</li>
              <li>block trading or blacklist arbitrary wallets, or</li>
              <li>seize balances from users.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You can also paste the verified code into an auditor or AI assistant for a human-readable explanation.
            </p>

            {/* 4. Validate token list */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">4. Validate the official token list entry</h4>
            <p className="text-muted-foreground mb-2">
              PADHA is published in a public token list JSON at:
            </p>
            <p className="text-muted-foreground mb-2">
              <a href="https://padhacoin.com/padha-tokenlist.json" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline break-all">
                https://padhacoin.com/padha-tokenlist.json
              </a>
            </p>
            <p className="text-muted-foreground mb-4">
              That file includes the contract address, chain ID 8453, symbol, decimals, and icon URLs. Many DEX UIs and wallets can use this list to avoid impostor contracts.
            </p>

            {/* 5. Cross-check official sites */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">5. Cross-check with our official sites and socials</h4>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Official sites:</strong>{' '}
              <a href="https://PADHACoin.com" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                PADHACoin.com
              </a>
              {' and '}
              <a href="https://phaetonai.com/padha" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                PhaetonAI.com
              </a>.
            </p>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Official handle:</strong>{' '}
              <a href="https://x.com/PADHACoin" target="_blank" rel="noopener noreferrer" className="text-aqua hover:text-aqua/80 underline">
                @PADHACoin
              </a>
              {' on social platforms.'}
            </p>
            <p className="text-muted-foreground mb-4">
              We will always publish any contract changes, upgrades, or important notices on these channels first.
            </p>

            {/* 6. Understand what PADHA is */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">6. Understand what PADHA is (and isn't)</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-4 mb-4">
              <li>PADHA is designed as a utility token for future usage within the Phaeton AI ecosystem (digital human avatars, AI agents, and related infrastructure).</li>
              <li>There was no ICO, IEO, private sale, or seed round for PADHA. Initial liquidity was supplied permissionlessly by the deployer.</li>
              <li>PADHA is not marketed as an investment or security. Price, liquidity, and future adoption are entirely determined by the open market.</li>
            </ul>

            {/* 7. Recognize automated warnings */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">7. Recognize automated risk warnings</h4>
            <p className="text-muted-foreground mb-2">
              Some tools (e.g., DEX aggregators or security scanners) may display generic warnings or labels for very new tokens with low liquidity or short trading history.
            </p>
            <p className="text-muted-foreground mb-4">
              These warnings are often generated automatically and do not necessarily mean the contract contains malicious code. They should be treated as prompts to do your own checking using the steps above.
            </p>

            {/* 8. No guarantees */}
            <h4 className="font-semibold text-foreground text-lg mb-3 mt-6">8. No guarantees – do your own research</h4>
            <p className="text-muted-foreground mb-2">
              On-chain activity involves risk. Smart contracts can have bugs, markets can be illiquid, and prices can be volatile.
            </p>
            <p className="text-muted-foreground mb-2">
              Nothing on this site or in our materials is financial, investment, or legal advice.
            </p>
            <p className="text-muted-foreground">
              Always verify the contract address, review the source code, and only interact with PADHA if you understand and accept the technical and market risks.
            </p>
          </div>

          {/* Security & Risk Overview */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              6. Security & Risk Overview
            </h3>
            <p className="text-muted-foreground mb-4">
              PADHA Coin is implemented as a standard ERC-20 smart contract on Base (Ethereum L2), deployed at:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-6">
              <li>
                <strong className="text-foreground">Contract:</strong>{' '}
                <code className="px-2 py-1 rounded bg-muted/50 text-primary text-sm font-mono">
                  {contractAddress}
                </code>
              </li>
              <li><strong className="text-foreground">Network:</strong> Base – Chain ID 8453</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              To provide transparency for builders and users, the verified contract has been checked with automated security tools.
            </p>

            {/* Automated scan */}
            <h4 className="font-semibold text-foreground text-lg mb-3">Automated scan (SolidityScan QuickScan)</h4>
            <p className="text-muted-foreground mb-4">
              The PADHA contract was recently scanned using <strong className="text-foreground">SolidityScan QuickScan</strong> on Base mainnet.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
              <li><strong className="text-foreground">Overall security score:</strong> 91.1 / 100 – <em>rated "Great"</em></li>
              <li><strong className="text-foreground">Lines of code analyzed:</strong> ~3,700</li>
            </ul>
            <p className="text-muted-foreground mb-3">Summary of findings reported by the tool:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-6">
              <li><strong className="text-foreground">Critical issues:</strong> 0</li>
              <li><strong className="text-foreground">High-severity issues:</strong> 0</li>
              <li><strong className="text-foreground">Medium-severity findings:</strong> 43</li>
              <li><strong className="text-foreground">Low-severity findings:</strong> 48</li>
              <li><strong className="text-foreground">Informational findings:</strong> 951</li>
              <li><strong className="text-foreground">Gas-efficiency suggestions:</strong> 257</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Most findings are informational or gas-related suggestions and do not represent directly exploitable vulnerabilities.
              The absence of Critical and High-severity issues in this automated scan is a positive signal, but{' '}
              <strong className="text-foreground">it is not the same as a formal, human-reviewed security audit.</strong>
            </p>

            {/* How to interpret */}
            <h4 className="font-semibold text-foreground text-lg mb-3">How to interpret this</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-6">
              <li>
                Automated tools are useful for catching common mistakes, but they{' '}
                <strong className="text-foreground">cannot guarantee</strong> that a contract is free of bugs or economic risks.
              </li>
              <li>
                The PADHA contract source code is <strong className="text-foreground">verified on BaseScan</strong>,
                and anyone can review it directly before interacting.
              </li>
              <li>
                Future versions of PADHA-related contracts may undergo additional review or third-party audits as the ecosystem grows.
              </li>
            </ul>

            {/* Risk notice */}
            <h4 className="font-semibold text-foreground text-lg mb-3">Important risk notice</h4>
            <p className="text-muted-foreground mb-4">
              PADHA is designed as a <strong className="text-foreground">utility token</strong> to support AI infrastructure
              and digital human avatars. Nothing on this site, or in related materials, should be interpreted as financial,
              investment, or legal advice.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
              <li>There is <strong className="text-foreground">no guarantee</strong> of price, liquidity, or future utility.</li>
              <li>
                Token usage, integrations, and tooling may evolve over time as the Phaeton AI ecosystem is developed.
              </li>
              <li>
                Users and integrators should perform their own research, assess their own risk tolerance,
                and comply with applicable laws and regulations in their jurisdiction.
              </li>
            </ul>
            <p className="text-muted-foreground">
              By interacting with PADHA or any related smart contracts, you acknowledge that you understand and accept
              the technical and market risks involved.
            </p>
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Docs;

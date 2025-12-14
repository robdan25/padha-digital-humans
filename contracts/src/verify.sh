#!/bin/bash
echo "🔍 PADHA Source Verification"
echo "=============================="
echo ""
echo "✅ Line count: $(wc -l < PADHA.sol) lines"
echo "✅ File size: $(ls -lh PADHA.sol | awk '{print $5}')"
echo "✅ SHA256: $(sha256sum PADHA.sol | awk '{print $1}')"
echo "✅ Libraries: $(grep '^// File:' PADHA.sol | wc -l) files"
echo "✅ Contracts: $(grep -E '^(contract|abstract contract|library|interface) ' PADHA.sol | wc -l) definitions"
echo ""
echo "Checking for truncation markers..."
TRUNC=$(grep -i 'truncated\|continue for\|message length' PADHA.sol | wc -l)
if [ "$TRUNC" -eq 0 ]; then
    echo "✅ No truncation found - source is complete!"
else
    echo "❌ Warning: Found $TRUNC truncation markers"
    exit 1
fi
echo ""
echo "=============================="
echo "✅ VERIFICATION PASSED"
echo "Source is complete and ready"

#!/bin/sh
cmd="$*"
tmpdoc="/tmp/tapi.out"
curl -s http://ubpc.local:3601/api/v1/exec \
     -X POST \
     -d "{\"command\":\"$cmd\"}" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer 5IMp1NfgG5Xs7EslpvYcB53kJT3Zx1mfABSNtcaIsLI" > $tmpdoc

cat $tmpdoc | jq -r '.stdout' | sed $'s/\\n/\\\n/g'
cat $tmpdoc | jq -r '.stderr' | sed $'s/\\n/\\\n/g'


#!/bin/bash

content=$(curl -s https://raw.githubusercontent.com/blustakcy5gmailcom/Evolve-Calculator-Bedrock-Edition/main/main.ts)

temp_file="./temp_evolvecalculator.ts"

echo "$content" > "$temp_file"

npx ts-node --esm "$temp_file"

rm "$temp_file"

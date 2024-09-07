#!/bin/bash

curl -s https://raw.githubusercontent.com/blustakcy5gmailcom/Evolve-Calculator-Bedrock-Edition/main/main.ts > temp_evolvecalculator.ts

npx ts-node ./temp_evolvecalculator.ts
rm ./temp_evolvecalculator.ts

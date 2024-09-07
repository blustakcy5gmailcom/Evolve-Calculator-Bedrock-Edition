#!/bin/bash

url="https://raw.githubusercontent.com/blustakcy5gmailcom/Evolve-Calculator-Bedrock-Edition/main/main.ts"

content=$(curl -s "$url")

if [[ "$content" == "<!DOCTYPE html>"* ]]; then
    echo "Error: The URL returned HTML content instead of a TypeScript file."
    echo "Please check if the file exists at the specified URL:"
    echo "$url"
    exit 1
fi

if [ -z "$content" ]; then
    echo "Error: No content was retrieved from the URL."
    echo "Please check your internet connection and the URL:"
    echo "$url"
    exit 1
fi

temp_file=$(mktemp)

echo "$content" > "$temp_file"

# Check if ts-node is installed
if ! command -v ts-node &> /dev/null; then
    echo "Error: ts-node is not installed or not in the PATH."
    echo "Please install ts-node using: npm install -g ts-node"
    rm "$temp_file"
    exit 1
fi

ts-node "$temp_file"

# Remove the temporary file
rm "$temp_file"

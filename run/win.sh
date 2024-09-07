@echo off

for /f "delims=" %%i in ('curl -s https://raw.githubusercontent.com/blustakcy5gmailcom/Evolve-Calculator-Bedrock-Edition/main/main.ts') do set "content=%%i"

set "temp_file=%temp%\temp_script_evolvecalculator.ts"

echo %content% > "%temp_file%"

ts-node "%temp_file%"

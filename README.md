# Translation API
---
## Shields

### Build
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/keithoseis/translate/Docker%20Image%20CI?style=for-the-badge)
### Issues
![GitHub issues](https://img.shields.io/github/issues-raw/keithoseis/translate?style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/keithoseis/translate?style=for-the-badge)
### Downloads

![GitHub all releases](https://img.shields.io/github/downloads/keithoseis/translate/total?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/keithoseis/translate?style=for-the-badge)
---
## How it works
git clone https://github.com/keithOseis/Translate
### Build Docker Container
docker create volume node
docker build -t translate .
docker run -d -p 3000:3000 -v node:/code translate
### Test API
powershell
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/json")

$body = "{
`n  `"word`": `"Ask a question`",
`n  `"source`": `"en`",
`n  `"target`": `"cs`"
`n}"

$response = Invoke-RestMethod 'http://localhost:3000/api/translate' -Method 'GET' -Headers $headers -Body $body
$response | ConvertTo-Json

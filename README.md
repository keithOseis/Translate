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
### License

![GitHub](https://img.shields.io/github/license/keithoseis/translate?style=for-the-badge)
---
## How it works
git clone https://github.com/keithOseis/Translate
### Docker 
#### Build Docker Container
- docker create volume node
- docker build -t translate .
- docker run -d -p 3000:3000 -v node:/code translate

### Envoirment Variables
#### Required for SwaggerUI
- APIURI 
- APIPORT
#### Required for JWT
- TOKEN_EXPIRE // in seconds
- ACCESS_TOKEN_SECRET
- TOKEN_SECRET_PASSWORD
- TOKEN_SECRET_USER

### Test API
  REST: GET

  Headers:
   - content-type: application/json  

  Values:
   - "word": "Have a nice day"
   - "source": "en"
   - "target": "pl"



### Planned feature
 - Swagger UI
   - Version 1.0.5
 - Disable Console Output
 - JWT
   - Version 1.0.4



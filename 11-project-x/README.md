# Project Naam
In dit project ben ik verder gegaan op project VIII. De producten werden lokaal opgeslagen in een *state* en worden daarnaast nu dus ook gePOST naar een demo API van de cursus.

Ik heb geleerd hoe je de fetch API kunt gebruiken voor andere HTTP methodes dan alleen GET. Waaronder POST, PUT & DELETE.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/11-project-x/build/

Belangrijke punten:
- De Fetch API heeft een tweede parameter: een object met de method, headers en body. 

---
## De opdracht
#### Post Online Store Admin
The goal of this project is to post the items added by the admin to the database by sending them using a fetch request to a demo API.

Here are the instructions for the demo API:
- Endpoint: https://api.learnjavascript.online/demo/react/admin/products
- Method: POST
- Data: a JSON object containing the name (string) and the description (string)
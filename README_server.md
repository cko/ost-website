

Ändern der Seite
=================
Um die Seite zu editieren sind folgende Schritte notwendig:
* Git Repository clonen
  `$git clone git@...:ost-website.git`
* Editieren der Dateien im Verzeichnis `site`. Die Dateien mit der Endung *.md Enthalten die Inhalte der Seite, die Datei `_layout.ejs` legt das Layout(Header, Menü, Footer, etc) fest. ejs ist eine Templatesprache für node.js, quasi HTML mit Platzhaltern. 
* Übertragen der Änderungen zum Server
  `$git add <dateiname>`   
  `$git commit -m " ... geändert"`   
  `$git push origin master`   
* Nach dem Pushen der Änderungen wird die Seite sofort neu generiert und deployed.


lokales ausprobieren der generierten Seite (optional)
=====================================================
* Eine halbwegs aktuelle Version (> 4.x) von node.js installieren (https://nodejs.org/en/)
* Harp installieren (npm ist in einer node.js installation enthalten):
  `$npm install -g harp`
* In das Verzeichnis `site` wechseln und `harp server` aufrufen


Hinzufügen weiterer Benutzer
============================
Um die Seite editieren zu können, ist es notwendig das ein SSH pubkey in gitolite hinterlegt ist. Deinen Key habe ich dort bereits hinterlegt, weitere Benutzer können wie folgt hinzugefügt werden:
Klonen des Admin Repositories:
`$git clone git@...:gitolite-admin.git`

Ablegen der SSH Keys im Verzeichnis `keydir` 
`$git add <dateiname>`   
`$git commit -m "Schlüssel von ... hinzugefügt"`   
`$git push origin master`   

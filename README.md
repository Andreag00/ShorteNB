# ShorteNB 

**Join the [Telegram group](https://t.me/ShorteNB)!**

A shortcut by @andreag00 on [Telegram](https://t.me/andreag00)/ag23900 on [Fibra Click](https://forum.fibra.click/u/ag23900)

Big thanks to [Abdel](https://github.com/ADeltaX) and [Simone](https://github.com/SimoneBortolin) for help with JavaScript, Marco for creating all the logos in the appropriate dimensions.

## Versione Italiana
Decodifica facilmente i dati dal CellID che si trova nel FieldTest di Apple (FTMInternal-4) mostrando anche dati sulla BTS a cui si è connessi presi da LTE Italy. **Supporta solo MNO italiani**

![Esempio di notifica generata da ShorteNB](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Example_Notification.png)

<<<<<<< HEAD
Lo shortcut va eseguito dopo aver copiato il CellID dal FieldTest e decodifica eNB, CID e banda (se disponibile) dal CellID. Oltre a decodificare questi dati, esce un prompt per aprire velocemente la mappa centrata sulla propria posizione o la pagina con le info sulla BTS su [LTE Italy](https://lteitaly.it) e salva i dati decodificati, georeferenziati, in una nota nell'app Note o in un file .txt su iCloud Drive.
=======
Lo shortcut va eseguito dopo aver copiato il CellID dal FieldTest e decodifica eNB, CID e banda (se disponibile) dal CellID. Oltre a decodificare questi dati, esce un prompt per aprire velocemente la pagina con le info sulla BTS o la mappa centrata sulla posizione dell'utente su [LTE Italy](https://lteitaly.it) e salva i dati decodificati, georeferenziati, in una nota nell'app Note o in un file .txt su iCloud Drive. Inoltre nella notifica vengono mostrati dei dati aggiuntivi: nome, bande 4G e 5G e info sui tipi di 5G attivi della BTS a cui l'utente è collegato.
>>>>>>> dev

L'ideale è usarlo in concomitanza con [questo shortcut](https://github.com/Andreag00/FTM-Opener), che apre il FieldTest **se aggiunto alla Home Screen**.

### Come importare in Shortcuts

#### Prerequisiti

**Perché ShorteNB funzioni è necessario installare [Scriptable](https://apps.apple.com/it/app/scriptable/id1405459188).**

Per importare lo shortcut è sufficiente scaricare e aprire il file .shortcut, oppure aprire il link iCloud presente nel file "link".

### Come effettuare il primo setup di ShorteNB

In concomitanza alla prima esecuzione dello shortcut, ShorteNB richiede l'impostazione di alcuni valori per funzionare correttamente.

Innanzitutto, ShorteNB chiede se Scriptable è stata installata, in quanto è un'app essenziale perché lo shortcut possa funzionare:

![Scriptable](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Scriptable.png)

I due prompt successivi richiedono l'inserimento di username e password del proprio account di LTE Italy per permettere di mostrare i dati aggiuntivi ottenuti dalle API di LTE Italy:

![Inserimento username](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Username.png)
![Inserimento password](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Password.png)

**DISCLAIMER: La sicurezza della propria password potrebbe essere compromessa in quanto viene salvata in chiaro all'interno dell'app Shortcuts. Le credenziali non lasceranno mai il dispositivo dell'utente, che si prende la responsabilità di mantenere sicure le proprie credenziali. Inoltre questo Shortcut non è in alcun modo affiliato a LTE Italy.**

Il prompt successivo permette di scegliere l'operatore della SIM principale dell'utente:

![Scelta operatore SIM principale](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/MNC1.png)

Il quinto prompt, molto similmente al precedente, permette di scegliere l'operatore della SIM secondaria dell'utente:

![Scelta operatore SIM secondaria](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/MNC2.png)

**WARNING:** Se l'utente sceglie iliad come operatore della SIM principale, l'operatore della SIM secondaria viene automaticamente impostato come WindTre, in modo che lo shortcut funzioni correttamente con il RAN Sharing su WindTre. 
**WARNING:** La combinazione di operatori Tim+WindTre non è supportata in quanto entrambi usano eNB a 6 cifre e lo shortcut non può distinguere tra i due operatori, questa incompatibilità si riflette sul menu della scelta dell'operatore della SIM secondaria, che non permette di effettuare questa scelta.

Il quinto, e ultimo, prompt permette di scegliere se e come l'utente vuole che i dati che ShorteNB processa vengano salvati:

![Scelta metodo di salvataggio](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/DB.png)

![Esempio di file generati nella cartella 'ShorteNB' su iCloud Drive](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/iCloud_Drive.png)

Dopo il primo setup, anche in caso di aggiornamento, non ci sarà bisogno di reinserire queste scelte, in quanto vengono salvate su iCloud Drive e non vengono più modificate dopo il primo setup. In caso si volessero cambiare queste scelte è necessario cancellare il file "settings.json" nella cartella di ShorteNB presente su iCloud Drive.

## English Version
Easily decode data out of the CellID found in Apple's FTMInternal-4 together with extra data gathered from LTE Italy'APIs. **Italian MNOs only**

![Example notification generated by ShorteNB](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Example_Notification.png)

<<<<<<< HEAD
Provided with the CellID as input from the clipboard, the shortcut decodes data out of it. It also makes it easy to open the map centered on the user's location or the BTS’s info page on [LTE Italy](https://lteitaly.it) and saves geotagged data to a note or to a .txt file to be uploaded on iCloud Drive.
=======
Provided with the CellID as input from the clipboard, the shortcut decodes data out of it showing it in an alert together with extra data gathered from [LTE Italy](https://lteitaly.it)'s APIs. It also makes it easy to open [LTE Italy](https://lteitaly.it)'s map or the BTS’s info page on [LTE Italy](https://lteitaly.it) and saves geotagged data to a note or to a .txt file to be uploaded on iCloud Drive.
>>>>>>> dev

Works great in conjunction with [this shortcut](https://github.com/Andreag00/FTM-Opener) that opens FTMInternal-4 when added to the Home Screen.

### How to import into Shortcuts

#### Prerequisites

**For ShorteNB to work, [Scriptable](https://apps.apple.com/it/app/scriptable/id1405459188?l=en) is required.**

To import the shortcut, simply download the .shortcut file or open the link in the "link" file.

### How to setup the shortcut

When executed for the very first time, the shortcut will prompt the user to input some data required for it to work properly.

First of all, ShorteNB will ask if Scriptable has been installed, as it's a required app for the shortcut to work at all:

![Scriptable](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Scriptable.png)

It will then ask to insert the user's LTE Italy username and password:

![Username prompt](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Username.png)
![Password prompt](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/Password.png)

**DISCLAIMER: The safety of the user's username and password may be compromised because they're saved unencrypted in the Shortcuts app. Credentials will never leave the user's device, the user is responsible for the safety of these credentials. This shortcut is not in any way affiliated with LTE Italy.**

The next prompt asks the user to choose their main SIM's operator:

![Main SIM prompt](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/MNC1.png)

The fifth prompt, similarly to the previous one, is used to choose the user's secondary SIM's operator:

![Secondary SIM prompt](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/MNC2.png)

**WARNING:** If iliad is chosen as the main SIM's operator, the shortcut will automatically set the secondary SIM's operator as WindTre to show correct info when the user is connected to WindTre's Radio Access Network via RAN sharing.
**WARNING:** As having Tim and WindTre as operators is not supported (because both user 6-number eNBs and there is no way to distinguish them), if either of them is chosen as the main SIM's operator, the prompt for the secondary SIM will not allow the user to choose the other one.

The sixth, and last, prompt is to choose if and how the user wants the decoded data to be saved:

![Data saving prompt](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/DB.png)

![Example of the contents of the 'ShorteNB' folder in iCloud Drive](https://raw.githubusercontent.com/Andreag00/ShorteNB/dev/README-Images/iCloud_Drive.png)
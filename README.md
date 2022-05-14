# ShorteNB 

A shortcut by @andreag00 on [Telegram](https://t.me/andreag00)/ag23900 on [Fibra Click](https://forum.fibra.click/u/ag23900)

## Versione Italiana
Decodifica facilmente i dati dal CellID che si trova nel FieldTest di Apple (FTMInternal-4). **Supporta solo MNO italiani**

Lo shortcut va eseguito dopo aver copiato il CellID dal FieldTest e decodifica eNB, CID e banda (se disponibile) dal CellID. Oltre a decodificare questi dati, esce un prompt per aprire velocemente la pagina con le info sulla BTS su [LTE Italy](https://lteitaly.it) e salva i dati decodificati, georeferenziati, in una nota nell'app Note o in un file .txt su iCloud Drive.

L'ideale è usarlo in concomitanza con [questo shortcut](https://github.com/Andreag00/FTM-Opener), che apre il FieldTest **se aggiunto alla Home Screen**.

### Come importare in Shortcuts

Per importare lo shortcut è sufficiente scaricare e aprire il file .shortcut, oppure aprire il link iCloud presente nel file "link".

### Come effettuare il primo setup di ShorteNB

In concomitanza all'import dello shortcut, ShorteNB richiede l'impostazione di tre valori per funzionare correttamente.

La prima domanda richiede l'inserimento dell'MNC (Mobile Network Code) dell'operatore della prima SIM. I valori attesi sono:
- 1 per TIM (Telecom Italia);
- 10 per Vodafone;
- 50 per iliad
- 88 per WindTre.

![Screenshot della prima domanda per il setup](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/Setup_1.png)

La seconda domanda, invece, richiede l'inserimento dell'MNC dell'operatore di un eventuale seconda SIM. I valori attesi sono:
- 0 per nessuna seconda SIM;
- 1 per TIM (Telecom Italia);
- 10 per Vodafone;
- 50 per iliad;
- 88 per WindTre.

![Screenshot della seconda domanda per il setup](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/Setup_2.png)

**WARNING:** Perché lo shortcut funzioni correttamente con il RAN Sharing di iliad su WindTre, è necessario impostare o MNC1 o MNC2 come se si avesse una SIM WindTre (88), altrimenti non verranno mostrate le bande a cui si è connessi quando si finisce sulla rete WindTre.
**WARNING:** La combinazione di operatori Tim+WindTre non è supportata in quanto entrambi usano eNB a 6 cifre e lo shortcut non può distinguere tra i due operatori.

La terza e ultima domanda è necessaria per decidere se e come l'utente vuole che i dati georeferenziati vengano salvati. I valori attesi sono:
- 0 per non salvare alcun dato;
- 1 per salvare i dati in una nota nell'app Note;
- 2 per salvare i dati in un file .txt in una nuova cartella su iCloud Drive (consigliato).

![Screenshot della terza domanda per il setup](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/Setup_3.png)

![Esempio di file generati con l'opzione 2](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/iCloud_Drive.png)

*NOTA:* Se si sceglie di salvare i dati georeferenziati nell'app Note (opzione 1), al primo utilizzo ShorteNB deve essere eseguito due volte, in quanto la prima esecuzione creerà la nota, mentre la seconda inizierà a scrivere i dati. Questo passaggio non è necessario se si sceglie l'opzione 2.

## English Version
Easily decode data out of the CellID found in Apple's FTMInternal-4. **Italian MNOs only**

Provided with the CellID as input from the clipboard, the shortcut decodes data out of it. It also makes it easy to open the BTS’s info page on [LTE Italy](https://lteitaly.it) and saves geotagged data to a note or to a .txt file to be uploaded on iCloud Drive.

Works great in conjunction with [this shortcut](https://github.com/Andreag00/FTM-Opener) that opens FTMInternal-4 when added to the Home Screen.

### How to import into Shortcuts

To import the shortcut, simply download the .shortcut file or open the link in the "link" file.

### How to setup the shortcut

When imported, the shortcut will prompt you to input some data required for it to work properly.

It will first prompt to insert the MNC (Mobile Network Code) associated to your first SIM. Expected values are:
- 1 for TIM (Telecom Italia);
- 10 for Vodafone;
- 50 for iliad
- 88 for WindTre.

![Screenshot of the first setup question](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/Setup_1.png)

The second prompt will ask the user to insert the MNC of the associated to an eventual second SIM. Expected values are:
- 0 for no second SIM;
- 1 for TIM (Telecom Italia);
- 10 for Vodafone;
- 50 for iliad;
- 88 for WindTre.

![Screenshot of the second setup question](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/Setup_2.png)

**WARNING:** For the shortcut to work with Iliad’s RAN Sharing on WindTre, either MNC1 or MNC2 needs to be set as 88, and the other as 50. Otherwise the shortcut will not show what band you’re connected to when you’re on WindTre’s Radio Access Network.
**WARNING:** The MNC combo 1+88 is not supported, as both Tim and WindTre use 6-characters eNBs and the Shortcut would not be able to distinguish which operator an eNB belongs to.

The third, and last prompt, is needed to decide if and how the user wants the decoded data to be saved. Expected values are: 
- 0 for no data to be saved;
- 1 for data to be saved in a note in the Notes app;
- 2 for data to be saved in a .txt file in a newly created folder in iCloud Drive (recommended).

![Screenshot of the third setup question](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/Setup_3.png)

![Screenshot of example files created if option 2 is chosen](https://raw.githubusercontent.comAndreag00/ShorteNB/README-Images/iCloud_Drive.png)

*NOTE:* If the user wants data to be saved in the Notes app (option 1), the shortcuts needs to be run twice for the first time, as the first run will create the note and the second one will start writing data. 
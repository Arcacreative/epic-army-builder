# Epic Army Builder — app installabile (v1.6)

Questa cartella è l'app completa. Messa online una volta, chiunque apre il link può installarla
sul telefono o sul computer, senza Play Store o App Store, e usarla anche senza internet.

## Cosa c'è dentro

| File | A cosa serve |
|---|---|
| `index.html` | L'app (grafica, regole e tutti i 20 pacchetti di liste) |
| `manifest.webmanifest` | Nome, colori e icone dell'app installata |
| `sw.js` | Fa funzionare l'app offline e scarica gli aggiornamenti |
| `icons/` | Icone per Android, iPhone e computer |

## Metterla online gratis con GitHub Pages (circa 5 minuti, meglio da computer)

1. Crea un account gratuito su https://github.com (se non ce l'hai).
2. In alto a destra tocca **+ → New repository**. Nome: `epic-army-builder`, lascia **Public**, poi **Create repository**.
3. Nella pagina del repository tocca **uploading an existing file**.
4. Trascina **il contenuto** di questa cartella (i file e la cartella `icons`, non la cartella esterna), poi **Commit changes**.
5. Vai su **Settings → Pages**. In *Branch* scegli `main` e `/ (root)`, poi **Save**.
6. Dopo 1–2 minuti l'app è su: `https://IL-TUO-NOME.github.io/epic-army-builder/`

Quel link è quello da mandare agli amici.

## Installarla

- **Android (Chrome)**: apri il link → nella Home dell'app tocca **Installa l'app** (oppure menu ⋮ → *Installa app*).
- **iPhone / iPad (Safari)**: apri il link → **Condividi** → **Aggiungi alla schermata Home**.
- **Computer (Chrome / Edge)**: icona di installazione nella barra dell'indirizzo, oppure il pulsante *Installa l'app* in Home.

## Le liste di ogni persona

- Ognuno ha **le sue liste sul suo dispositivo**: non serve un account e nessuno vede le liste degli altri.
- In **Le mie liste → Backup e condivisione**:
  - **Salva backup**: un file con tutte le tue liste (e i pacchetti importati). Conservalo su Drive, mail o computer.
  - **Apri file**: ripristina un backup o aggiunge una lista ricevuta. Aggiunge soltanto, non cancella niente e salta i doppioni.
- Nel builder di ogni lista, **Condividi lista** manda il file della lista (WhatsApp, mail, Drive…): chi lo riceve lo apre da *Apri file*.
- La scritta in rosso ricorda se non fai un backup da più di 30 giorni.

Attenzione: se si cancellano i dati del browser o si disinstalla l'app, le liste non salvate in un backup si perdono.

## Aggiornare l'app

Ricarica su GitHub il nuovo `index.html` e il nuovo `sw.js` (*Add file → Upload files*, stessi nomi).
Chi ha l'app installata vede in basso **Nuova versione pronta → Aggiorna**. Le liste restano.

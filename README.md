# 🏎️ Capolavoro F1 2026 Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Platform](https://img.shields.io/badge/Unica-MIM-00529B?style=for-the-badge)

> **Progetto "Capolavoro" — Terzo Anno di Scuola Secondaria di Secondo Grado**  
> Un'esperienza web moderna, interattiva ed immersiva dedicata alla **Stagione 2026 di Formula 1**, realizzata con un design Dark/Racing e una forte attenzione alla UI/UX.

---

## 📌 Panoramica del Progetto

Il **Capolavoro F1 Website** è una piattaforma web completa progettata per offrire un viaggio a 360° nel mondo della Formula 1, proiettandosi verso il rivoluzionario regolamento tecnico e sportivo della **Stagione 2026**.

Il sito integra dati aggiornati, schede tecniche, layout dei tracciati, record storici ed elementi interattivi, combinando l'estetica ufficiale della F1 (typography, colori racing e linee aerodinamiche) con una struttura di codice pulita, responsiva e performante.

---

## 🚀 Mappa delle Pagine e Funzionalità

| Pagina | File | Descrizione |
| :--- | :--- | :--- |
| **🏠 Home** | `home.html` | Landing page con header animato, intro al progetto e panoramica generale. |
| **🏎️ Piloti & Team** | `scuderie.html` | Grid interattiva con le vetture 2026 (inclusi **Audi** e **Cadillac**) e i piloti ufficiali. |
| **📅 Calendario** | `calendario.html` | Elenco delle tappe del Mondiale con orari, location e dettagli del weekend di gara. |
| **📊 Classifiche** | `classifiche.html` | Tabelle dei punteggi Mondiali Piloti e Costruttori con aggiornamenti in tempo reale. |
| **🛣️ Circuiti** | `circuiti.html` | Schede tecniche dei tracciati con layout grafico in alta risoluzione e foto reali. |
| **🏆 Campioni** | `campioni.html` | Tabella stilizzata dei record storici della F1 (vittorie, pole position, pit stop, ecc.). |
| **🎮 Minigiochi** | `minigiochi.html` | Sezione ludica interattiva basata su JavaScript per testare i riflessi e la conoscenza F1. |

---

## 📂 Struttura del Progetto

```text
CapolavoroF1Website/
├── 📁 css/                         # Fogli di stile modulari
│   ├── calendario.css
│   ├── campioni.css
│   ├── circuiti.css
│   ├── classifiche.css
│   ├── font.css                    # Integrazione font custom F1/TAG Heuer
│   ├── home.css
│   ├── minigiochi.css
│   └── scuderie.css
│
├── 📁 Font/                        # Typography ufficiale & Custom
│   ├── Apax-TAG-Heuer-Medium.ttf
│   ├── Apax-TAG-Heuer-Regular.ttf
│   ├── Apax-TAG-Heuer-Superbold.ttf
│   ├── Formula1-Black.ttf
│   ├── Formula1-Regular.ttf
│   ├── Formula1-Wide_web_0.ttf
│   ├── KHInterferenceF1-Regular.ttf
│   ├── TitilliumWeb-Bold.ttf
│   ├── TitilliumWeb-Regular.ttf
│   └── TitilliumWeb-SemiBold.ttf
│
├── 📁 Img/                         # Assets grafici ad alta risoluzione
│   ├── 📁 F1 2026 Season Cars/     # Rendering auto 2026 (Ferrari, Audi, Red Bull...)
│   ├── 📁 F1 2026 Season Drivers/  # Trasparenze piloti griglia 2026
│   ├── 📁 F1 Race Tracks Layout/   # Tracciati vettoriali dei circuiti
│   └── 📁 F1 Race Tracks Photo/    # Foto panoramiche dei Gran Premi & UI Assets
│
├── 📁 js/                          # Script per dinamicità e minigiochi
├── 📄 calendario.html
├── 📄 campioni.html
├── 📄 circuiti.html
├── 📄 classifiche.html
├── 📄 home.html                    # Entry point del sito web
├── 📄 minigiochi.html
├── 📄 scuderie.html
└── 📄 README.md
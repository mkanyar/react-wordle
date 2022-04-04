# Ijambo

This is a clone project of the popular word guessing game we all know and love. Made using React, Typescript, and Tailwind.

This version is to be played with the Kirundi language.

[**Try out the app!**](https://ijambo.app/)

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```

Open [http://localhost](http://localhost) in browser.

#### Contributors

- [Lionel Kubwimana](https://twitter.com/lionelkubwimana)
- [Any-Arlène Niyubahwe](https://twitter.com/mugisha93)
- [Jonathan Nkurunziza](https://twitter.com/inganzamarumpu)
- [Max Brillant](https://twitter.com/max_brillant)
- [Jean Didier](https://twitter.com/jeandidier)
- [Ingabire Luc Noël](https://twitter.com/IngabireLucNoel)
- [Franck Nijimbere](https://twitter.com/nijfranck)
- [Olivier Mwamimwiza](https://twitter.com/OlivierMwami)
- [Nduwayezu Irénée](https://twitter.com/NduwayezuI)
- [Muco Rôlle Trésor](https://twitter.com/mucotreso)
- [Jean Thierry Havyarimana](https://twitter.com/jeantijo)
- [Isaac Nijimpaye](https://twitter.com/nijimpaye)
- [Landry Gakuba](https://twitter.com/GakubaLandry)
- [Miraiga](https://twitter.com/msmiraiga)
- [Mike Stephane K.](https://twitter.com/mike_stephane)

# Smart Parrainage

## Protection des données et respect de la vie privée des électeurs
Au Sénégal pour participer à l’élection présidentielle de 2019, les futurs candidats (coalition de partis, partie et indépendant) doivent chacun être parrainer par un minimum 0,8% d’électeur inscrit sur le fichier électoral.

Un électeur ne peut parrainer qu’un seul candidat, il devra remplir une fiche avec son prénom, nom, numéro d’électeur, lieu d’inscription, numéro identification CEDEAO et signature.

Comment protéger les données personnelles  des électeurs lors de la collecte et du traitement des informations fournies? Comment garantir la vie privée et les droits des électeurs conformément à la loi LOI n° 2008–12 du 25 janvier 2008 portant sur la protection des données à caractère personnel ?

Cet article vient apporter quelques éléments de réponse ou piste de réflexion à ces questions qui préoccupent le citoyen (électeur) Sénégalais.

# Le contexte du parrainage citoyen

## Un vote à bulletin secret, donc un parrainage anonyme

![](https://miro.medium.com/max/1024/1*53F6wnx9xwL6FqXbedwubw.png)

Le vote au Sénégal ce fait  **à bulletin secret,** le choix du votant à une élection ou à un référendum est anonyme, pour éviter toutes influences que ce soit par intimidation ou subornation. Le parrainage se doit aussi d’être anonyme.

## Un électeur ne peut parrainer qu’un candidat et un seul

![](https://miro.medium.com/max/1024/1*7395yAp8PhHaJYmeWu9RGQ.png)

Pour éviter les doublons, le sabotage et facilité la vérification il est primordial d’avoir une base de données centralisée, pour tous les candidats.

## Un parrainage citoyen dans le respect de la loi

![](https://miro.medium.com/max/1024/1*yRFCAfJ8I6qZC8eW_9Rsyw.png)

La  [LOI n° 2008–12 du 25 janvier 2008 portant sur la protection des données à caractère personnel](http://www.cdp.sn/sites/default/files/protection.pdf)  garantit à tous les Sénégalais des droits :

-   Droit à l’information
-   Droit d’accès
-   Droit d’opposition
-   Droit de rectification et suppression

Donc un smart parrainage ou un parrainage intelligent se doit d’être anonyme, centralisé et respecte la loi sur la protection des données personnelles. Ces différents points sont aujourd’hui une préoccupation d’ordre international. Vous avez tous attendu parler de RGPD (Règlement général sur la protection des données ou encore GDPR, de l’anglais General Data Protection Regulation). Mais aussi du scandale Facebook-Cambridge Analytica.

Le Smart parrainage est une nécessité pour éviter un autre scandale. Beaucoup d’experts mondiaux se sont déjà posé la question, mais nous constatons que sortir de nouvelles lois n’apporte pas encore de changements. Si on regarde du côté de la Technique nous avons différentes solutions qui répondent au cahier du smart parrainage . Nous allons nous pencher sur une de ces solutions, qui est la blockchain d’Ethereum.

Qu’est-ce que la blockchain ?

# Un Smart parrainage avec la blockchain d’Ethereum

## Qu’est-ce qu’Ethereum ?

Ethereum est un ordinateur mondial, qui est constitué de plusieurs milliers d’ordinateurs qui communiquent en permanence avec une même base de données, la  _blockchain_. Cet ordinateur est toujours allumé et très sécurisé.

![](https://miro.medium.com/max/4672/1*O26RGgVarvQbMtcpc8wkjw.png)

Smart Parrainage

Avec l’aide de téléphone portable ou votre ordinateur, vous pouvais vous connecter de manière anonyme sur la blockchain et faire votre parrainage électronique. Comment Ça marche ?

![](https://miro.medium.com/max/2448/1*y4FLSYouAKxal6rMzbFQ0A.png)

**Ethereum Wallet**:  [https://ethereum.org](https://ethereum.org/)

## Crée un compte anonyme

Que vous soyez un électeur, un candidat ou même vérificateur vous pouvais créé un compte anonyme avec les applications clients Ethereum disponible.

## Crée vos « Smart Contracts » ou contrats intelligents

Pour utiliser la blockchain, les candidats et électeurs utilisent des « Smart Contracts », qui sont en réalité des lignes de code informatique programmables, qui correspondraient à des macros comme dans un tableau Excel ou un document Word.

![](https://miro.medium.com/max/60/1*lPxfgR8NjH6rVgoJGd9aLQ.png?q=20)

![](https://miro.medium.com/max/2070/1*lPxfgR8NjH6rVgoJGd9aLQ.png)

Déploiement « Smart Contracts »

Lorsqu’un électeur souhaite parrainer un candidat, cet engagement est formalisé dans la blockchain Ethereum par la création de smart contrats.

## Le smart contrat candidat

Il permet au candidat d’annoncés sa candidature. Son déploiement sur la blockchain Ethereum lui confère une adresse unique pour son identification.

Code du smart contrat candidat

**pragma solidity ^0.4.18;****contract Candidat** **{**  
    _string public candidatNom;  
    string public CandidatType;_  
    **constructor** (_string _nom, string _type_) public **{**  
        candidatNom = _nom;  
        CandidatType = _type;  
    **}**  
**}**

![](https://miro.medium.com/max/60/1*bw8jZgCMRZX3JBbdNQ8JPg.png?q=20)

![](https://miro.medium.com/max/1085/1*bw8jZgCMRZX3JBbdNQ8JPg.png)

Déploiement du smart contrat candidat dans la blockchain

## Le smart contrat électeur

Il permet à un électeur, de se connecter à la blockchain avec ces données personnelles, son déploiement permet à l’électeur de parrain un candidat par un engagement avec l’adresse de son contrat de candidature.

![](https://miro.medium.com/max/60/1*I85Fp3ehi_ZSCLH8qLlNCw.png?q=20)

![](https://miro.medium.com/max/1102/1*I85Fp3ehi_ZSCLH8qLlNCw.png)

Parrainer un candidat

**contract Electeur is Proteger{**  
    ...  
    ...  
    ...**  
function parrainerCandidat**(_address _candidatAdress_) public siProprietaire **{**  
        **parrains**[_candidatAdress] =  parrain(**{**  
            _actif: true,  
            date: now_  
        **}**);  
    **}**  
**}**

## Le smart contrat protéger

Est un contrat qui protège les données personnelles de l’électeur en lui permettant d’exercer son droit de suppression de son contrat électeur.

**contract Proteger {**  
    address public proprietaire;  
    **constructor**() public **{**  
        proprietaire = msg.sender;  
    **}**  
    **modifier siProprietaire {**  
        require(  
            msg.sender == proprietaire,  
            "Seul le proprietaire peut appeler cette action."  
        );  
        _;  
    **}**  
    **function suppression**() public siProprietaire **{**  
        selfdestruct(proprietaire);  
    **}  
}**

## le langage Solidity permet d’envisager

Des smart contrats de contrôle plus complexes pour automatiser le travail de vérification des identités et signatures des parrains.

## Le « Smart Contracts » c’est pour vous

La blockchain d’Ethereum est une technologie Open source, qui a été lancé en août 2015, depuis cette date elle compte plus de 2.64k de smart contrats, ce nombre ne fait qu’augmenter ce qui confirme sa fiabilité et robustesse.

![](https://miro.medium.com/max/60/1*8nvBVhnlksu67OIUiAVUrw.png?q=20)

![](https://miro.medium.com/max/1275/1*8nvBVhnlksu67OIUiAVUrw.png)

Statistique: https://www.stateofthedapps.com/stats

La mise en place d’une telle solution ne prend pas beaucoup de temps et en plus on peut réduire les coûts d’exécution des smart contrats sur la blockchain d’Ethereum par l’utilisation de l’[IPFS](https://ipfs.io/)  (InterPlanetary File System).

## Plusieurs cas de figure

-   Tous les candidats peuvent utiliser une seule application superviser par La Direction Général des élections et le Conseil Constitutionnel peuvent superviser le travail
-   Chaque candidat ou groupe de candidat peut avoir la même application et crée un contrat de contrôle pour la Direction Général des élections, le Conseil Constitutionnel et même la Commission de protection des Données Personnelles (CDP)

## Contribuer

[Téléchargez le code ici, pour tester ou l’améliorer](https://github.com/genova/Smart-Parrainage)

# Conclusion

Proposer une solution de parrainage électronique c’est aussi à prendre en compte les réalités du citoyen Sénégalais pour lui permettre d’exercer leur devoir civique. Cette solution est ouverte accessible à tous. Les communautés technologiques du Sénégal, les entreprises ou même cadres de l’administration Sénégalaise peuvent se l’approprier facilement avec l’aide d’expert blockchain du Sénégal. J’invite encore une fois tous les Sénégalais à travailler main dans la main quelle que soit leur partie pour un Sénégal meilleur.

**Mamadou Diagne**  
Ambassadeur Open Knowledge Sénégal

> Article publié pour la première fois le 28 Août 2018 sur
> [dofbi.medium.com](https://dofbi.medium.com/smart-parrainage-9142a78de32b)

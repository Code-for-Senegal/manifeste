# L’Algo Démocratie au Sénégal
## Avertissement

Moi  **Mamadou Diagne**, déclare:

-   Ne pas être le concepteur du logiciel de vérification des parrainages
-   Ne pas être un consultant du Conseil Constitutionnel
-   Ne pas travailler ou collaborer avec aucun candidat à l’élection présidentielle du 24 février 2019

Cet article est une piste de réflexion, pour l’ouverture de l’algorithme de contrôle automatisé des fichiers électroniques des parrainages collectés sur la base des cartes d’identité CEDEAO utilisé par le Conseil Constitutionnel du Sénégal.

![](https://miro.medium.com/max/3200/1*kn2P18rhZK8IEw6WozKmwA.png)

Les cinq candidats en lice pour l’élection présidentielle du 24 février 2019

## Qu’est-ce qu’un algorithme ?

> Un algorithme est une suite finie et non ambiguë d’opérations ou d’instructions permettant de résoudre un problème ou d’obtenir un résultat […] — Définition extraite de  [wikipedia](https://fr.wikipedia.org/wiki/Algorithme).

**Pour quoi un algorithme ?  
**Pour obtenir de la « machine » qu’elle effectue le travail de contrôle des parrainages collectés par les candidats.

Que vous soyez utilisateurs, consommateurs de services comme les moteurs de recherche, les applications de streaming audio, les vidéos à la demande, ou encore les réseaux sociaux. L’algorithme nous concerne tous, après les étudiants du Sénégal, place aux candidats à l’élection présidentielle suite à la  [loi n° 2018–22 du 04 juillet 2018 portant révision du Code électoral](https://www.sec.gouv.sn/loi-n%C2%B0-2018-22-du-04-juillet-2018-portant-r%C3%A9vision-du-code-%C3%A9lectoral).

## Quelles sont les modalités d’exécution du parrainage, selon la loi ?

**ACTE 1  
**Parrainer, c’est porté, cautionner ou être d’accord sur la candidature (coalition de partis, parti ou indépendant).

**ACTE 2  
**Le parrain ne peut être que l’électeur qui s’inscrit et figure légalement et définitivement sur le fichier électoral.

**ACTE 3  
**Un électeur ne peut parrainer qu’un seul candidat. Il est formellement interdit de parrainer plus d’un candidat sous peine de punition prévue par la loi.

**ACTE 4  
**Au Sénégal, il y a le Parrainage citoyen qui est un mode de sélection et rationalisation démocratique et légale des candidats où une candidature est validée lorsqu’un nombre de citoyens (électeurs), donnant leur accord à cette candidature, est atteint.

**ACTE 5  
**Il est demandé à chaque candidat de fournir au minimum 0,8% et 1% au maximum du fichier électoral général. Par exemple, si le fichier électoral contient 6.500.000 électeurs, le candidat devra collecter : 6.500.000 X 0,008 = 52.000 électeurs au minimum (sans doublons) et au maximum 6.500.000 X 0,01 = 65.000 électeurs.

**ACTE 6  
**La collecte des parrains se fait au moins dans 7 régions. Et dans chaque région, choisir au minimum 2000 personnes électeurs qui veulent parrainer. Valable aussi dans la diaspora.

**ACTE 7  
**Il est interdit de choisir des parrains dans les casernes militaires ou paramilitaires ou dans les établissements sanitaires (hôpitaux).

**ACTE 8  
**La collecte des parrains : Chaque candidat désignera un coordonnateur national de collecte et des collecteurs départementaux et communaux.

**ACTE 9  
**L’administration (Direction générale des élections) remettra à chaque candidat les fiches de collecte en format papier et électronique (prénom, nom, numéro d’électeur, lieu d’inscription, numéro identification CEDEAO et signature). Le collecteur désigné sera responsable des falsifications ou irrégularités figurant sur la fiche.

**ACTE 14  
**Comme il est interdit de parrainer plus d’un candidat, en cas de doublons de 2 ou plusieurs fiches de collecte des candidats, sera valable la fiche du premier candidat qui a déposé au terme des 4 mois de collecte ou même moins, pourvu qu’il remplisse la condition requise (entre 0,8 et 1% du fichier électoral).

**ACTE 16  
**Les candidatures qui ne vont pas satisfaire aux conditions requises seront rejetées.

# Exemple d’écriture d’un Algorithme de contrôle

## Préparation des données nécessaires au parrainage

-   **Le Fichier électorale  
    **Est un fichier comportant tous les citoyens admis à voter. On peut y trouver des données à caractère personnel et les données électorales des citoyens.

![](https://miro.medium.com/max/60/1*wj4EHwLNZXr2kpx_Q91uYA.png?q=20)

![](https://miro.medium.com/max/954/1*wj4EHwLNZXr2kpx_Q91uYA.png)

Consultation de la liste électorale —  [https://elections.sec.gouv.sn/CARTE-CEDEAO/](https://elections.sec.gouv.sn/CARTE-CEDEAO/)

-   **La Fiche de collecte des parrainages de candidature  
    **Est dans sa version électronique un document Excel et comporte autant de fichiers que de régions ou représentations diplomatiques concernées. Voici un modèle, selon mon interprétation du journal officiel de la république du Sénégal sortie le 25 août 2018.

![](https://miro.medium.com/max/3346/1*h740o1Id8A5JZxbC3c1KYg.png)

Modèle version électronique de la fiche de collecte des parrainages de candidature

-   **La Date de dépôt  
    **Est la date et heure du dépôt de candidature au Conseil Constitutionnel par un candidat.

## Décomposition de l’algorithme de contrôle

Pour faciliter le travail de vérification des parrainages il est très important de décomposer les différentes tâches en sous-groupes. Après un rapide remue-méninges voici les groupes qui se dégagent.

-   **Charger la Fiche de collecte des parrainages de candidature en tenant compte de la date de dépôt.**
-   **Valider les parrainages enregistrer.**
-   **Valider les parrainages en double.**
-   **Valider le nombre de parrainages.**
-   **Valider le nombre de parrainages par régions.**
-   **Valider le candidat.**

## Traitement

Lors de cette étape nous commençons à écrire de l’algorithme en pseudo-code, le pseudo-code c’est en fait une façon particulière de présenter un algorithme, en reprenant les structures utilisées dans la plupart des langages de programmation, sauf qu’on ne tient pas compte de la syntaxe particulière des langages de programmation.

**ALGORITHME** chargerFicheParrainage  
_{Charger la fiche de collecte des parrainages}_Variable date-dépôt: Date ← date-Heur-Maintenant  
Variable fiche : chaînePARRAINAGES = connexion(base_de_données)**DÉBUT** _{préparation du traitement}_  
  afficher("Charger la fiche Excel du candidat:")  
  charger(fiche)  
  données = lire(fiche) {lecture du fichier excel}  
  candidat = données.obtenir['candidat']  
  région = données.obtenir['région']  
  délégué = données.obtenir['délégué']  
  NCE-délégué = données.obtenir['NCE-délégué']  
  collecteur = données.obtenir['collecteur']  
  NCE-collecteur = données.obtenir['NCE-collecteur']  
    
  **SI** candidat  
    **SI** région  
      **SI** délégué  
        **SI** NCE-délégué  
          **SI** collecteur  
            **SI** NCE-collecteur  
              **ALORS**  
                ligne-début = données.obtenir['début-parrain']  
                ligne-fin = données.obtenir['début-parrain']  
                **POUR** ligne-début ← 1 **À** ligne-fin **FAIRE**  
                  parrainage = données.obtenir['parrainage']  
                  PARRAINAGES.enregistrer(date-dépôt, candidat,  
                  région, délégué, NCE-délégué, collecteur,  
                  NCE-collecteur, parrainage)  
                **FIN POUR**  
              **SI NON**  
                afficher("Carte électeur collecteur pas trouver")  
            **FIN SI**  
            **SI NON**  
              afficher("Collecteur pas trouver")  
          **FIN SI**  
          **SI NON**  
            afficher("Carte électeur délégué pas trouver")  
        **FIN SI**  
        **SI NON**  
          afficher("Délégué pas trouver")  
      **FIN SI**  
      **SINON**  
        afficher("Région pas trouver")  
    **FIN SI**  
    **SINON**  
      afficher("Candidat pas trouver")  
  **FIN SI**  
**FIN**

**ALGORITHME** validerParrainagesEnregistrer  
_{Valider les parrainages enregistrer}_PARRAINAGES = connexion(base_de_données)  
FICHIER-ÉLECTORALE = connexion(base_de_données)**DÉBUT** _{préparation du traitement}_ parrainage-candidat = PARRAINAGES.rechercher('candidat')  
  **POUR** parrainage **DANS** parrainage-candidat **FAIRE**  
    **SI** FICHIER-ÉLECTORALE.rechercher(parrainage.NCI, parrainage.nom,  
                                     parrainage.prénom)  
      **ALORS**  
        parrainage.valider('OUI')  
      **SINON**  
        parrainage.valider('NON')  
    **FIN SI**  
  **FIN POUR**  
**FIN**

**ALGORITHME** validerParrainagesDouble  
_{_Valider les parrainages en double_}_PARRAINAGES = connexion(base_de_données)**DÉBUT** _{préparation du traitement}_ parrainage-candidat = PARRAINAGES.rechercher('candidat',  
                                                valider='OUI')  
  **POUR** parrainage **DANS** parrainage-candidat **FAIRE**  
    parrainages-double = parrainage.rechercher(parrainage.NCI)  
    **POUR** parrainage-double **DANS** parrainages-double  
      **SI** parrainage.date-dépôt < parrainage-double.date-dépôt  
        **ALORS**  
          parrainage.double('NON')  
        **SINON**  
          parrainage.double('oui')  
      **FIN SI  
    FIN POUR**  
  **FIN POUR**  
**FIN**

Ces quelques exemples illustrent le traitement pas à pas de l’algorithme de contrôle, qu’un programmeur pourra coder en n’importe quelle langue informatique pour obtenir le logiciel de contrôle des parrainages.

# Quels impacts sur notre démocratie ?

Beaucoup de questions se sont posés sur le logiciel qu’utilise le Conseil Constitutionnel :

-   Qui sont les concepteurs du dit logiciel ?
-   Comment fonctionne-t-il ?
-   Quel est son algorithme ?
-   Quand est-il du traitement de nos données personnels ?
-   Est qu’il est protégé contre les cybers attaques ?
-   Etc…

Toutes ces questions sont dues au manque de transparence du Conseil Constitutionnel.

## Boite noire

![](https://miro.medium.com/max/4194/1*gNUOM0Ma---0WiM96t1nPA.jpeg)

les entrées et les sorties sont représentées, mais ce qui fait le lien entre les deux est « inconnue ».

## Comment fonctionne l’algorithme du Conseil Constitutionnel ?

Nous n’avons pas eu de réponse du Conseil Constitutionnel, ni des sept (7) personnalités indépendantes issues de la société civile.

Sans transparence nous ne pouvons pas parler d’**Algo Démocratie au Sénégal**.

Donc l’algorithme du Conseil Constitutionnel est une entorse à la démocratie du Sénégal.

## Recommandation

L’ouverture de l’algorithme ou même la publication du code source du logiciel de contrôle n’est pas un problème en soi. En effet elle peut nous renseigne sur les méthodes de contrôle, sur l’application et le respect de la loi, sur le traitement de nos données personne et sur la sécuriser ou pas du logiciel.

Par contre, pour ce qui est des données personnes des citoyens qui sont dans les fichiers Excel. Il est important de « chiffrer ces fichiers » et de limiter leurs accès.

## Conclusion

Chère lectrice, cher lecteur, si comme moi vous êtes citoyen Sénégalais. Vous êtes aussi concerné du bien-être de notre démocratie. Donc quoi de plus naturel que de demander plus de transparence au Conseil Constitutionnel.

**Mamadou Diagne**  
Ambassadeur Open Knowledge Sénégal

> Article publié pour la première fois le 21 Janvier 2019 sur
> [dofbi.medium.com](https://dofbi.medium.com/algo-democratie-au-senegal-8292320bff40)

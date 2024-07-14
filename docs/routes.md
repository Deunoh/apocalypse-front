# Routes

# API endpoints 

### pinpoint 
| Endpoint                  | Méthode HTTP | Controller          |   Method     | Description                                             | Retour |  role     |
| ------------------------- | ------------ | --------------------|--------------|--------------------------------------------------------|---------|-----------|
| `/api/pinpoint`           | `GET`        |  PinpointController |    browse   | Récupération des pins                                     | 200    | visitor |
| `/api/pinpoint`           | `POST`       |  PinpointController |    create   | Ajout d'un pins : via un formulaire à l'aide d'un select  | 201    |  user   |  
| `/api/pinpoint/{id}`      | `DELETE`      |  PinpointController |    delete   | Supression d'un pins                                      | 204    |   admin | 

### article 
| Endpoint                  | Méthode HTTP | Controller          |   Method    | Description                                             | Retour |  role     |
| ------------------------- | ------------ | --------------------|-------------|--------------------------------------------------------|---------|-----------|
| `/api/article`            | `GET`        |  ArticleController  |    browse   |   Afficher la liste des articles                          | 200    | visitor |
| `/api/article/{id}`       | `GET`        |  ArticleController  |    read     |  Afficher un article en fonction de son id                | 200    | visitor  |
| `/api/article`            | `POST`       |  ArticleController  |    create   |  Créer un article                                         | 201    |    user  |
| `/api/article/{id}`       | `PUT`        |  ArticleController  |    edit     |  Modifier le status d'un article                         | 200    |    admin  |
| `/api/article/{id}`       | `DELETE`     |  ArticleController  |    delete   |  Suprime un article                                     | 204    |    admin  |
| `/api/article/categorie/{id}` | `GET`     |  ArticleController  |    browse   | Lite des artciles en fonction de leur categorie         | 200    |   visitor  |

### searchnotice 
| Endpoint                  | Méthode HTTP | Controller          |   Method     | Description                                             | Retour |  role     |
| ------------------------- | ------------ | --------------------|--------------|--------------------------------------------------------|---------|-----------|
| `/api/searchnotice`       | `GET`        |  SearchnoticeController  |    browse   |   Afficher la liste des avis de recherches             | 200    | visitor |
| `/api/searchnotice`       | `POST`       |  SearchnoticeController  |    create   |  Créer un avis de recherche                            | 201    | user|
| `/api/searchnotice/{id}`  | `PATCH`      |  SearchnoticeController  |    edit     |    Modification d'un avis de recherche                 | 200    | user |
| `/api/searchnotice/{id}`  | `DELETE`      |  SearchnoticeController  |    delete     |    Suprime un avis de recherche                      | 204    | admin |

### question/answer 
| Endpoint                  | Méthode HTTP | Controller          |   Method     | Description                                             | Retour |  role     |
| ------------------------- | ------------ | --------------------|--------------|--------------------------------------------------------|---------|-----------|
| `/api/question`           | `GET`        |  QuestionController  |    browse   |   Afficher la liste des questions                          | 200    | visitor|
| `/api/question`           | `POST`       |  QuestionController  |    create   | Poser une question                                         | 201    | user|
| `/api/question/{id}/answer`       | `POST`     |  QuestionController  |    create   | Repondre à une question                                    | 201    | user|
| `/api/question/{id}/answer`      | `GET`      |  QuestionController  |    browse   | Affiche les reponses reliées a une question                | 201    | visitor|
| `/api/question/{id}/answer/{id}` | `DELETE`  |  QuestionController  |  delete   | Suprime les reponses reliées a une question              | 204    | admin|
| `/api/question/{id}`             | `DELETE`  |  QuestionController  |  delete   | Suprime les questions a une question                     | 204    | admin|

### login/logout/user
| Endpoint                  | Méthode HTTP | Controller          |   Method    | Description                                            | Retour |  role |
| ------------------------- | ------------ | --------------------|-------------|--------------------------------------------------------|---------|-------|
| `/api/login`              | `GET`        |  UserController     |    login    |  Afficher la page de connexion                         | 200   | visitor|
| `/api/login`              | `POST`       |  UserController     |   login     | Se connecter a son compte                              | 200   | user |
| `/api/logout`             | `POST`       |  UserController     |   logout    | Se deconnecter de son compte                           | 200   | user |
| `/api/user`               | `GET`        |  UserController     |   browse    | Affiche la liste des utilisateurs                      | 200   | admin |
| `/api/user/{id}`           | `GET`       |  UserController     |  browse       | Affiche le profil d'un utilisateur                     | 200   | visitor |
| `/api/user/{id}`           | `PATCH`     |  UserController     |  edit       | Modifie un utilisateur                                 | 200   | user/admin |
| `/api/user/{id}`           | `DELETE`     |  UserController    |  delete     | Suprime un utilisateur                                 | 204   | user/admin |

| Endpoint                  | Méthode HTTP | Controller          |   Method     | Description                                             | Retour |  role     |
| ------------------------- | ------------ | --------------------|--------------|--------------------------------------------------------|---------|-----------|
| `/api/signin`                | `POST`    |  UserController      |   signin    | Création de compte                                         | 201   | visitor|
| `/api/signin`                | `GET`     |  UserController      |   signin    |Affichage de la page de la création d'un  compte            | 200   |visitor |


# Front endpoints 

| Endpoint                   |   Title                    |         Description                                   |   role    |
| ---------------------------| -------------------------- |-------------------------------------------------------|-----------|
| `/`                        |  *homepage*                | Carte interactive + rubriques de survie               | visitor   |
| `/guide-de-survie`         |  Guide de Survie           |Liste des articles relatifs a l'aide à la survie       | visitor   |
| `/guide-de-survie/{:slug} `|  Nom de l'article          | Article relatif a l'aide à la survie                  | visitor   |
| `/guide-de-survie/creation`|  Rédiger/Créer un article  |Article relatif a l'aide à la survie                   | visitor   |
| `/avis-de-recherche`       | Avis de recherche          | Liste des personnes recherchées / barre de recherche  | visitor   |
| `/questions-reponses`      | Question & Réponses        | Liste les questions  **( et les reponses ? )**        | visitor   |
| `/creation-de-compte`      | Signin                     | Affichage du formulaire d'inscription                 | visitor   |
| `/profil/{:id}`            | Profil                     |  Affichage du profil d'un utilisateur                 | visitor   |
| `/login`                   | Connexion                  | Affichage du formulaire de connnexion                 | visitor   |
| `/contact`                 | Contactez-nous             | Affichage des coordonnées des administrateurs         | visitor   |
| `/mentions-legales`        | Mentions légales           | Affichage des mentions légales                        | visitor   |
| `/dashboard`               | Back office                | Affichage du panneau administrateur                   | admin     |
| `*`                        | 404 page                   | 404 page                                              | visitor   |



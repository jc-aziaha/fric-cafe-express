# Fric-Café Express — site vitrine

Site statique une page pour la cafétéria **Fric-Café Express**, quartier Atikoumé
(face aux rails), Lomé — Togo.

Site en une page : `index.html`.

## Lancer

Aucun build.

```bash
python -m http.server 8000
```

puis `http://localhost:8000/`.

Le double-clic (`file://`) fonctionne, **sauf** la carte Google : Google refuse
de s'afficher depuis un fichier local. Dans ce cas la page retire l'iframe et
garde le plan dessiné en repli. Servez le dossier pour voir la vraie carte.

## Structure

```
index.html                 la page
assets/css/style.css       design tokens, thèmes clair/sombre, composants
assets/js/app.js           carte, filtres, 11 mécaniques d'animation
assets/img/pXXXX.jpg       24 visuels, extraits du menu numérique
robots.txt / sitemap.xml   référencement
PRODUCT.md / DESIGN.md     contexte produit et design
```

Aucune dépendance, aucun build, aucun outillage : quatre types de fichiers et
c'est tout. Le site n'a jamais eu besoin d'Impeccable pour fonctionner — c'était
un outil d'écriture, retiré du dossier une fois le travail terminé. Pour le
réinstaller un jour : `npx impeccable install`.

## SEO

`index.html` porte : titre et meta description ciblés « cafétéria
Atikoumé Lomé », balises Open Graph et Twitter Card, `canonical`, `theme-color`,
et des données structurées **schema.org / CafeOrCoffeeShop** (adresse, téléphone,
horaires, réseaux, carte avec prix en XOF). Testez-les avec l'outil de résultats
enrichis de Google.

`robots.txt` et `sitemap.xml` sont à la racine.

⚠️ **Le domaine `https://www.fric-cafe-express.tg/` est un espace réservé.**
Remplacez-le partout avant mise en ligne : `canonical`, balises `og:`,
`robots.txt` (ligne Sitemap) et `sitemap.xml`.

## Accessibilité

- lien d'évitement « Aller au contenu »
- sections reliées à leur titre (`aria-labelledby`), navigation nommée
- filtres de la carte en boutons à bascule (`aria-pressed`) + annonce vocale
  du nombre de plats affichés (`aria-live`)
- cartes atteignables au clavier : le retournement se déclenche aussi au focus
- décor (canvas, halo, plan dessiné) masqué aux lecteurs d'écran
- `prefers-reduced-motion` neutralise toutes les animations

## Responsive

Points de rupture : 1100 px (tablette paysage), 1024, 900 px (le hero passe en
colonne), 800 px (menu déroulant mobile), 620 px et 420 px. Vérifié sans
débordement horizontal à 390 px et 820 px.

La carte est décrite dans le tableau `ITEMS` :
`[nom, prix en F CFA, catégorie, identifiant image]`, catégories dans `CATS`.
Ajouter un plat = une ligne dans `ITEMS` + une image dans `assets/img/`.

## Ce qui bouge

1. Anneau 3D de 12 plats (`preserve-3d`), rotation auto, glisser souris/tactile
2. Cartes de la carte qui se retournent (`rotateY(180deg)`)
3. Pile de photos du hero en parallaxe 3D suivant le curseur
4. Vapeur en particules sur `<canvas>`
5. Titre dont chaque mot bascule sur son axe au chargement
6. Bandeau de prix dont la vitesse suit le défilement
7. Halo chaud qui poursuit le curseur
8. Compteurs, boutons magnétiques, barre de progression de lecture
9. Bascule thème clair / sombre mémorisée (`localStorage`)
10. Bouton WhatsApp flottant
11. Menu déroulant mobile sous 800 px (burger animé, fermeture au clic, Échap ou clic extérieur)

Tout est neutralisé sous `prefers-reduced-motion: reduce`. Sur Windows, si
« Effets d'animation » est désactivé dans les paramètres d'accessibilité,
la page s'affiche volontairement sans mouvement.

## Coordonnées réelles

- WhatsApp / téléphone : **+228 90 45 35 06** (`wa.me/22890453506`)
- TikTok : **@fric.cafe.express**
- Adresse : Atikoumé, face aux rails, Lomé — Togo

## Reste à préciser

- Les horaires d'ouverture sont des valeurs de remplissage, à confirmer.
- Le seuil de livraison (« dès 2 000 F ») est à confirmer.
- La carte Google cherche « Atikoumé, Lomé, Togo » et centre donc sur le
  quartier. Pour un repère exact, remplacer la requête par les coordonnées
  du comptoir : `?q=6.xxxx,1.xxxx` dans `index.html`.

Les 24 noms de plats et leurs prix proviennent du menu numérique de la maison.

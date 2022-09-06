# Nuxt Twitter Clone 5/09/2022

extrait du tuto : https://www.youtube.com/watch?v=_cM4j9_LfQk&t=2623s
` npx nuxi init nuxt_twitter_clone`
`cd nuxt_twitter_clone`
`npm i`

### installation de tailwind

`npm i -D @nuxtjs/tailwindcss `
dans nuxt.config.ts :

````export default defineNuxtConfig({
  module:['@nuxtjs/tailwindcss']
})```

Tailwind Css
pour définir le dark mode on modifie le fichier tailwind.config.js (voir darMode et theme) et l'on défini une variable darkMode que l'on bind a la class de la div container de l'appli ensuite dans chaque autre div si une classe est précédé de :dark les couleur du thème darkMode défini dans tailwind.config.js sera appliqué a cette div lorsque dark=true

On peut créer un fichier useTailwindConfig qui nous servira à exporter des configurations que l'on importera dans les composants ex : Left.vue avec defaultTransition


````

## SideBarLeft

on crée un dossier Sidebar dans components, on crée un dossier Left dans Sidebar et enfin on crée un fichier index.vue, ce fichier sera la vue du composant SidebarLeft, les dossier imbriqués dans les composants donne leurs noms aux composants

On crée le fichier Tab qui comprendra la balise <slot></slot> cette balise agit un peu comme le children en react, on déclare un attribut name dans la balise slot qui le liera dans le parent(grace a v-slot, voir ex dans index.vue)

## SideBarRight

Sensiblement identique à SideBarLeft, utilisation de tailwing import des config pour l'anim et utilisation de <slot></slot>

## Main section

### on va créer la partie post de pour les tweets qui seront ensuite afficher en dessous

## Création du back

On crée un dossier server a la racine
On crée un dossier api
On crée un dossier auth
On crée un fichier register post

Le dossier api rendra tous ses dossiers et fichiers accessible à l'url localhost:3000/api.... selon ce qu'on veut, on remplaçera le 3000 par l'adresse de production lors de la mise en production

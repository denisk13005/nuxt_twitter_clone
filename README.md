# Nuxt Twitter Clone

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
pour définir le dark mode on modifie le fichier tailwind.config.js (voir darMode et theme) et l'on défini une variable darkMode que l'on bind a la class de la dic container de l'appli ensuite dans chaque autre div si une classe est précédé de :dark les couleur du thème darkMode défini dans tailwind.config.js sera appliqué a cette div

On peut créer un fichier useTailwindConfig qui nous servira à exporter des configurations que l'on importera dans les composants ex : Left.vue avec defaultTransition
 On installe heroicons pour les icones ` npm i @heroicons/vue`

````

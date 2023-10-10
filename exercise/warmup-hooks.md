# Life Cycle Hooks

Övning är tvådelad där första fokuserar på beforeMount medan andra fokuserar på vad som händer om beforeMounted kräver särskild hantering.

## DEL 1: Övning GDPR compliance
Tekniker: localstorage.set/get, beforeMount(), vi-if / v-show

Gör en komponent ( <gdpr /> ) som bara visas första ggn man laddar sidan. Spara compliance i localStorage. Om localstorage.getItem(‘gdpr’) existerar ska inte GDPR visas.

![cookie gdpr consent](assets/gdpr-consent.png)

*Hint*: Samtycke = localstorage.setItem(‘gdpr’, ‘true’)


## Utmaning 1: You shall not pass
Tekniker: router, vi-if-else, beforeMounted(), sessionStorage

Gör en view ( <outside /> med en login comp som sparar en session ( auth ). Om session finns får man komma vidare till view:n <inside />. Om ej session finns kastar man tillbaka till <outside /> med hjälp av routern och beforeMounted hooken. Tips, se https://router.vuejs.org/guide/essentials/navigation.html för tips på hur du kan hantera routern i vue.


## Utamning 2: You shan't pass
Tekniker: vue-router, beforeMounted(), sessionStorage

Gör övning två, men gör så att outside och inside är två olika undersidor till webbsidan.
Se [named routes](https://router.vuejs.org/guide/essentials/named-routes.html) för tips på hur du kan omdirigera med vue

Lösningsförslag med vue 2.
https://repl.it/@JohanKivi/You-shall-not-pass


# Séance 2 || 20211110
initialisation html, css, js 

## html
<a href="src" target=__blank__> permet d'ouvrir une nouvelle fenêtre
attribue data-group => peut permet d'ordonner les contenus par js après 
````html
<h1>hello world</h1>
<a href="src" target=blank>
````

## scss
'helpers'=> en class tel que pour les text-center sur hmtl
utiliser les @keyframes 
exemple 1: 
````scss
@keyframes rotateanimationblock {
    //animation for a specifique attribue
    from{transform: rotateZ(O);}to{transform: rotateZ(+20deg);}
}
````
exemple 2: 
````scss
@keyframes rotateanimationblock {
    100%{
        transform:rotateZ(360deg);
    }
}
.sheet{
    width: 30%;
    height: 30%;
    border-radius: 0.5em;
    position: relative;
    display: flex;
    background-color: $bgcsheet;
    opacity: 20%;
    animation-name: rotateanimationblock;
    animation-delay: 1s;
    animation-duration: 60S;
    animation-timing-function: steps(60); //mvt saccader ac steps
    animation-iteration-count: infinite;
}
````

## js
````javascript
consolog('test')
````

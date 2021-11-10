# Séance 2 || 20211110
initialisation html, css, js 

## Sommaire 
- [html](#html)
- [SCSS](#scss)
    - [@keyframes & animation] (#@keyframes-&-animation)
    - [@mixin](#mixin)
- [js](#js)

## html
<a href="src" target=__blank__> permet d'ouvrir une nouvelle fenêtre
attribue data-group => peut permet d'ordonner les contenus par js après 
````html
<h1>hello world</h1>
<a href="src" target=blank>
````

## scss
'helpers'=> en class tel que pour les text-center sur hmtl

### @keyframes & animation
utiliser les __@keyframes__ pour l'__animation__ 
````scss
@keyframes rotateanimationblock {
    //animation for a specifique attribue
    from{transform: rotateZ(O);}to{transform: rotateZ(20deg);}
}
div{
    animation-name: rotateanimationblock; //nom du @keyframe à appliqué
    animation-delay: 1s;
    animation duration: 5s; 
    animation-timing-function: ease; //style d'animation
    animation-iteration-count: infinite; //loop
}
````
L'__animation__ peut aussi s'écrire que sur l'attribu animation sous ces ordres : 
- duration | easing-function | delay |iteration-count | direction | fill-mode | play-state | @keyframe name
- @keyframe name | duration | easing-function | delay
- @keyframe name | duration

Autre utilisation du __@keyframe__ et de l'attribu __animation__: 
````scss
@keyframes change_colors_scale {
    100%{
        background-color : red;
        scale : 100%;
    }
    50%{
        background-color : yellow;
        scale : 50%;
    }
    0%{
        background-color : yellow;
        scale : 0%;
    }
    
}
div{
    animation : 3s ease-in 1s 2 reverse both paused change_colors_scale;
}

````


### @mixin
@mixin permet de créer un ensemble d'attribue définit à l'interrieur de celle-ci attribuable avec la syntaxe @include +name
````scss
@mixin demo{
    position: absolute;
    background-color: #ed9a4c; 
    opacity: 45%;
    border-radius: 3em;
}
div{
    @include demo
}
````
On peut aussi affecter des variable à ces derniers et les utilisés différemments : 
````scss
$block1: #2290bf;
$block2:#7864de; 
$block3: #ed9a4c;
@mixin demo($colors:$block1){
    position: absolute;
    background-color: $colors; 
    opacity: 45%;
    border-radius: 3em;
}
div{
    @include demo;
}
.single2{
    @include demo($block2);
}
.single3{
    @include demo($block3);
}
````

Utilisation @keyframe + @mixin
````scss
$bgcsheet: white;
$block1: #2290bf;
$block2:#7864de; 
$block3: #ed9a4c;

@mixin block($cblock:$block1) {
    position: absolute;
    left:49.25%;
    top: 50%;
    background-color:$cblock;
    width: 1.5%;
    height: 25%;
    opacity: 1;
}
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
    .block1{
        @include block; //call @maxin named  block 
    }
    .block2{
        @include block($cblock:$block2);
    }
    .block3{
        @include block($cblock:$block3);
    }
}
````

## js
````javascript
consolog('test')
````

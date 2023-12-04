# Nuevo Curso de Angular 17: Creación de Aplicaciones Web

## E-commerce con Angular y Tailwindcss

## Configurar Tailwindcss
- [Documentación](https://tailwindcss.com/docs/guides/angular)

## Componentes
Cumplen el principio de una sola responsabilidad

![Componentes](/imgs/componentes.png)

### Ciclo de vida de los componentes

![Ciclo componentes](/imgs/cvcomponentes.png)

- **constructor:** NO ASYNC / before render / una vez.
- **ngOnChanges:** Before and during render.
- **ngOnInit:** After render / una vez / async, then, subs.
- **ngDoCheck:** 
  - **ngAfterContentInit:**
  - **ngAfterContentChecked:**
  - **ngAfterViewInit:** After render / hijos ya fueron pintandos.
  - **ngAfterViewCheck:**
- **ngOnDestroy:** Ver cuando el componente se destruye

## Inputs
Es la forma de enviar información del Padre al Hijo

![Inputs](/imgs/inputs.png)

## Outputs
Es la forma de enviar información del Hijo al Padre

## Audio player con ngAfterViewInit
[Info](https://wavesurfer.xyz/)

![Outputs](/imgs/outputs.png)


## Prop drilling / Imput drilling
El **Prop Drilling** es una paso del desarrollo que ocurre cuando necesitamos obtener datos que están en varias capas en el **árbol de componentes**

![Prop Drilling](/imgs/prop-drilling.png)

### State Management
La gestión de estados es el proceso de gestionar los estados de los controles de usuario. Ayuda a los desarrolladores a crear aplicaciones a gran escala con comunicaciones de datos intensas y, al mismo tiempo, mantener un alto rendimiento de las aplicaciones.

![Stage Manager](/imgs/state-management.png)

## Inyección de dependencias
![di](/imgs/di.png)
![di-1](/imgs/di-1.png)
![di-2](/imgs/di-2.png)


## Librerías
- **Date:** -> `npm i date-fns`


## Pipes
Se usa para hacer transformaciones

## Directivas
Para hacer manipulaciones del DOM de forma directa


## Recursos Adicionales
- [Stableaudio](https://stableaudio.com/)
- [Github](https://github.com/platzi/curso-angular-ecommerce)
- [Fake API](https://fakeapi.platzi.com/)
- [Angular - Transforming Data Using Pipes](https://angular.io/guide/pipes)


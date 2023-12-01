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
- **ngOnDestroy:**

## Inputs
Es la forma de enviar información del Padre al Hijo

![Inputs](/imgs/inputs.png)

## Outputs
Es la forma de enviar información del Hijo al Padre

![Outputs](/imgs/outputs.png)

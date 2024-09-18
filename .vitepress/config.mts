import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Guía JavaScript",
  description: "Esta es una guía de JavaScript",
  markdown: {
    theme: "one-dark-pro",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introducción",
        items: [
          {
            text: "JavaScript",
            link: "/intro/javascript",
          },
          {
            text: "Variables",
            link: "/intro/variables",
          },
          {
            text: "Operadores",
            link: "/intro/operadores",
          },
          {
            text: "Tipos de datos",
            link: "/intro/tipos",
          },
        ],
      },
      {
        text: "Estructuras de Control",
        items: [
          { text: "Condicionales", link: "/estructuras-control/condicionales" },
          { text: "Bucles", link: "/estructuras-control/bucles" },
        ],
      },
      {
        text: "Funciones",
        items: [
          { text: "Funciones", link: "/funciones/" },
          { text: "Parámetros", link: "/funciones/parametros" },
          { text: "Expresiones de función", link: "/funciones/expresion-funciones" },
          { text: "Funciones flecha", link: "/funciones/arrow-functions" },
          { text: "Scope y Closures", link: "/funciones/scope-closures" },
        ],
      },
      {
        text: "Objetos y Arrays",
        items: [
          { text: "Arrays", link: "/objetos-arrays/arrays" },
          { text: "Objetos", link: "/objetos-arrays/objetos" },
        ],
      },
      {
        text: "Programación Orientada a Objetos",
        items: [
          { text: "Conceptos Básicos", link: "/poo/conceptos-basicos" },
          { text: "Clases", link: "/poo/clases" },
          { text: "Herencia", link: "/poo/herencia" },
        ],
      },
      {
        text: "El DOM",
        items: [
          { text: "Introducción al DOM", link: "/dom/introduccion" },
          { text: "Selección de Elementos", link: "/dom/seleccion-elementos" },
          { text: "Eventos", link: "/dom/eventos" },
          { text: "Modificación del DOM", link: "/dom/modificacion" },
        ],
      },
      {
        text: "ECMAScript 6 (ES6)",
        items: [
          { text: "Introducción a ES6", link: "/es6/introduccion" },
          { text: "Let y Const", link: "/es6/let-const" },
          { text: "Templates Literales", link: "/es6/templates-literals" },
          { text: "Desestructuración", link: "/es6/desestructuracion" },
          { text: "Spread y Rest Operators", link: "/es6/spread-rest" },
          { text: "Promesas", link: "/es6/promesas" },
          { text: "Módulos", link: "/es6/modulos" },
        ],
      },
      {
        text: "Ejercicios",
        items: [
          {
            text: "Condicionales",
            link: "/exercises/ifelse",
          },
          {
            text: "Bucles",
            link: "/exercises/bucles",
          },
          {
            text: "Funciones",
            link: "/exercises/funciones",
          },
          {
            text: "Arrays",
            link: "/exercises/arrays",
          },
          {
            text: "Objetos",
            link: "/exercises/objetos",
          },
          {
            text: "Integrador 1",
            link: "/exercises/integrador-1",
          },
          {
            text: "Dom",
            link: "/exercises/dom",
          },
          
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});

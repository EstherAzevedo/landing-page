/// <reference types="vite/client" />

// Declare module for .vue files
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare const window: any;

const ipcRenderer = require('electron').ipcRenderer

// const { ipcRenderer } = (<any>window).require('electron')


export {};

declare global {
  interface Window {
    electronAPI: ipcRenderer;
  }
}
/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface DesktopContainer {}
  interface DesktopStartMenu {}
  interface DesktopTopMenu {}
  interface WinTypeTerminal {}
  interface WindowContainer {}
  interface WindowContent {
    'windowType': string;
  }
  interface WindowTopToolbar {}
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLDesktopContainerElement extends Components.DesktopContainer, HTMLStencilElement {}
  var HTMLDesktopContainerElement: {
    prototype: HTMLDesktopContainerElement;
    new (): HTMLDesktopContainerElement;
  };

  interface HTMLDesktopStartMenuElement extends Components.DesktopStartMenu, HTMLStencilElement {}
  var HTMLDesktopStartMenuElement: {
    prototype: HTMLDesktopStartMenuElement;
    new (): HTMLDesktopStartMenuElement;
  };

  interface HTMLDesktopTopMenuElement extends Components.DesktopTopMenu, HTMLStencilElement {}
  var HTMLDesktopTopMenuElement: {
    prototype: HTMLDesktopTopMenuElement;
    new (): HTMLDesktopTopMenuElement;
  };

  interface HTMLWinTypeTerminalElement extends Components.WinTypeTerminal, HTMLStencilElement {}
  var HTMLWinTypeTerminalElement: {
    prototype: HTMLWinTypeTerminalElement;
    new (): HTMLWinTypeTerminalElement;
  };

  interface HTMLWindowContainerElement extends Components.WindowContainer, HTMLStencilElement {}
  var HTMLWindowContainerElement: {
    prototype: HTMLWindowContainerElement;
    new (): HTMLWindowContainerElement;
  };

  interface HTMLWindowContentElement extends Components.WindowContent, HTMLStencilElement {}
  var HTMLWindowContentElement: {
    prototype: HTMLWindowContentElement;
    new (): HTMLWindowContentElement;
  };

  interface HTMLWindowTopToolbarElement extends Components.WindowTopToolbar, HTMLStencilElement {}
  var HTMLWindowTopToolbarElement: {
    prototype: HTMLWindowTopToolbarElement;
    new (): HTMLWindowTopToolbarElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'desktop-container': HTMLDesktopContainerElement;
    'desktop-start-menu': HTMLDesktopStartMenuElement;
    'desktop-top-menu': HTMLDesktopTopMenuElement;
    'win-type-terminal': HTMLWinTypeTerminalElement;
    'window-container': HTMLWindowContainerElement;
    'window-content': HTMLWindowContentElement;
    'window-top-toolbar': HTMLWindowTopToolbarElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface DesktopContainer {}
  interface DesktopStartMenu {}
  interface DesktopTopMenu {}
  interface WinTypeTerminal {}
  interface WindowContainer {}
  interface WindowContent {
    'windowType'?: string;
  }
  interface WindowTopToolbar {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'desktop-container': DesktopContainer;
    'desktop-start-menu': DesktopStartMenu;
    'desktop-top-menu': DesktopTopMenu;
    'win-type-terminal': WinTypeTerminal;
    'window-container': WindowContainer;
    'window-content': WindowContent;
    'window-top-toolbar': WindowTopToolbar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'desktop-container': LocalJSX.DesktopContainer & JSXBase.HTMLAttributes<HTMLDesktopContainerElement>;
      'desktop-start-menu': LocalJSX.DesktopStartMenu & JSXBase.HTMLAttributes<HTMLDesktopStartMenuElement>;
      'desktop-top-menu': LocalJSX.DesktopTopMenu & JSXBase.HTMLAttributes<HTMLDesktopTopMenuElement>;
      'win-type-terminal': LocalJSX.WinTypeTerminal & JSXBase.HTMLAttributes<HTMLWinTypeTerminalElement>;
      'window-container': LocalJSX.WindowContainer & JSXBase.HTMLAttributes<HTMLWindowContainerElement>;
      'window-content': LocalJSX.WindowContent & JSXBase.HTMLAttributes<HTMLWindowContentElement>;
      'window-top-toolbar': LocalJSX.WindowTopToolbar & JSXBase.HTMLAttributes<HTMLWindowTopToolbarElement>;
    }
  }
}



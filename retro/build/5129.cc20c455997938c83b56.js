(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5129,2135],{52135:(e,t,i)=>{"use strict";i.r(t),i.d(t,{IRetroShell:()=>h,RetroApp:()=>_,RetroShell:()=>u});var n=i(55611),s=i(90077),a=i(32700),r=i(33498),o=i(79028),d=i(66065),g=i(91884),p=i(58137),l=i(77031);const h=new d.Token("@retrolab/application:IRetroShell");class u extends l.Widget{constructor(){super(),this._currentChanged=new p.Signal(this),this.id="main";const e=new l.BoxLayout;this._topHandler=new c.PanelHandler,this._menuHandler=new c.PanelHandler,this._main=new l.Panel,this._topHandler.panel.id="top-panel",this._menuHandler.panel.id="menu-panel",this._main.id="main-panel";const t=this._topWrapper=new l.Panel;t.id="top-panel-wrapper",t.addWidget(this._topHandler.panel);const i=this._menuWrapper=new l.Panel;i.id="menu-panel-wrapper",i.addWidget(this._menuHandler.panel),l.BoxLayout.setStretch(t,0),l.BoxLayout.setStretch(i,0),l.BoxLayout.setStretch(this._main,1),this._spacer=new l.Widget,this._spacer.id="spacer-widget",e.spacing=0,e.addWidget(t),e.addWidget(i),e.addWidget(this._spacer),e.addWidget(this._main),this.layout=e}get currentChanged(){return this._currentChanged}get currentWidget(){var e;return null!==(e=this._main.widgets[0])&&void 0!==e?e:null}get top(){return this._topWrapper}get menu(){return this._menuWrapper}activateById(e){const t=(0,o.find)(this.widgets("main"),(t=>t.id===e));t&&t.activate()}add(e,t,i){var n;const s=null!==(n=null==i?void 0:i.rank)&&void 0!==n?n:900;if("top"===t)return this._topHandler.addWidget(e,s);if("menu"===t)return this._menuHandler.addWidget(e,s);if("main"===t||void 0===t){if(this._main.widgets.length>0)return;this._main.addWidget(e),this._main.update(),this._currentChanged.emit(void 0)}}collapseTop(){this._topWrapper.setHidden(!0),this._spacer.setHidden(!0)}expandTop(){this._topWrapper.setHidden(!1),this._spacer.setHidden(!1)}widgets(e){switch(null!=e?e:"main"){case"top":return(0,o.iter)(this._topHandler.panel.widgets);case"menu":return(0,o.iter)(this._menuHandler.panel.widgets);case"main":return(0,o.iter)(this._main.widgets);default:throw new Error(`Invalid area: ${e}`)}}}var c,m;!function(e){e.itemCmp=function(e,t){return e.rank-t.rank},e.PanelHandler=class{constructor(){this._panelChildHook=(e,t)=>{switch(t.type){case"child-added":{const e=t.child;if(this._items.find((t=>t.widget===e)))break;const i=this._items[this._items.length-1].rank;this._items.push({widget:e,rank:i})}break;case"child-removed":{const e=t.child;o.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}}return!0},this._items=new Array,this._panel=new l.Panel,g.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(t,i){t.parent=null;const n={widget:t,rank:i},s=o.ArrayExt.upperBound(this._items,n,e.itemCmp);o.ArrayExt.insert(this._items,s,n),this._panel.insertWidget(s,t)}}}(c||(c={}));class _ extends n.JupyterFrontEnd{constructor(e={shell:new u}){var t,i;if(super(Object.assign(Object.assign({},e),{shell:null!==(t=e.shell)&&void 0!==t?t:new u})),this.name="RetroLab",this.namespace=this.name,this.version=null!==(i=a.PageConfig.getOption("appVersion"))&&void 0!==i?i:"unknown",this._formatter=new r.Throttler((()=>{m.setFormat(this)}),250),e.mimeExtensions)for(const t of(0,s.as)(e.mimeExtensions))this.registerPlugin(t);this._formatter.invoke()}get paths(){return{urls:{base:a.PageConfig.getOption("baseUrl"),notFound:a.PageConfig.getOption("notFoundUrl"),app:a.PageConfig.getOption("appUrl"),static:a.PageConfig.getOption("staticUrl"),settings:a.PageConfig.getOption("settingsUrl"),themes:a.PageConfig.getOption("themesUrl"),doc:a.PageConfig.getOption("docUrl"),translations:a.PageConfig.getOption("translationsApiUrl"),hubHost:a.PageConfig.getOption("hubHost")||void 0,hubPrefix:a.PageConfig.getOption("hubPrefix")||void 0,hubUser:a.PageConfig.getOption("hubUser")||void 0,hubServerName:a.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:a.PageConfig.getOption("appSettingsDir"),schemas:a.PageConfig.getOption("schemasDir"),static:a.PageConfig.getOption("staticDir"),templates:a.PageConfig.getOption("templatesDir"),themes:a.PageConfig.getOption("themesDir"),userSettings:a.PageConfig.getOption("userSettingsDir"),serverRoot:a.PageConfig.getOption("serverRoot"),workspaces:a.PageConfig.getOption("workspacesDir")}}}handleEvent(e){super.handleEvent(e),"resize"===e.type&&this._formatter.invoke()}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}!function(e){e.setFormat=function(e){e.format=window.matchMedia("only screen and (max-width: 760px)").matches?"mobile":"desktop"}}(m||(m={}))}}]);
//# sourceMappingURL=5129.cc20c455997938c83b56.js.map
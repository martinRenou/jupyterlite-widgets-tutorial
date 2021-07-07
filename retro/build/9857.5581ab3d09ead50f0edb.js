(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9857],{60724:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DataConnector=void 0,t.DataConnector=class{async list(e){throw new Error("DataConnector#list method has not been implemented.")}async remove(e){throw new Error("DataConnector#remove method has not been implemented.")}async save(e,t){throw new Error("DataConnector#save method has not been implemented.")}}},29857:function(e,t,s){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),a=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),a(s(60724),t),a(s(75448),t),a(s(43982),t),a(s(5309),t),a(s(15959),t)},75448:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},43982:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RestorablePool=void 0;const r=s(66065),a=s(20337),i=s(58137);var n;t.RestorablePool=class{constructor(e){this._added=new i.Signal(this),this._current=null,this._currentChanged=new i.Signal(this),this._hasRestored=!1,this._isDisposed=!1,this._objects=new Set,this._restore=null,this._restored=new r.PromiseDelegate,this._updated=new i.Signal(this),this.namespace=e.namespace}get added(){return this._added}get current(){return this._current}set current(e){this._current!==e&&null!==e&&this._objects.has(e)&&(this._current=e,this._currentChanged.emit(this._current))}get currentChanged(){return this._currentChanged}get isDisposed(){return this._isDisposed}get restored(){return this._restored.promise}get size(){return this._objects.size}get updated(){return this._updated}async add(e){var t,s;if(e.isDisposed){const t="A disposed object cannot be added.";throw console.warn(t,e),new Error(t)}if(this._objects.has(e)){const t="This object already exists in the pool.";throw console.warn(t,e),new Error(t)}if(this._objects.add(e),e.disposed.connect(this._onInstanceDisposed,this),!n.injectedProperty.get(e)){if(this._restore){const{connector:r}=this._restore,a=this._restore.name(e);if(a){const i=`${this.namespace}:${a}`,o=null===(s=(t=this._restore).args)||void 0===s?void 0:s.call(t,e);n.nameProperty.set(e,i),await r.save(i,{data:o})}}this._added.emit(e)}}dispose(){this.isDisposed||(this._current=null,this._isDisposed=!0,this._objects.clear(),i.Signal.clearData(this))}find(e){const t=this._objects.values();for(const s of t)if(e(s))return s}forEach(e){this._objects.forEach(e)}filter(e){const t=[];return this.forEach((s=>{e(s)&&t.push(s)})),t}inject(e){return n.injectedProperty.set(e,!0),this.add(e)}has(e){return this._objects.has(e)}async restore(e){if(this._hasRestored)throw new Error("This pool has already been restored.");this._hasRestored=!0;const{command:t,connector:s,registry:r,when:a}=e,i=this.namespace,n=a?[s.list(i)].concat(a):[s.list(i)];this._restore=e;const[o]=await Promise.all(n),c=await Promise.all(o.ids.map((async(e,a)=>{const i=o.values[a],n=i&&i.data;return void 0===n?s.remove(e):r.execute(t,n).catch((()=>s.remove(e)))})));return this._restored.resolve(),c}async save(e){var t,s;const r=n.injectedProperty.get(e);if(!this._restore||!this.has(e)||r)return;const{connector:a}=this._restore,i=this._restore.name(e),o=n.nameProperty.get(e),c=i?`${this.namespace}:${i}`:"";if(o&&o!==c&&await a.remove(o),n.nameProperty.set(e,c),c){const r=null===(s=(t=this._restore).args)||void 0===s?void 0:s.call(t,e);await a.save(c,{data:r})}o!==c&&this._updated.emit(e)}_onInstanceDisposed(e){if(this._objects.delete(e),e===this._current&&(this._current=null,this._currentChanged.emit(this._current)),n.injectedProperty.get(e))return;if(!this._restore)return;const{connector:t}=this._restore,s=n.nameProperty.get(e);s&&t.remove(s)}},function(e){e.injectedProperty=new a.AttachedProperty({name:"injected",create:()=>!1}),e.nameProperty=new a.AttachedProperty({name:"name",create:()=>""})}(n||(n={}))},5309:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StateDB=void 0;const r=s(58137);class a{constructor(e={}){this._changed=new r.Signal(this);const{connector:t,transform:s}=e;this._connector=t||new a.Connector,this._ready=s?s.then((e=>{const{contents:t,type:s}=e;switch(s){case"cancel":return;case"clear":return this._clear();case"merge":return this._merge(t||{});case"overwrite":return this._overwrite(t||{});default:return}})):Promise.resolve(void 0)}get changed(){return this._changed}async clear(){await this._ready,await this._clear()}async fetch(e){return await this._ready,this._fetch(e)}async list(e){return await this._ready,this._list(e)}async remove(e){await this._ready,await this._remove(e),this._changed.emit({id:e,type:"remove"})}async save(e,t){await this._ready,await this._save(e,t),this._changed.emit({id:e,type:"save"})}async toJSON(){await this._ready;const{ids:e,values:t}=await this._list();return t.reduce(((t,s,r)=>(t[e[r]]=s,t)),{})}async _clear(){await Promise.all((await this._list()).ids.map((e=>this._remove(e))))}async _fetch(e){const t=await this._connector.fetch(e);if(t)return JSON.parse(t).v}async _list(e=""){const{ids:t,values:s}=await this._connector.list(e);return{ids:t,values:s.map((e=>JSON.parse(e).v))}}async _merge(e){await Promise.all(Object.keys(e).map((t=>e[t]&&this._save(t,e[t]))))}async _overwrite(e){await this._clear(),await this._merge(e)}async _remove(e){return this._connector.remove(e)}async _save(e,t){return this._connector.save(e,JSON.stringify({v:t}))}}t.StateDB=a,function(e){e.Connector=class{constructor(){this._storage={}}async fetch(e){return this._storage[e]}async list(e=""){return Object.keys(this._storage).reduce(((t,s)=>(""!==e&&e!==s.split(":")[0]||(t.ids.push(s),t.values.push(this._storage[s])),t)),{ids:[],values:[]})}async remove(e){delete this._storage[e]}async save(e,t){this._storage[e]=t}}}(a=t.StateDB||(t.StateDB={}))},15959:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IStateDB=void 0;const r=s(66065);t.IStateDB=new r.Token("@jupyterlab/coreutils:IStateDB")}}]);
//# sourceMappingURL=9857.5581ab3d09ead50f0edb.js.map
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6044],{83287:function(e,t,i){i.d(t,{W:function(){return r}});var s=i(22555),n=i(54146);class r extends n.Z{constructor(e){let{chains:t=s.gL9,options:i}=e;super(),this.chains=t,this.options=i}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},99312:function(e,t,i){i.d(t,{A:function(){return a},C:function(){return o},R:function(){return c},S:function(){return d},U:function(){return l},a:function(){return h}});var s=i(46795);class n extends Error{constructor(e,t){let{cause:i,code:s,data:n}=t;if(!Number.isInteger(s))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(i)}`),this.cause=i,this.code=s,this.data=n}}class r extends n{constructor(e,t){let{cause:i,code:s,data:n}=t;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:i,code:s,data:n})}}class a extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class o extends Error{constructor(e){let{chainId:t,connectorId:i}=e;super(`Chain "${t}" not configured for connector "${i}".`),(0,s._)(this,"name","ChainNotConfigured")}}class h extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class c extends n{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class l extends r{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},76044:function(e,t,i){i.d(t,{WalletConnectConnector:function(){return _}});var s=i(46795),n=i(99312),r=i(19485),a=i(241),o=i(16441),h=i(85560),c=i(81764),d=i(83287);i(54146);let l=new Set([1,137,10,42161,56]),u="eip155",p="wagmi.requestedChains",g="wallet_addEthereumChain",m="last-used-chain-id";class _ extends d.W{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,s._)(this,"id",h.w.walletConnect),(0,s._)(this,"name","WalletConnect"),(0,s._)(this,"ready",!0),(0,s._)(this,"onAccountsChanged",e=>{0===e.length?this.emit("disconnect"):e[0]&&this.emit("change",{account:r.getAddress(e[0])})}),(0,s._)(this,"onChainChanged",async e=>{let t=Number(e),i=this.isChainUnsupported(t);await this._storage.setItem(m,String(e)),this.emit("change",{chain:{id:t,unsupported:i}})}),(0,s._)(this,"onDisconnect",async()=>{await this._setRequestedChainsIds([]),await this._storage.removeItem(m),this.emit("disconnect")}),(0,s._)(this,"onDisplayUri",e=>{this.emit("message",{type:"display_uri",data:e})}),(0,s._)(this,"onConnect",()=>{this.emit("connect",{provider:this._provider})}),this._storage=e.options.storage,this._createProvider(),this.filteredChains=this.chains.length>50?this.chains.filter(e=>l.has(e.chainId)):this.chains,this.showWalletConnectModal=!1!==this.options.qrcode}async connect(){let{chainId:e,pairingTopic:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let i=e;if(!i){let e=await this._storage.getItem(m),t=e?parseInt(e):void 0;i=t&&!this.isChainUnsupported(t)?t:this.filteredChains[0]?.chainId}if(!i)throw Error("No chains found on connector.");let s=await this.getProvider();if(this.setupListeners(),s.session){await s.disconnect();let e=this.filteredChains.filter(e=>e.chainId!==i).map(e=>e.chainId);this.emit("message",{type:"connecting"}),await s.connect({pairingTopic:t,chains:[i],optionalChains:e.length>0?e:[i]}),await this._setRequestedChainsIds(this.filteredChains.map(e=>{let{chainId:t}=e;return t}))}let n=await s.enable();if(!n[0])throw Error("No accounts found on provider.");let o=r.getAddress(n[0]),h=await this.getChainId(),c=this.isChainUnsupported(h);return{account:o,chain:{id:h,unsupported:c},provider:new a.Q(s)}}catch(e){if(/user rejected/i.test(e?.message))throw new n.U(e);throw e}}async disconnect(){let e=()=>{if("undefined"!=typeof localStorage)for(let e in localStorage)e.startsWith("wc@2")&&localStorage.removeItem(e)};e();let t=await this.getProvider(),i=async()=>{try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{this._removeListeners(),await this._setRequestedChainsIds([]),e()}};i()}async getAccount(){let{accounts:e}=await this.getProvider();if(!e[0])throw Error("No accounts found on provider.");return r.getAddress(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._provider||await this._createProvider(),e&&await this.switchChain(e),!this._provider)throw Error("No provider found.");return this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,i]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]);return new a.Q(t,e).getSigner(i)}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),i=await this._isChainsStale();if(!e)return!1;if(i&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.chainId===e);if(!t)throw new n.S(`Chain with ID: ${e}, not found on connector.`);try{let i=await this.getProvider(),s=this._getNamespaceChainsIds(),n=this._getNamespaceMethods(),r=s.includes(e);if(!r&&n.includes(g)){let s=t.explorers&&t.explorers[0],n=s?{blockExplorerUrls:[s.url]}:{};await i.request({method:g,params:[{chainId:o.hexValue(t.chainId),chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:(0,c.g)(t),...n}]});let r=await this._getRequestedChainsIds();r.push(e),await this._setRequestedChainsIds(r)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:o.hexValue(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new n.U(t);throw new n.S(t)}}async _createProvider(){return this._initProviderPromise||(this._initProviderPromise=this.initProvider()),this._initProviderPromise}async initProvider(){let{default:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:s}=await Promise.all([i.e(3484),i.e(479),i.e(3797),i.e(462)]).then(i.bind(i,462)),[n,...r]=this.filteredChains.map(e=>{let{chainId:t}=e;return t});n&&(this._provider=await e.init({showQrModal:this.showWalletConnectModal,projectId:this.options.projectId,methods:["eth_sendTransaction","personal_sign","eth_signTypedData_v4"],optionalMethods:s,optionalEvents:t,chains:[n],optionalChains:r,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(e=>[e.chainId,e.rpc[0]||""])),qrModalOptions:this.options.qrModalOptions}))}async _isChainsStale(){let e=this._getNamespaceMethods();if(e.includes(g)||!this.options.isNewChainsStale)return!1;let t=await this._getRequestedChainsIds(),i=this.filteredChains.map(e=>{let{chainId:t}=e;return t}),s=this._getNamespaceChainsIds();return(!s.length||!!s.some(e=>i.includes(e)))&&!i.every(e=>t.includes(e))}async setupListeners(){this._provider&&(this._removeListeners(),this._provider.on("accountsChanged",this.onAccountsChanged),this._provider.on("chainChanged",this.onChainChanged),this._provider.on("disconnect",this.onDisconnect),this._provider.on("session_delete",this.onDisconnect),this._provider.on("display_uri",this.onDisplayUri),this._provider.on("connect",this.onConnect))}_removeListeners(){this._provider&&(this._provider.removeListener("accountsChanged",this.onAccountsChanged),this._provider.removeListener("chainChanged",this.onChainChanged),this._provider.removeListener("disconnect",this.onDisconnect),this._provider.removeListener("session_delete",this.onDisconnect),this._provider.removeListener("display_uri",this.onDisplayUri),this._provider.removeListener("connect",this.onConnect))}async _setRequestedChainsIds(e){await this._storage.setItem(p,JSON.stringify(e))}async _getRequestedChainsIds(){let e=await this._storage.getItem(p);return e?JSON.parse(e):[]}_getNamespaceChainsIds(){if(!this._provider)return[];let e=this._provider.session?.namespaces[u]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return e??[]}_getNamespaceMethods(){if(!this._provider)return[];let e=this._provider.session?.namespaces[u]?.methods;return e??[]}}}}]);
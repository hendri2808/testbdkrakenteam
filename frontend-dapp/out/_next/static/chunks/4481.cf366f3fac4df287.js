"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4481,5664],{83287:function(e,t,n){n.d(t,{W:function(){return r}});var i=n(22555),s=n(54146);class r extends s.Z{constructor(e){let{chains:t=i.gL9,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},99312:function(e,t,n){n.d(t,{A:function(){return o},C:function(){return c},R:function(){return h},S:function(){return d},U:function(){return u},a:function(){return a}});var i=n(46795);class s extends Error{constructor(e,t){let{cause:n,code:i,data:s}=t;if(!Number.isInteger(i))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=i,this.data=s}}class r extends s{constructor(e,t){let{cause:n,code:i,data:s}=t;if(!(Number.isInteger(i)&&i>=1e3&&i<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:i,data:s})}}class o extends Error{constructor(){super(...arguments),(0,i._)(this,"name","AddChainError"),(0,i._)(this,"message","Error adding chain")}}class c extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured for connector "${n}".`),(0,i._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,i._)(this,"name","ConnectorNotFoundError"),(0,i._)(this,"message","Connector not found")}}class h extends s{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,i._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,i._)(this,"name","SwitchChainError")}}class u extends r{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,i._)(this,"name","UserRejectedRequestError")}}},59014:function(e,t,n){n.d(t,{n:function(){return i}});function i(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},64481:function(e,t,n){n.d(t,{Coin98Connector:function(){return h}});var i=n(46795),s=n(99312),r=n(85560),o=n(95664),c=n(19485),a=n(51367);n(54146);class h extends o.InjectedConnector{constructor(e){let t={name:"Coin98 Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:a.g},n={...t,...e.options};super({chains:e.chains,options:n,connectorStorage:e.connectorStorage}),(0,i._)(this,"id",r.w.coin98)}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new s.a;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)){n=await this.getAccount().catch(()=>null);let e=!!n;if(e)try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(e){if(this.isUserRejectedRequestError(e))throw new s.U(e)}}if(!n){let e=await t.request({method:"eth_requestAccounts"});n=c.getAddress(e[0])}let i=await this.getChainId(),r=this.isChainUnsupported(i);if(e.chainId&&i!==e.chainId)try{await this.switchChain(e.chainId),i=e.chainId,r=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id : ${e.chainId}`,t)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let o={chain:{id:i,unsupported:r},provider:t,account:n};return this.emit("connect",o),o}catch(e){if(this.isUserRejectedRequestError(e))throw new s.U(e);if(-32002===e.code)throw new s.R(e);throw e}}}},95664:function(e,t,n){n.d(t,{InjectedConnector:function(){return l}});var i=n(46795),s=n(83287),r=n(99312),o=n(24528),c=n(81764),a=n(19485),h=n(241),d=n(16441),u=n(59014);n(54146);class l extends s.W{constructor(e){let t={shimDisconnect:!0,getProvider:()=>{if((0,o.a)(globalThis.window))return globalThis.window.ethereum},...e.options};super({chains:e.chains,options:t}),(0,i._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,i._)(this,"onAccountsChanged",async e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:a.getAddress(e[0])})}),(0,i._)(this,"onChainChanged",e=>{let t=(0,u.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})}),(0,i._)(this,"onDisconnect",async e=>{if(1013===e.code){let e=await this.getProvider();if(e)try{let e=await this.getAccount();if(e)return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});let n=t.getProvider();if("string"==typeof t.name)this.name=t.name;else if(n){let e=function(e){if(!e)return"Injected";let t=e=>e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":e.isImToken?"imToken":void 0;if(e.providers?.length){let n=new Set,i=1;for(let s of e.providers){let e=t(s);e||(e=`Unknown Wallet #${i}`,i+=1),n.add(e)}let s=[...n];return s.length?s:s[0]??"Injected"}return t(e)??"Injected"}(n);t.name?this.name=t.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=e.connectorStorage}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new r.a;this.setupListeners(),this.emit("message",{type:"connecting"});let n=await t.request({method:"eth_requestAccounts"}),i=a.getAddress(n[0]),s=await this.getChainId(),o=this.isChainUnsupported(s);if(e.chainId&&s!==e.chainId)try{await this.switchChain(e.chainId),s=e.chainId,o=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id: ${e.chainId}`,t)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let c={account:i,chain:{id:s,unsupported:o},provider:t};return this.emit("connect",c),c}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(e);if(-32002===e.code)throw new r.R(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new r.a;return a.getAddress((await e.request({method:"eth_accounts"}))[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new r.a;return e.request({method:"eth_chainId"}).then(u.n)}async getProvider(){let e=this.options.getProvider();return e&&(this._provider=e),this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new h.Q(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!await this.connectorStorage.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new r.a;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new r.a;let n=d.hexValue(e);try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});let i=this.chains.find(t=>t.chainId===e);if(i)return i;return{chainId:e,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){let i=this.chains.find(t=>t.chainId===e);if(!i)throw new r.C({chainId:e,connectorId:this.id});if(4902===s.code||s?.data?.originalError?.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:(0,c.g)(i),blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(s);throw new r.A}if(this.isUserRejectedRequestError(s))throw new r.U(s);throw new r.S(s)}}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}}}}]);
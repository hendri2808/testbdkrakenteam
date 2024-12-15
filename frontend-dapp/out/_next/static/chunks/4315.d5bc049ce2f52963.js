"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4315],{36641:function(t,e,a){a.d(e,{D:function(){return g},H:function(){return f},g:function(){return m},h:function(){return l},r:function(){return y}});var i=a(6881),r=a(16441),n=a(38197),s=a(84243),o=a(2593),c=a(93901),h=a(81764),d=a(91651),p=a(1832);async function l(t){let e=await i.resolveProperties(t);return Object.keys(e).map(t=>{let a=e[t];return"string"==typeof a&&a.startsWith("0x")||(a=r.hexValue(a)),[t,a]}).reduce((t,e)=>{let[a,i]=e;return{...t,[a]:i}},{})}async function m(t,e,a){let r=await i.resolveProperties(t),o={sender:r.sender,nonce:r.nonce,initCodeHash:n.keccak256(r.initCode),callDataHash:n.keccak256(r.callData),callGasLimit:r.callGasLimit,verificationGasLimit:r.verificationGasLimit,preVerificationGas:r.preVerificationGas,maxFeePerGas:r.maxFeePerGas,maxPriorityFeePerGas:r.maxPriorityFeePerGas,paymasterAndDataHash:n.keccak256(r.paymasterAndData)},c=s.$.encode([{components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes32",name:"initCodeHash"},{type:"bytes32",name:"callDataHash"},{type:"uint256",name:"callGasLimit"},{type:"uint256",name:"verificationGasLimit"},{type:"uint256",name:"preVerificationGas"},{type:"uint256",name:"maxFeePerGas"},{type:"uint256",name:"maxPriorityFeePerGas"},{type:"bytes32",name:"paymasterAndDataHash"}],name:"hashedUserOp",type:"tuple"}],[{...o}]),h=n.keccak256(c),d=s.$.encode(["bytes32","address","uint256"],[h,e,a]);return n.keccak256(d)}let u=()=>{let t=BigInt(Math.floor(4294967296*Math.random())),e=BigInt(Math.floor(4294967296*Math.random())),a=BigInt(Math.floor(4294967296*Math.random())),i=BigInt(Math.floor(4294967296*Math.random())),r=BigInt(Math.floor(4294967296*Math.random())),n=BigInt(Math.floor(4294967296*Math.random()));return t<<BigInt(160)|e<<BigInt(128)|a<<BigInt(96)|i<<BigInt(64)|r<<BigInt(32)|n},y=()=>{let t=u().toString(16);return t.length%2!=0&&(t="0"+t),t="0x"+t,o.O$.from(r.concat([t,"0x0000000000000000"]))},g=!1;class f{constructor(t,e,a,i,r){this.bundlerUrl=t,this.entryPointAddress=e,this.chainId=a;let n={};if((0,h.i)(this.bundlerUrl)){let t="undefined"!=typeof globalThis&&"APP_BUNDLE_ID"in globalThis?globalThis.APP_BUNDLE_ID:void 0;r?n["x-secret-key"]=r:i&&(n["x-client-id"]=i,t&&(n["x-bundle-id"]=t)),"undefined"!=typeof globalThis&&"TW_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_AUTH_TOKEN&&(n.authorization=`Bearer ${globalThis.TW_AUTH_TOKEN}`),"undefined"!=typeof globalThis&&"TW_CLI_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_CLI_AUTH_TOKEN&&(n.authorization=`Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`,n["x-authorize-wallet"]="true"),(0,d.s)(n)}this.userOpJsonRpcProvider=new c.c({url:this.bundlerUrl,headers:n},{name:"Connected bundler network",chainId:a}),this.initializing=this.validateChainId()}async validateChainId(){if(await (0,p.e)(this.chainId))return;let t=await this.userOpJsonRpcProvider.send("eth_chainId",[]),e=parseInt(t);if(e!==this.chainId)throw Error(`bundler ${this.bundlerUrl} is on chainId ${e}, but provider is on chainId ${this.chainId}`)}async sendUserOpToBundler(t){await this.initializing;let e=await l(t),a=[e,this.entryPointAddress];return await this.printUserOperation("eth_sendUserOperation",a),await this.userOpJsonRpcProvider.send("eth_sendUserOperation",[e,this.entryPointAddress])}async estimateUserOpGas(t){await this.initializing;let e=await l(t),a=[e,this.entryPointAddress];await this.printUserOperation("eth_estimateUserOperationGas",a);let i=await this.userOpJsonRpcProvider.send("eth_estimateUserOperationGas",[e,this.entryPointAddress]);return{preVerificationGas:o.O$.from(i.preVerificationGas),verificationGas:o.O$.from(i.verificationGas),verificationGasLimit:o.O$.from(i.verificationGasLimit),callGasLimit:o.O$.from(i.callGasLimit).add(p.M)}}async getUserOperationGasPrice(){return await this.initializing,await this.userOpJsonRpcProvider.send("thirdweb_getUserOperationGasPrice",[])}async getUserOperationReceipt(t){return await this.initializing,await this.userOpJsonRpcProvider.send("eth_getUserOperationReceipt",[t])}async zkPaymasterData(t){return await this.initializing,await this.userOpJsonRpcProvider.send("zk_paymasterData",[await l({...t,gas:t.gasLimit})])}async zkBroadcastTransaction(t){return await this.initializing,await this.userOpJsonRpcProvider.send("zk_broadcastTransaction",[t])}async printUserOperation(t,e){}}},44315:function(t,e,a){a.d(e,{ZkSyncConnector:function(){return g}});var i=a(46795),r=a(27021),n=a(36641),s=a(1832),o=a(48088),c=a(2593),h=a(16441),d=a(83875),p=a(19485),l=a(59052),m=a(56371);a(54146),a(35124),a(51364);let u={Transaction:[{name:"txType",type:"uint256"},{name:"from",type:"uint256"},{name:"to",type:"uint256"},{name:"gasLimit",type:"uint256"},{name:"gasPerPubdataByteLimit",type:"uint256"},{name:"maxFeePerGas",type:"uint256"},{name:"maxPriorityFeePerGas",type:"uint256"},{name:"paymaster",type:"uint256"},{name:"nonce",type:"uint256"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"factoryDeps",type:"bytes32[]"},{name:"paymasterInput",type:"bytes"}]};class y extends o.Signer{constructor(t,e){super(),this.signer=t,(0,m.defineReadOnly)(this,"provider",t.provider),this.httpRpcClient=e}async getAddress(){return await this.signer.getAddress()}async signMessage(t){return await this.signer.signMessage(t)}async signTransaction(t){return await this.signer.signTransaction(t)}connect(t){return new y(this.signer.connect(t),this.httpRpcClient)}_signTypedData(t,e,a){return this.signer._signTypedData(t,e,a)}async sendTransaction(t){return await this.sendZkSyncTransaction(t)}async sendZkSyncTransaction(t){let e=await this.populateTransaction(t);if(!e.chainId)throw Error("ChainId is required to send a ZkSync transaction");if(!this.provider)throw Error("Provider is required to send a ZkSync transaction");let a=await this.getAddress(),i=c.O$.from(e.gasLimit||await this.provider.estimateGas(e)).mul(3),r=c.O$.from(e.gasPrice||await this.provider.getGasPrice()).mul(2);e.maxFeePerGas?e.maxFeePerGas=e.maxFeePerGas.mul(2):e.maxFeePerGas=r,e.maxPriorityFeePerGas?e.maxPriorityFeePerGas=e.maxPriorityFeePerGas.mul(2):e.maxPriorityFeePerGas=r,e={...e,from:a,gasLimit:i,gasPrice:r,chainId:(await this.provider.getNetwork()).chainId,nonce:await this.provider.getTransactionCount(a),type:113,value:BigInt(0)};let n=await this.httpRpcClient?.zkPaymasterData(e);e.customData={gasPerPubdata:5e4,factoryDeps:[],paymasterParams:{paymaster:n.paymaster,paymasterInput:n.paymasterInput}};let s={txType:113,from:BigInt(e.from||await this.getAddress()).toString(),to:BigInt(e.to||"0x0").toString(),gasLimit:e.gasLimit?Number(e.gasLimit):0,gasPerPubdataByteLimit:5e4,maxFeePerGas:c.O$.from(e.maxFeePerGas).toNumber(),maxPriorityFeePerGas:c.O$.from(e.maxPriorityFeePerGas).toNumber(),paymaster:BigInt(n.paymaster).toString(),nonce:c.O$.from(e.nonce).toNumber(),value:c.O$.from(e.value).toNumber(),data:e.data||"0x",factoryDeps:[],paymasterInput:h.arrayify(n.paymasterInput)},o=await this._signTypedData({name:"zkSync",version:"2",chainId:e.chainId},u,s),d=this.serialize(e,o),p={from:e.from?.toString()||await this.getAddress(),to:e.to?.toString()||"",gas:e.gasLimit?.toString()||"",maxFeePerGas:e.maxFeePerGas?.toString()||"0",maxPriorityFeePerGas:e.maxPriorityFeePerGas?.toString()||"0",signedTransaction:d,paymaster:n.paymaster},l=await this.httpRpcClient?.zkBroadcastTransaction(p),m=l.transactionHash;return await this.provider?.getTransaction(m)}serialize(t,e){if(!t.customData&&113!==t.type)return d.serialize(t,e);if(!t.chainId)throw Error("Transaction chainId isn't set!");function a(t,e){let a=h.stripZeros(c.O$.from(t).toHexString());if(a.length>32)throw Error(`Invalid length for ${e}!`);return a}if(!t.from)throw Error("Explicitly providing `from` field is required for EIP712 transactions!");let i=t.from,r=t.customData??{},n=t.maxFeePerGas||t.gasPrice||0,s=t.maxPriorityFeePerGas||n,o=[a(t.nonce||0,"nonce"),a(s,"maxPriorityFeePerGas"),a(n,"maxFeePerGas"),a(t.gasLimit||0,"gasLimit"),t.to?p.getAddress(t.to):"0x",a(t.value||0,"value"),t.data||"0x"];if(e){let t=h.splitSignature(e);o.push(a(t.recoveryParam,"recoveryParam")),o.push(h.stripZeros(t.r)),o.push(h.stripZeros(t.s))}else o.push(a(t.chainId,"chainId")),o.push("0x"),o.push("0x");if(o.push(a(t.chainId,"chainId")),o.push(p.getAddress(i)),o.push(a(r.gasPerPubdata||5e4,"gasPerPubdata")),o.push((r.factoryDeps??[]).map(t=>h.hexlify(t))),r.customSignature&&0===h.arrayify(r.customSignature).length)throw Error("Empty signatures are not supported!");return o.push(r.customSignature||"0x"),r.paymasterParams?o.push([r.paymasterParams.paymaster,h.hexlify(r.paymasterParams.paymasterInput)]):o.push([]),h.hexConcat([[113],l.encode(o)])}}class g extends r.C{constructor(t){super(),(0,i._)(this,"chainId",1),this.config=t}async connect(t){if(this.personalWallet=t.personalWallet,this.chainId=await (await this.personalWallet.getSigner()).getChainId(),!await (0,s.e)(this.chainId))throw Error("Invalid zksync chain id");let e=this.config.bundlerUrl||`https://${this.chainId}.bundler.thirdweb.com`,a=this.config.entryPointAddress||s.f;return this.httpRpcClient=new n.H(e,a,this.chainId,this.config.clientId,this.config.secretKey),this.getAddress()}disconnect(){throw Error("Method not implemented.")}async getAddress(){let t=await this.getSigner();return t.getAddress()}async getSigner(){if(!this.personalWallet)throw Error("Wallet not connected");return new y(await this.personalWallet.getSigner(),this.httpRpcClient)}switchChain(t){throw Error("Method not implemented.")}isConnected(){return Promise.resolve(!!this.personalWallet)}setupListeners(){throw Error("Method not implemented.")}updateChains(t){throw Error("Method not implemented.")}async getProvider(){if(!this.getSigner())throw Error("Personal wallet not connected");let t=await this.getSigner();if(!t.provider)throw Error("Provider not found");return t.provider}}}}]);
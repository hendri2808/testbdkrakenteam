"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1838],{21919:function(t,r,a){a.d(r,{C:function(){return p},G:function(){return h},a:function(){return l},b:function(){return d},d:function(){return c},h:function(){return i}});var e=a(2515),n=a(23437),s=a(61744),o=a(40721);function c(t,r){let a=(0,e.ai)(t.abi,r,t.extensions);return a}function i(t,r){return t in r.readContract.functions}class p{featureName=e.cJ.name;constructor(t,r,a){this.contractWrapper=t,this.schema=r,this.storage=a}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){let r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{let r,a,n;try{i("name",this.contractWrapper)&&(r=await this.contractWrapper.read("name",[]))}catch(t){}try{i("symbol",this.contractWrapper)&&(a=await this.contractWrapper.read("symbol",[]))}catch(t){}try{n=await (0,e.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch(t){}t={name:r||n?.name,symbol:a,description:n?.info.title}}catch(t){throw Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}set=(0,n.f)(async t=>{let r=await this._parseAndUploadMetadata(t),a=this.contractWrapper;if(this.supportsContractMetadata(a))return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:t=>({receipt:t,data:this.get})});throw new e.x(e.cJ)});update=(0,n.f)(async t=>await this.set.prepare({...await this.get(),...t}));async _parseAndUploadMetadata(t){let r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return c(t,"ContractMetadata")}}class l{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(e.aZ.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(e.aZ.Transaction,t)}addEventListener(t,r){let a=this.contractWrapper.readContract.interface.getEvent(t),e=this.contractWrapper.address,n={address:e,topics:[this.contractWrapper.readContract.interface.getEventTopic(a)]},s=t=>{let a=this.contractWrapper.readContract.interface.parseLog(t);r(this.toContractEvent(a.eventFragment,a.args,t))};return this.contractWrapper.getProvider().on(n,s),()=>{this.contractWrapper.getProvider().off(n,s)}}listenToAllEvents(t){let r=this.contractWrapper.address,a={address:r},e=r=>{try{let a=this.contractWrapper.readContract.interface.parseLog(r);t(this.toContractEvent(a.eventFragment,a.args,r))}catch(t){console.error("Could not parse event:",r,t)}};return this.contractWrapper.getProvider().on(a,e),()=>{this.contractWrapper.getProvider().off(a,e)}}removeEventListener(t,r){let a=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(a.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();let t=this.contractWrapper.address;this.contractWrapper.getProvider().removeAllListeners({address:t})}async getAllEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"},r=await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock),a=r.sort((r,a)=>"desc"===t.order?a.blockNumber-r.blockNumber:r.blockNumber-a.blockNumber);return this.parseEvents(a)}async getEvents(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"},a=this.contractWrapper.readContract.interface.getEvent(t),e=r.filters?a.inputs.map(t=>r.filters[t.name]):[],n=this.contractWrapper.readContract.filters[a.name](...e),s=await this.contractWrapper.readContract.queryFilter(n,r.fromBlock,r.toBlock),o=s.sort((t,a)=>"desc"===r.order?a.blockNumber-t.blockNumber:t.blockNumber-a.blockNumber);return this.parseEvents(o)}parseEvents(t){return t.map(t=>{let r=Object.fromEntries(Object.entries(t).filter(t=>"function"!=typeof t[1]&&"args"!==t[0]));if(t.args){let a=Object.entries(t.args),e=a.slice(a.length/2,a.length),n={};for(let[t,r]of e)n[t]=r;return{eventName:t.event||"",data:n,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}})}toContractEvent(t,r,a){let e=Object.fromEntries(Object.entries(a).filter(t=>"function"!=typeof t[1]&&"args"!==t[0])),n={};return t.inputs.forEach((t,a)=>{if(Array.isArray(r[a])){let e=t.components;if(e){let s=r[a];if("tuple[]"===t.type){let r=[];for(let t=0;t<s.length;t++){let a=s[t],n={};for(let t=0;t<e.length;t++){let r=e[t].name;n[r]=a[t]}r.push(n)}n[t.name]=r}else{let r={};for(let t=0;t<e.length;t++){let a=e[t].name;r[a]=s[t]}n[t.name]=r}}}else n[t.name]=r[a]}),{eventName:t.name,data:n,transaction:e}}}class h{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){let a=await (0,n.c)(this.contractWrapper.getProvider(),await this.contractWrapper.populateTransaction(t,r));return s.formatEther(a)}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){let t=await this.contractWrapper.getProvider().getGasPrice();return s.formatUnits(t,"gwei")}}class d{featureName=e.cK.name;constructor(t,r,a){this.contractWrapper=t,this.metadata=r,this.storage=a}async get(){return c(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):(0,o.ov)((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}set=(0,n.f)(async t=>c(this.contractWrapper,"AppURI")?n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t}))}},72555:function(t,r,a){a.d(r,{C:function(){return e}});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},1838:function(t,r,a){a.r(r),a.d(r,{Vote:function(){return g}});var e,n=a(2593),s=a(32046),o=a(61744),c=a(64146),i=a(43277),p=a(2515),l=a(23437),h=a(21919),d=a(72555);let u=((e={})[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain",e);a(13550),a(77191),a(54146);class g{get chainId(){return this._chainId}constructor(t,r,a){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.cs(t,r,n,e,a);this._chainId=s,this.abi=p.bj.parse(n||[]),this.contractWrapper=o,this.storage=a,this.metadata=new h.C(this.contractWrapper,p.cp,this.storage),this.app=new h.b(this.contractWrapper,this.metadata,this.storage),this.encoder=new i.C(this.contractWrapper),this.estimator=new h.G(this.contractWrapper),this.events=new h.a(this.contractWrapper),this.interceptor=new d.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){let r=await this.getAll(),a=r.filter(r=>r.proposalId.eq(n.O$.from(t)));if(0===a.length)throw Error("proposal not found");return a[0]}async getAll(){let t=await this.contractWrapper.read("getAllProposals",[])??[],r=await Promise.all(t.map(t=>Promise.all([this.contractWrapper.read("state",[t.proposalId]),this.getProposalVotes(t.proposalId)])));return r.map((r,a)=>{let[e,n]=r,s=t[a];return{proposalId:s.proposalId,proposer:s.proposer,description:s.description,startBlock:s.startBlock,endBlock:s.endBlock,state:e,votes:n,executions:s[3].map((t,r)=>({toAddress:s.targets[r],nativeTokenValue:t,transactionData:s.calldatas[r]}))}})}async getProposalVotes(t){let r=await this.contractWrapper.read("proposalVotes",[t]);return[{type:u.Against,label:"Against",count:r.againstVotes},{type:u.For,label:"For",count:r.forVotes},{type:u.Abstain,label:"Abstain",count:r.abstainVotes}]}async hasVoted(t,r){return r||(r=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await (0,p.aL)(r)])}async canExecute(t){await this.ensureExists(t);let r=await this.get(t),a=r.executions.map(t=>t.toAddress),e=r.executions.map(t=>t.nativeTokenValue),n=r.executions.map(t=>t.transactionData),o=s.id(r.description);try{return await this.contractWrapper.callStatic().execute(a,e,n,o),!0}catch(t){return!1}}async balance(){let t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:o.formatUnits(t,18)}}async balanceOfToken(t){let r=(await Promise.resolve().then(a.t.bind(a,49242,19))).default,e=new c.CH(await (0,p.aL)(t),r,this.contractWrapper.getProvider());return await (0,i.a)(this.contractWrapper.getProvider(),t,await e.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch(r){throw Error(`Proposal ${t} not found`)}}async settings(){let[t,r,a,e,n]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),s=await (0,i.f)(this.contractWrapper.getProvider(),a);return{votingDelay:t.toString(),votingPeriod:r.toString(),votingTokenAddress:a,votingTokenMetadata:s,votingQuorumFraction:e.toString(),proposalTokenThreshold:n.toString()}}propose=(0,l.f)(async(t,r)=>{r||(r=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);let a=r.map(t=>t.toAddress),e=r.map(t=>t.nativeTokenValue),n=r.map(t=>t.transactionData);return l.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[a,e,n,t],parse:t=>({id:this.contractWrapper.parseLogs("ProposalCreated",t?.logs)[0].args.proposalId,receipt:t})})});vote=(0,l.f)((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await t.ensureExists(r),l.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[r,a,e]})}})());execute=(0,l.f)(async t=>{await this.ensureExists(t);let r=await this.get(t),a=r.executions.map(t=>t.toAddress),e=r.executions.map(t=>t.nativeTokenValue),n=r.executions.map(t=>t.transactionData),o=s.id(r.description);return l.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[a,e,n,o]})});async prepare(t,r,a){return l.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}}}]);
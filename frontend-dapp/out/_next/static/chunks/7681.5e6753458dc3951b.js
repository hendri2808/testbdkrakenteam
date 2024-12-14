"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7681],{7681:function(t,e,a){a.d(e,{D:function(){return g}});var r=a(61744),i=a(16441),s=a(2593),o=a(21046),l=a(9279),n=a(29251),c=a(64063),p=a.n(c),h=a(2515),d=a(93626),m=a(43277),u=a(21919),C=a(23437);class g{constructor(t,e,a){this.storage=a,this.contractWrapper=t,this.metadata=e}async getActive(t){let[e,a,r]=await Promise.all([this.get(),this.metadata.get(),this.getTokenDecimals()]);return await (0,d.y)(e,r,this.contractWrapper.getProvider(),a.merkle||{},this.storage,t?.withAllowList||!1)}async get(t){if(this.isLegacySinglePhaseDrop(this.contractWrapper)){let t=await this.contractWrapper.read("claimCondition",[]);return(0,d.z)(t)}if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){let e=void 0!==t?t:await this.contractWrapper.read("getActiveClaimConditionId",[]),a=await this.contractWrapper.read("getClaimConditionById",[e]);return(0,d.z)(a)}if(this.isNewSinglePhaseDrop(this.contractWrapper)){let t=await this.contractWrapper.read("claimCondition",[]);return(0,d.A)(t)}if(this.isNewMultiphaseDrop(this.contractWrapper)){let e=void 0!==t?t:await this.contractWrapper.read("getActiveClaimConditionId",[]),a=await this.contractWrapper.read("getClaimConditionById",[e]);return(0,d.A)(a)}throw Error("Contract does not support claim conditions")}async getAll(t){if(!(this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)))return[await this.getActive(t)];{let[e,a]=await this.contractWrapper.read("claimCondition",[]),r=e.toNumber(),i=a.toNumber(),s=[];for(let t=r;t<r+i;t++)s.push(this.get(t));let[o,l,...n]=await Promise.all([this.metadata.get(),this.getTokenDecimals(),...s]);return Promise.all(n.map(e=>(0,d.y)(e,l,this.contractWrapper.getProvider(),o.merkle,this.storage,t?.withAllowList||!1)))}}async canClaim(t,e){return e&&(e=await (0,h.aL)(e)),0===(await this.getClaimIneligibilityReasons(t,e)).length}async getClaimIneligibilityReasons(t,e){let l,n;let c=[];if(void 0===e)try{e=await this.contractWrapper.getSignerAddress()}catch(t){console.warn("failed to get signer address",t)}if(!e)return[d.C.NoWallet];let[p,u]=await Promise.all([(0,h.aL)(e),this.getTokenDecimals()]),C=r.parseUnits(h.cw.parse(t),u);try{n=await this.getActive()}catch(t){if((0,h.B)(t,"!CONDITION")||(0,h.B)(t,"no active mint condition")||(0,h.B)(t,"DropNoActiveCondition"))return c.push(d.C.NoClaimConditionSet),c;return console.warn("failed to get active claim condition",t),c.push(d.C.Unknown),c}if("unlimited"!==n.availableSupply){let t=r.parseUnits(n.availableSupply,u);if(t.lt(C))return c.push(d.C.NotEnoughSupply),c}let g=i.stripZeros(n.merkleRootHash),w=g.length>0,f=null;if(w){if(!(f=await this.getClaimerProofs(p))&&(this.isLegacySinglePhaseDrop(this.contractWrapper)||this.isLegacyMultiPhaseDrop(this.contractWrapper)))return c.push(d.C.AddressNotAllowed),c;if(f)try{let e;let a=await this.prepareClaim(t,!1,u,p);if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){if(l=await this.contractWrapper.read("getActiveClaimConditionId",[]),[e]=await this.contractWrapper.read("verifyClaimMerkleProof",[l,p,t,a.proofs,a.maxClaimable]),!e)return c.push(d.C.AddressNotAllowed),c}else if(this.isLegacySinglePhaseDrop(this.contractWrapper)){if([e]=await this.contractWrapper.read("verifyClaimMerkleProof",[p,t,{proof:a.proofs,maxQuantityInAllowlist:a.maxClaimable}]),!e)return c.push(d.C.AddressNotAllowed),c}else this.isNewSinglePhaseDrop(this.contractWrapper)?await this.contractWrapper.read("verifyClaim",[p,t,a.currencyAddress,a.price,{proof:a.proofs,quantityLimitPerWallet:a.maxClaimable,currency:a.currencyAddressInProof,pricePerToken:a.priceInProof}]):this.isNewMultiphaseDrop(this.contractWrapper)&&(l=await this.contractWrapper.read("getActiveClaimConditionId",[]),await this.contractWrapper.read("verifyClaim",[l,p,t,a.currencyAddress,a.price,{proof:a.proofs,quantityLimitPerWallet:a.maxClaimable,currency:a.currencyAddressInProof,pricePerToken:a.priceInProof}]))}catch(e){console.warn("Merkle proof verification failed:","reason"in e?e.reason||e.errorName:e);let t=e.reason||e.errorName;switch(t){case"!Qty":case"DropClaimExceedLimit":c.push(d.C.OverMaxClaimablePerWallet);break;case"!PriceOrCurrency":case"DropClaimInvalidTokenPrice":c.push(d.C.WrongPriceOrCurrency);break;case"!MaxSupply":case"DropClaimExceedMaxSupply":c.push(d.C.NotEnoughSupply);break;case"cant claim yet":case"DropClaimNotStarted":c.push(d.C.ClaimPhaseNotStarted);break;default:c.push(d.C.AddressNotAllowed)}return c}}if(this.isNewSinglePhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){let t=s.O$.from(0),e=(0,d.D)(n.maxClaimablePerWallet,u);try{t=await this.getSupplyClaimedByWallet(p)}catch(t){}if(f&&(e=(0,d.D)(f.maxClaimable,u)),e.gt(0)&&e.lt(t.add(C)))return c.push(d.C.OverMaxClaimablePerWallet),c;if((!w||w&&!f)&&(e.lte(t)||e.eq(0)))return c.push(d.C.AddressNotAllowed),c}if(this.isLegacySinglePhaseDrop(this.contractWrapper)||this.isLegacyMultiPhaseDrop(this.contractWrapper)){let[t,e]=[s.O$.from(0),s.O$.from(0)];this.isLegacyMultiPhaseDrop(this.contractWrapper)?(l=await this.contractWrapper.read("getActiveClaimConditionId",[]),[t,e]=await this.contractWrapper.read("getClaimTimestamp",[l,p])):this.isLegacySinglePhaseDrop(this.contractWrapper)&&([t,e]=await this.contractWrapper.read("getClaimTimestamp",[p]));let a=s.O$.from(Date.now()).div(1e3);if(t.gt(0)&&a.lt(e))return e.eq(o.Bz)?c.push(d.C.AlreadyClaimed):c.push(d.C.WaitBeforeNextClaimTransaction),c}if(n.price.gt(0)&&(0,h.d8)()){let e=n.price.mul(s.O$.from(t)),r=this.contractWrapper.getProvider();if((0,m.i)(n.currencyAddress)){let t=await r.getBalance(p);t.lt(e)&&c.push(d.C.NotEnoughTokens)}else{let t=(await Promise.resolve().then(a.t.bind(a,49242,19))).default,i=new h.cs(r,n.currencyAddress,t,{},this.storage),s=await i.read("balanceOf",[p]);s.lt(e)&&c.push(d.C.NotEnoughTokens)}}return c}async getClaimerProofs(t,e){let a=await this.get(e),r=a.merkleRoot,s=i.stripZeros(r);if(!(s.length>0))return null;{let[e,a]=await Promise.all([this.metadata.get(),(0,h.aL)(t)]);return await (0,d.f)(a,r.toString(),e.merkle,this.contractWrapper.getProvider(),this.storage,this.getSnapshotFormatVersion())}}async getSupplyClaimedByWallet(t){let e=await (0,h.aL)(t);if(this.isNewSinglePhaseDrop(this.contractWrapper))return await this.contractWrapper.read("getSupplyClaimedByWallet",[e]);if(this.isNewMultiphaseDrop(this.contractWrapper)){let t=await this.contractWrapper.read("getActiveClaimConditionId",[]);return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,e])}throw Error("This contract does not support the getSupplyClaimedByWallet function")}set=(0,C.f)((()=>{var t=this;return async function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e;if(t.isLegacySinglePhaseDrop(t.contractWrapper)||t.isNewSinglePhaseDrop(t.contractWrapper)){if(a=!0,0===e.length)r=[{startTime:new Date(0),currencyAddress:l.d,price:0,maxClaimableSupply:0,maxClaimablePerWallet:0,waitInSeconds:0,merkleRootHash:i.hexZeroPad([0],32),snapshot:[]}];else if(e.length>1)throw Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed")}(t.isNewSinglePhaseDrop(t.contractWrapper)||t.isNewMultiphaseDrop(t.contractWrapper))&&r.forEach(t=>{if(t.snapshot&&t.snapshot.length>0&&(void 0===t.maxClaimablePerWallet||"unlimited"===t.maxClaimablePerWallet))throw Error("maxClaimablePerWallet must be set to a specific value when an allowlist is set.\nExample: Set it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist.\ncontract.claimConditions.set([{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])");if(t.snapshot&&t.snapshot.length>0&&t.maxClaimablePerWallet?.toString()==="0"&&0===t.snapshot.map(t=>"string"==typeof t?0:Number(t.maxClaimable?.toString()||0)).reduce((t,e)=>t+e,0))throw Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.")});let{snapshotInfos:s,sortedConditions:o}=await (0,d.H)(r,await t.getTokenDecimals(),t.contractWrapper.getProvider(),t.storage,t.getSnapshotFormatVersion()),n={};s.forEach(t=>{n[t.merkleRoot]=t.snapshotUri});let c=await t.metadata.get(),h=[];if(!p()(c.merkle,n)){let e=await t.metadata.parseInputMetadata({...c,merkle:n}),a=await t.metadata._parseAndUploadMetadata(e);if((0,u.h)("setContractURI",t.contractWrapper)){let e=new m.C(t.contractWrapper);h.push(e.encode("setContractURI",[a]))}else throw Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.")}let g=t.contractWrapper,w=new m.C(g);if(t.isLegacySinglePhaseDrop(g)){let t=new m.C(g);h.push(t.encode("setClaimConditions",[(0,d.I)(o[0]),a]))}else if(t.isLegacyMultiPhaseDrop(g))h.push(w.encode("setClaimConditions",[o.map(d.I),a]));else if(t.isNewSinglePhaseDrop(g))h.push(w.encode("setClaimConditions",[(0,d.J)(o[0]),a]));else if(t.isNewMultiphaseDrop(g))h.push(w.encode("setClaimConditions",[o.map(d.J),a]));else throw Error("Contract does not support claim conditions");if((0,u.h)("multicall",t.contractWrapper))return C.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[h]});throw Error("Contract does not support multicall")}})());update=(0,C.f)(async(t,e)=>{let a=await this.getAll(),r=await (0,d.K)(t,e,a);return await this.set.prepare(r)});async getTokenDecimals(){return(0,u.d)(this.contractWrapper,"ERC20")?this.contractWrapper.read("decimals",[]):Promise.resolve(0)}async prepareClaim(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,[i,s]=await Promise.all([r||this.contractWrapper.getSignerAddress(),this.getActive()]);return(0,d.E)(i,t,s,async()=>(await this.metadata.get()).merkle,a,this.contractWrapper,this.storage,e,this.getSnapshotFormatVersion())}async getClaimArguments(t,e,a){let r=await (0,h.aL)(t);return this.isLegacyMultiPhaseDrop(this.contractWrapper)?[r,e,a.currencyAddress,a.price,a.proofs,a.maxClaimable]:this.isLegacySinglePhaseDrop(this.contractWrapper)?[r,e,a.currencyAddress,a.price,{proof:a.proofs,maxQuantityInAllowlist:a.maxClaimable},n.Y0("")]:[r,e,a.currencyAddress,a.price,{proof:a.proofs,quantityLimitPerWallet:a.maxClaimable,pricePerToken:a.priceInProof,currency:a.currencyAddressInProof},n.Y0("")]}async getClaimTransaction(t,e,a){if(a?.pricePerToken)throw Error("Price per token is be set via claim conditions by calling `contract.erc721.claimConditions.set()`");let r=await this.prepareClaim(e,a?.checkERC20Allowance===void 0||a.checkERC20Allowance,await this.getTokenDecimals());return C.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:await this.getClaimArguments(t,e,r),overrides:r.overrides})}isNewSinglePhaseDrop(t){return(0,u.d)(t,"ERC721ClaimConditionsV2")||(0,u.d)(t,"ERC20ClaimConditionsV2")}isNewMultiphaseDrop(t){return(0,u.d)(t,"ERC721ClaimPhasesV2")||(0,u.d)(t,"ERC20ClaimPhasesV2")}isLegacySinglePhaseDrop(t){return(0,u.d)(t,"ERC721ClaimConditionsV1")||(0,u.d)(t,"ERC20ClaimConditionsV1")}isLegacyMultiPhaseDrop(t){return(0,u.d)(t,"ERC721ClaimPhasesV1")||(0,u.d)(t,"ERC20ClaimPhasesV1")}getSnapshotFormatVersion(){return this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isLegacySinglePhaseDrop(this.contractWrapper)?d.F.V1:d.F.V2}}}}]);
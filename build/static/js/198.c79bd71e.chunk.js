(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[198],{2376:function(e,a,t){"use strict";t.r(a);var n=t(51),l=t(13),r=t(14),s=t(16),c=t(15),m=t(0),i=t.n(m),o=t(1143),u=t(1141),h=t(1142),p=t(172),g=t(1146),d=t(1159),_=t(1160),E=t(1161),y=t(56),O=t(168),v=t(802),b=(t(803),t(816)),C=t.n(b),x=(t(812),t(813),t(795)),N=t(793),H=t.n(N),T=(t(836),function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onEditorStateChangePara=function(e){console.log("para",e),r.setState({editorState:e,paraDescription:C()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.onEditorStateChangepolicy=function(e){console.log("policy",e),r.setState({editorState1:e,policyDescription:C()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.changeHandler1=function(e){r.setState({policyActive:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.handlePolicyType=function(e){r.setState({policyType:e.target.value})},r.handleImage=function(e){r.setState({plan_image:e.target.files[0]})},r.submitHandler=function(e){e.preventDefault(),console.log(r.state)},r.state={planBenefitsCode:"",preExistingCoverage:"",Inacuteonset:"",preExMax:"",Inhospital_room:"",Inhostpital_intensive:"",Insurgeon:"",Inanesthtist:"",Inassistant_surgeon:"",Indoctors_nonsurgical:"",Inconsultant_doctor:"",Inpreadmission_tests:"",Outsurgical_room:"",Outsurgeon:"",Outanesthetist:"",Outassistant_surgeon:"",Outdoctors_nonsurgical:"",Outdiagnostic_xray:"",Outcat_scan:"",Outhostpital_emergency:"",Outprescription_drugs:"",Outambulance_services:"",Outrehabilation_braces:"",Outdental_treatment:"",Outchemotherapy:"",Outphysical_occupational:"",Outprivate_duty:"",Outpregnancy_childbirth:"",Outchiropractic_care:"",Outmisc_test_procedures:"",Outpsychotherapy:"",Outshots_injections:"",Outtelehealth:"",OutMental_Nervous_Disorder:"",Outmedical_evacuation:"",Outrepariation_remains:"",Outintercollegiate:"",Trip_HospitalAdmission_Guarantee:"",Trip_MedicalExpense_Guarantee:"",Trip_Baggage_Delay:"",Trip_Burial_Cremation:"",Trip_CheckedLostStolen_Baggage:"",Trip_FeloniousAssult_ViolentCrime:"",Trip_HospitalStay_Confinement:"",Trip_SeatBelt:"",Trip_Airbag:"",Trip_Cancellation:"",Trip_Delay:"",Trip_Interruption:"",policy_ID_fk:"",policyName_fk:"",policyUnderWriter_fk:"",policy_active_fk:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/admin/get_pt").then((function(a){e.setState({policyTypeList:a.data.data}),console.log(a.data.data)})).catch((function(e){H()("Something Went Wrong")}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(x.a,{breadCrumbTitle:" Add Plan",breadCrumbParent:"Home",breadCrumbActive:" Add Plan "}),i.a.createElement(o.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Plan")),i.a.createElement(h.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/plans/CreatedPlanList")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"PlanBenefitsCode "),i.a.createElement(E.a,{type:"text",name:"PlanBenefitsCode",placeholder:"PlanBenefitsCode",value:this.state.PlanBenefitsCode,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"PreExistingCoverage"),i.a.createElement(E.a,{type:"text",name:"preExistingCoverage",placeholder:"preExistingCoverage",value:this.state.preExisingCoverage,onChange:this.changeHandler}))," ",i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inacuteonset "),i.a.createElement(E.a,{type:"text",name:"Inacuteonset",placeholder:"Inacuteonset",value:this.state.Inacuteonset,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"preExMax "),i.a.createElement(E.a,{type:"text",name:"preExMax",placeholder:"preExMax",value:this.state.preExMax,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inhospital_room "),i.a.createElement(E.a,{type:"text",name:"Inhospital_room",placeholder:"Inhospital_room",value:this.state.Inhospital_room,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inhostpital_intensive"),i.a.createElement(E.a,{type:"text",name:"Inhostpital_intensive",placeholder:"Inhostpital_intensive",value:this.state.Inhostpital_intensive,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Insurgeon "),i.a.createElement(E.a,{type:"text",name:"Insurgeon",placeholder:"Insurgeon",value:this.state.Insurgeon,onChange:this.changeHandler}))," ",i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inanesthtist "),i.a.createElement(E.a,{type:"text",name:"Inanesthtist",placeholder:"Inanesthtist",value:this.state.Inanesthtist,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inassistant_surgeon "),i.a.createElement(E.a,{type:"text",name:"Inassistant_surgeon",placeholder:"Inassistant_surgeon",value:this.state.Inassistant_surgeon,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Indoctors Nonsurgical "),i.a.createElement(E.a,{type:"text",name:"Indoctors_nonsurgical",placeholder:"Indoctors_nonsurgical",value:this.state.Indoctors_nonsurgical,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inconsultant_doctor "),i.a.createElement(E.a,{type:"text",name:"Inconsultant_doctor",placeholder:"Purchased",value:this.state.Inconsultant_doctor,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Inpreadmission_tests "),i.a.createElement(E.a,{type:"text",name:"Inpreadmission_tests",placeholder:"Inpreadmission_tests",value:this.state.Inpreadmission_tests,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outsurgical_room "),i.a.createElement(E.a,{type:"text",name:"Outsurgical_room",placeholder:"Outsurgical_room",value:this.state.Outsurgical_room,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outsurgeon "),i.a.createElement(E.a,{type:"text",name:"Outsurgeon",placeholder:"Outsurgeon",value:this.state.Outsurgeon,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outanesthetist "),i.a.createElement(E.a,{type:"text",name:"Outanesthetist",placeholder:"Outanesthetist",value:this.state.Outanesthetist,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outassistant_surgeon "),i.a.createElement(E.a,{type:"text",name:"Outassistant_surgeon",placeholder:"Outassistant_surgeon",value:this.state.Outassistant_surgeon,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outdoctors_nonsurgical "),i.a.createElement(E.a,{type:"text",name:"Outdoctors_nonsurgical",placeholder:"Outdoctors_nonsurgical",value:this.state.Outdoctors_nonsurgical,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outdiagnostic_xray "),i.a.createElement(E.a,{type:"text",name:"Outdiagnostic_xray",placeholder:"Outdoctors_nonsurgical",value:this.state.Outdiagnostic_xray,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outcat_scan "),i.a.createElement(E.a,{type:"text",name:"Outcat_scan",placeholder:"Outdoctors_nonsurgical",value:this.state.Outcat_scan,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outhostpital_emergency "),i.a.createElement(E.a,{type:"text",name:"Outhostpital_emergency",placeholder:"Outdoctors_nonsurgical",value:this.state.Outhostpital_emergency,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outprescription_drugs "),i.a.createElement(E.a,{type:"text",name:"Outprescription_drugs",placeholder:"Outprescription_drugs",value:this.state.Outprescription_drugs,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outambulance_services "),i.a.createElement(E.a,{type:"text",name:"Outambulance_services",placeholder:"Outambulance_services",value:this.state.Outambulance_services,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outrehabilation_braces "),i.a.createElement(E.a,{type:"text",name:"Outrehabilation_braces",placeholder:"Outrehabilation_braces",value:this.state.Outrehabilation_braces,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outdental_treatment "),i.a.createElement(E.a,{type:"text",name:"Outdental_treatment",placeholder:"Outdental_treatment",value:this.state.Outdental_treatment,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outchemotherapy "),i.a.createElement(E.a,{type:"text",name:"Outchemotherapy",placeholder:"Outchemotherapy",value:this.state.Outchemotherapy,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outphysical_occupational "),i.a.createElement(E.a,{type:"text",name:"Outphysical_occupational",placeholder:"Outphysical_occupational",value:this.state.Outphysical_occupational,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outprivate_duty "),i.a.createElement(E.a,{type:"text",name:"Outprivate_duty",placeholder:"Outprivate_duty",value:this.state.Outprivate_duty,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outpregnancy_childbirth "),i.a.createElement(E.a,{type:"text",name:"Outpregnancy_childbirth",placeholder:"Outpregnancy_childbirth",value:this.state.Outpregnancy_childbirth,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outchiropractic_care "),i.a.createElement(E.a,{type:"text",name:"Outchiropractic_care",placeholder:"Outchiropractic_care",value:this.state.Outchiropractic_care,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outmisc_test_procedures "),i.a.createElement(E.a,{type:"text",name:"Outmisc_test_procedures",placeholder:"Outmisc_test_procedures",value:this.state.Outmisc_test_procedures,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outpsychotherapy "),i.a.createElement(E.a,{type:"text",name:"Outpsychotherapy",placeholder:"Outpsychotherapy",value:this.state.Outpsychotherapy,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outshots Injections "),i.a.createElement(E.a,{type:"text",name:"Outshots_injections",placeholder:"Outshots Injections",value:this.state.Outshots_injections,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"OutteleHealth "),i.a.createElement(E.a,{type:"text",name:"Outtelehealth",placeholder:"Outtelehealth",value:this.state.Outtelehealth,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"OutMental Nervous Disorder "),i.a.createElement(E.a,{type:"text",name:"OutMental_Nervous_Disorder",placeholder:"OutMental Nervous Disorder",value:this.state.OutMental_Nervous_Disorder,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outmedical Evacuation "),i.a.createElement(E.a,{type:"text",name:"Outmedical_evacuation",placeholder:"Outmedical_evacuation",value:this.state.Outmedical_evacuation,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outrepariation_remains "),i.a.createElement(E.a,{type:"text",name:"Outrepariation_remains",placeholder:"Outrepariation_remains",value:this.state.Outrepariation_remains,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outintercollegiate "),i.a.createElement(E.a,{type:"text",name:"Outintercollegiate",placeholder:"Outintercollegiate",value:this.state.Outintercollegiate,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Outaccidental_death "),i.a.createElement(E.a,{type:"text",name:"Outaccidental_death",placeholder:"Outaccidental_death",value:this.state.Outaccidental_death,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip_HospitalAdmission_Guarantee "),i.a.createElement(E.a,{type:"text",name:"Trip_HospitalAdmission_Guarantee",placeholder:"Trip_HospitalAdmission_Guarantee",value:this.state.Trip_HospitalAdmission_Guarantee,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip MedicalExpense Guarantee "),i.a.createElement(E.a,{type:"text",name:"Trip_MedicalExpense_Guarantee",placeholder:"Trip_MedicalExpense_Guarantee",value:this.state.Trip_MedicalExpense_Guarantee,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip Baggage Delay "),i.a.createElement(E.a,{type:"text",name:"Trip_Baggage_Delay",placeholder:"Trip_Baggage_Delay",value:this.state.Trip_Baggage_Delay,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip Burial Cremation "),i.a.createElement(E.a,{type:"text",name:"Trip_Burial_Cremation",placeholder:"Trip_Burial_Cremation",value:this.state.Trip_Burial_Cremation,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip CheckedLostStolen Baggage "),i.a.createElement(E.a,{type:"text",name:"Trip_CheckedLostStolen_Baggage",placeholder:"Trip_CheckedLostStolen_Baggage",value:this.state.Trip_CheckedLostStolen_Baggage,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip FeloniousAssult ViolentCrime "),i.a.createElement(E.a,{type:"text",name:"Trip_FeloniousAssult_ViolentCrime",placeholder:"Trip_FeloniousAssult_ViolentCrime",value:this.state.Trip_FeloniousAssult_ViolentCrime,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip HospitalStay Confinement "),i.a.createElement(E.a,{type:"text",name:"Trip_HospitalStay_Confinement",placeholder:"Trip_HospitalStay_Confinement",value:this.state.Trip_HospitalStay_Confinement,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip SeatBelt "),i.a.createElement(E.a,{type:"text",name:"Trip_SeatBelt",placeholder:"Trip_SeatBelt",value:this.state.Trip_SeatBelt,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip Airbag "),i.a.createElement(E.a,{type:"text",name:"Trip_Airbag",placeholder:"Trip_Airbag",value:this.state.Trip_Airbag,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip Cancellation "),i.a.createElement(E.a,{type:"text",name:"Trip_Cancellation",placeholder:"Trip_Cancellation",value:this.state.Trip_Cancellation,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip Delay "),i.a.createElement(E.a,{type:"text",name:"Trip_Delay",placeholder:"Trip_Delay",value:this.state.Trip_Delay,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Trip_Interruption "),i.a.createElement(E.a,{type:"text",name:"Trip_Interruption",placeholder:"Trip_Interruption",value:this.state.Trip_Interruption,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Policy_ID_fk "),i.a.createElement(E.a,{type:"text",name:"policy_ID_fk",placeholder:"policy_ID_fk",value:this.state.policy_ID_fk,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"PolicyName_fk "),i.a.createElement(E.a,{type:"text",name:"policyName_fk",placeholder:"policyName_fk",value:this.state.policyName_fk,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"PolicyUnderWriter_fk "),i.a.createElement(E.a,{type:"text",name:"policyUnderWriter_fk",placeholder:"policyUnderWriter_fk",value:this.state.policyUnderWriter_fk,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"4",md:"4",sm:"12",className:"mb-2"},i.a.createElement(_.a,null,"Policy Active_fk "),i.a.createElement(E.a,{type:"text",name:"policy_active_fk",placeholder:"policy_active_fk",value:this.state.policy_active_fk,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),i.a.createElement(u.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(i.a.Component));a.default=T}}]);
//# sourceMappingURL=198.c79bd71e.chunk.js.map
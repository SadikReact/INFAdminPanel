(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{2382:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),l=t(16),i=t(15),c=t(0),o=t.n(c),d=t(1141),s=t(1142),m=t(1143),u=t(172),f=t(1146),p=t(787),g=t(790),v=t(788),h=t(786),E=t(1161),w=t(168),N=t(169),b=t(796),S=t(301),P=t(437),D=t(259),k=(t(797),t(564),t(56)),x=t(793),z=t.n(x),R=t(836),y=t.n(R),A=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(a){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(k.b,{render:function(e){var t=e.history;return o.a.createElement(S.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return t.push({pathname:"/app/plans/EditPlanDetail/".concat(a.data._id),state:a.data})}})}}),o.a.createElement(P.a,{size:25,color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}},{headerName:"Plan Name",field:"planname",width:200,cellRendererFramework:function(e){var a,t;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.planname)||void 0===t?void 0:t.planName))}},{headerName:"Title",field:"Title",width:150,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.title))}},{headerName:"Upload Image",field:"Image",width:200,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.upload_pdf))}},{headerName:"Plan Max",field:"Max",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.plan_max))}},{headerName:"Plan Deductible",field:"Deductible",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.plan_deductible))}},{headerName:"CoverageAmt",field:"coverageAmt",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.coverageAmt))}},{headerName:"StartDate",field:"start_date",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.start_date))}},{headerName:"EndDate",field:"end_date",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.end_date))}},{headerName:"Total",field:"total",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.total))}},{headerName:"Email",field:"email",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.email))}},{headerName:"coverage_area",field:"Coverage Area",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.coverage_area))}},{headerName:"DOB",field:"dob",width:120,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.dob))}},{headerName:"Description",field:"description",width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,y()(e.data.short_desc)))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("/user/bmiPlanList").then((function(a){console.log(a.data);var t=a.data;e.setState({rowData:t})}))}},{key:"runthisfunction",value:function(e){var a=this;z()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":w.a.delete("/admin/dlt_infPlan/".concat(e)).then((function(e){a.getOptionDataList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return o.a.createElement(d.a,{className:"app-user-list"},o.a.createElement(s.a,{sm:"12"}),o.a.createElement(s.a,{sm:"12"},o.a.createElement(m.a,null,o.a.createElement(s.a,{sm:"12"}),o.a.createElement(d.a,{className:"m-2"},o.a.createElement(s.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"PlanDetail List")),o.a.createElement(s.a,{className:""},o.a.createElement(k.b,{render:function(e){var a=e.history;return o.a.createElement(u.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/plans/AddPlanDetail")}},"AddPlanDetail")}}))),o.a.createElement(f.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(p.a,{className:"p-1 ag-dropdown"},o.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1),"-",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(D.a,{className:"ml-50",size:15})),o.a.createElement(v.a,{right:!0},o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(u.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(N.a.Consumer,null,(function(a){return o.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(o.a.Component);a.default=A}}]);
//# sourceMappingURL=146.f08222b0.chunk.js.map
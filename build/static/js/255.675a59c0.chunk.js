(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[255],{2460:function(e,a,t){"use strict";t.r(a);var i=t(13),r=t(14),n=t(16),l=t(15),c=t(0),o=t.n(c),s=t(1143),d=t(1146),m=t(787),u=t(790),g=t(788),f=t(786),h=t(1161),p=t(172),S=t(796),b=t(169),w=t(259),z=(t(42),t(797),t(795)),v=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"First Name",field:"firstname",width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Last Name",field:"lastname",filter:!0,width:175},{headerName:"Email",field:"email",filter:!0,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Company",field:"company",filter:!0,width:250},{headerName:"City",field:"city",filter:!0,width:150},{headerName:"Country",field:"country",filter:!0,width:150},{headerName:"State",field:"state",filter:!0,width:125},{headerName:"Zip",field:"zip",filter:"agNumberColumnFilter",width:140},{headerName:"Followers",field:"followers",filter:"agNumberColumnFilter",width:140}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,r=a.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{breadCrumbTitle:"Aggrid Table",breadCrumbParent:"Forms & Tables",breadCrumbActive:"Aggrid Table"}),o.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(m.a,{className:"p-1 ag-dropdown"},o.a.createElement(u.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(w.a,{className:"ml-50",size:15})),o.a.createElement(g.a,{right:!0},o.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(h.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(b.a.Consumer,null,(function(a){return o.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(o.a.Component);a.default=v}}]);
//# sourceMappingURL=255.675a59c0.chunk.js.map
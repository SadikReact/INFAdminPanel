(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[249],{2360:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),r=a(16),l=a(15),c=a(0),s=a.n(c),o=a(1141),u=a(1142),d=a(1143),m=a(172),p=a(1146),g=a(787),f=a(790),h=a(788),E=a(786),v=a(1161),S=a(168),w=a(796),b=a(169),z=a(301),D=a(437),y=a(259),N=(a(797),a(56)),P=a(793),x=a.n(P),C=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Expiry Date",field:"expDate",width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.expDate))}},{headerName:"Actions",field:"sortorder",width:120,cellRendererFramework:function(t){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(N.b,{render:function(e){var a=e.history;return s.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push("/app/trade/expdate/editDate/".concat(t.data._id))}})}}),s.a.createElement(D.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.updateList=function(){S.a.get("/admin/datelist").then((function(t){var a=t.data.data;e.setState({rowData:a})}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updateList()}},{key:"runthisfunction",value:function(e){var t=this;x()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":S.a.get("/admin/dltDate/".concat(e)).then((function(e){t.updateList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return s.a.createElement(o.a,{className:"app-user-list"},s.a.createElement(u.a,{sm:"12"}),s.a.createElement(u.a,{sm:"12"},s.a.createElement(d.a,null,s.a.createElement(o.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Date List")),s.a.createElement(u.a,{className:"pt-4"},s.a.createElement(N.b,{render:function(e){var t=e.history;return s.a.createElement(m.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/trade/expdate/addDate")}},"Add Date")}}))),s.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(y.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(b.a.Consumer,null,(function(t){return s.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(s.a.Component);t.default=C}}]);
//# sourceMappingURL=249.c8e404d4.chunk.js.map
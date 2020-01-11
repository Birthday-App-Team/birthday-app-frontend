(this["webpackJsonpbirthday-app"]=this["webpackJsonpbirthday-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.81f66d31.png"},21:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(19),o=a.n(s),l=(a(9),a(2)),c=a(3),i=a(5),d=a(4),m=a(6),h=a(7),u=a.n(h),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={updatedName:a.props.name,updatedDOB:a.props.dateOfBirth.slice(0,10),updatedInterests:a.props.text,updatedNumber:a.props.number,showDropdown:!1,showModal:!1},a.formatDateDisplay=function(e){return a.props.isBirthdayToday?n.a.createElement("div",null,n.a.createElement("h2",{className:"birthday-today"},"turns ",e.nextAge," today! ",n.a.createElement("i",{className:"fa fa-birthday-cake mx-2"})),n.a.createElement("h3",null,u()(e.dateOfBirth).format("MMM Do"))):n.a.createElement("div",null,n.a.createElement("h2",null,a.props.nextBirthday.fromNow()),n.a.createElement("h3",null,"turns ",n.a.createElement("span",{className:"years"},e.nextAge)," on"," ",u()(e.dateOfBirth).format("MMM Do")))},a.handleClickDelete=function(){a.props.deleteBirthdayFunc(a.props.id)},a.handleClickDropdown=function(){!1===a.state.showDropdown?a.setState({showDropdown:!0}):a.setState({showDropdown:!1})},a.handleClickEdit=function(){!1===a.state.showModal&&a.setState({showModal:!0})},a.updateName=function(e){a.setState({updatedName:e.target.value})},a.updateBirthday=function(e){a.setState({updatedDOB:e.target.value})},a.updateInterests=function(e){a.setState({updatedInterests:e.target.value})},a.updateNumber=function(e){a.setState({updatedNumber:e.target.value})},a.handleModalDismiss=function(){a.setState({showModal:!1})},a.handleUpdate=function(){console.log(a.state),""===a.state.updatedDOB?a.setState({updatedDOB:"-"}):a.props.editBirthdayFunc(a.props.id,a.state.updatedName,a.state.updatedDOB,a.state.updatedInterests,a.state.updatedNumber),a.setState({showModal:!1})},a.giftByAge=function(){return a.props.nextAge<2?"https://www.amazon.co.uk/b?ie=UTF8&node=8661766031":a.props.nextAge>=2&&a.props.nextAge<=3?"https://www.amazon.co.uk/gcx/Gifts-for-Toddlers/gfhz/?categoryId=toddler-neutral":a.props.nextAge>=4&&a.props.nextAge<=7?"https://www.amazon.co.uk/gcx/Gifts-for-Kids-4-7/gfhz/?categoryId=kid4-neutral":a.props.nextAge>=8&&a.props.nextAge<=12?"https://www.amazon.com/gcx/Gifts-for-Kids-8-12/gfhz/?categoryId=kid8-neutral":a.props.nextAge>=13&&a.props.nextAge<=17?"https://www.amazon.com/gcx/Gifts-for-Teens/gfhz/?categoryId=teen-neutral":"https://www.amazon.co.uk/gcx/Gifts-for-Everyone/gfhz/?categoryId=adult-neutral"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:this.state.showModal?"modal isVisible":"modal ",id:"modalEditForm",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header text-center"},n.a.createElement("h4",{className:"modal-title makeItPink"},"Edit ",this.props.name,"'s info"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:this.handleModalDismiss},n.a.createElement("span",{"aria-hidden":"true",className:"makeItPink"},"\xd7"))),n.a.createElement("div",{className:"modal-body mx-3"},n.a.createElement("div",{className:"md-form"},n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Edit name:"),n.a.createElement("textarea",{type:"text",id:"form8",className:"md-textarea form-control",rows:"1",value:this.state.updatedName,onChange:this.updateName})),n.a.createElement("br",null),n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Edit birthday:"),n.a.createElement("div",{className:"md-form"},n.a.createElement("input",{className:"form-control",type:"date",value:this.state.updatedDOB,onChange:this.updateBirthday})),n.a.createElement("div",{className:"md-form"},n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Edit Number:"),n.a.createElement("input",{className:"form-control",type:"tel",value:this.state.updatedNumber,onChange:this.updateNumber})),n.a.createElement("div",{className:"md-form"},n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Edit interests:"),n.a.createElement("textarea",{type:"text",id:"form8",className:"md-textarea form-control",rows:"2",value:this.state.updatedInterests,onChange:this.updateInterests}))),n.a.createElement("div",{className:"modal-footer d-flex justify-content-center"},n.a.createElement("button",{className:"btn btn-unique done-button",onClick:this.handleUpdate},"Done"))))),n.a.createElement("div",{className:"col-12 col-sm-5"},n.a.createElement("button",{className:"btn info-dropdown",onClick:this.handleClickDropdown},n.a.createElement("i",{className:"fa fa-caret-down"})),n.a.createElement("h1",null,this.props.name)),n.a.createElement("div",{className:"col-8 col-sm-4"},this.formatDateDisplay(this.props)),n.a.createElement("div",{className:"col-4 col-sm-3"},n.a.createElement("button",{className:"btn delete",onClick:this.handleClickDelete},n.a.createElement("i",{className:"fa fa-trash"})),n.a.createElement("button",{className:"btn edit",onClick:this.handleClickEdit},n.a.createElement("i",{className:"fa fa-pencil"}))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-10",style:{display:this.state.showDropdown?"inline":"none"}},n.a.createElement("span",{className:"card interests"},"INTERESTS: ",this.props.text),n.a.createElement("span",{className:"card interests"},"PHONE NUMBER: ",this.props.number),n.a.createElement("button",{type:"button",className:"btn gift ml-2"},n.a.createElement("a",{href:this.giftByAge(),target:"blank"},n.a.createElement("i",{className:"fa fa-gift"}))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("hr",{className:"rule"}))))}}]),t}(n.a.Component),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",note:"",gender:"",showModal:!1,birthday:"",number:""},a.handleClick=function(){a.setState({showModal:!0})},a.handleModalDismiss=function(){a.setState({showModal:!1})},a.handleClickAdd=function(){""===a.state.name&&""===a.state.birthday&&""===a.state.note&&""===a.state.number?a.setState({showModal:!1}):(a.props.addBirthdayFunc(a.state.name,a.state.birthday,a.state.note,a.state.number),a.setState({showModal:!1})),a.setState({name:"",note:"",birthday:"",number:""}),console.log(a.state.name)},a.updateNoteText=function(e){a.setState({note:e.target.value})},a.handleBirthday=function(e){a.setState({birthday:e.target.value})},a.handleNewName=function(e){a.setState({name:e.target.value})},a.handleNewNumber=function(e){a.setState({number:e.target.value})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"col-2"},n.a.createElement("button",{id:"addButton",className:"btn add-button",onClick:this.handleClick},n.a.createElement("i",{className:"fa fa-plus"}," "))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:this.state.showModal?"modal isVisible":"modal",id:"modalEditForm",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header text-center"},n.a.createElement("span",{className:"makeItPink"},"add a birthday..."),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:this.handleModalDismiss},n.a.createElement("span",{"aria-hidden":"true",className:"makeItPink"},"\xd7"))),n.a.createElement("div",{className:"modal-body mx-3"},n.a.createElement("div",{className:"md-form"},n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Name:"),n.a.createElement("textarea",{type:"text",id:"form8",className:"md-textarea form-control",rows:"1",placeholder:"Name",onChange:this.handleNewName})),n.a.createElement("br",null),n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Birthday:"),n.a.createElement("div",{className:"form-group mx-sm-3 mb-2 row"},n.a.createElement("input",{className:"form-control col-12",type:"date",onChange:this.handleBirthday})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"tel-input",for:"example-tel-input",className:"col-12 col-form-label",placeholder:"+44"},"Phone Number:"),n.a.createElement("br",null),n.a.createElement("div",{className:"col-12"},n.a.createElement("input",{className:"md-textarea form-control",type:"tel",id:"tel-input",onChange:this.handleNewNumber}))),n.a.createElement("div",{className:"md-form"},n.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"form8"},"Interests:"),n.a.createElement("textarea",{type:"text",id:"form8",className:"md-textarea form-control",rows:"2",placeholder:"Add notes here",onChange:this.updateNoteText}))),n.a.createElement("div",{className:"modal-footer d-flex justify-content-center"},n.a.createElement("button",{className:"btn btn-unique done-button",onClick:this.handleClickAdd},"Done")))))))}}]),t}(n.a.Component),y=a(20),b=a.n(y),E=a(8),g=a.n(E),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={showDropdown:!1},a.handleClickDropdown=function(){!1===a.state.showDropdown?a.setState({showDropdown:!0}):a.setState({showDropdown:!1})},a.updateSearch=function(e){a.props.startSearchFunc(e.target.value)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2 col-md-1"},n.a.createElement("button",{id:"searchButton",className:"btn search-button",onClick:this.handleClickDropdown},n.a.createElement("i",{className:"fa fa-search"}))),n.a.createElement("div",{className:"col-10 col-md-5",style:{display:this.state.showDropdown?"inline":"none"}},n.a.createElement("textarea",{type:"text",id:"form8",className:"col - 6 form-control search",rows:"1",placeholder:"Search",value:this.props.search,onChange:this.updateSearch})))}}]),t}(n.a.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={birthdays:[],search:""},a.calcNextBirthdayAndAge=function(e){return e.map((function(e){var t=u()(e.date_of_birth),a=u()().startOf("day").diff(e.date_of_birth,"years")+1;return e.nextAge=a,e.nextBirthday=t.add(a,"years"),e}))},a.identifyBirthdaysToday=function(e){return e.map((function(e){var t=u()().format("MM-DD"),a=e.nextBirthday.format("MM-DD");return e.isBirthdayToday=!1,t===a&&(e.isBirthdayToday=!0,e.nextBirthday=e.nextBirthday.subtract(1,"years"),e.nextAge=e.nextAge-1),e}))},a.sortBirthdays=function(e){return e.sort((function(e,t){return e.nextBirthday.isAfter(t.nextBirthday)?1:-1})),e},a.search=function(e){a.setState({search:e})},a.searchBirthdays=function(e){if(""===a.state.search)return e;var t=e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.state.search)}));return console.log(t),t},a.deleteBirthday=function(e){g.a.delete("https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays/"+e).then((function(t){console.log("this is response:",t);var r=a.state.birthdays.filter((function(t){return t.birthdayID!==e}));a.setState({birthdays:r}),console.log(a.state.birthdays)})).catch((function(e){return console.log("Error deleting birthday",e)}))},a.addBirthday=function(e,t,r,n){var s=a.state.birthdays.slice(),o={name:e,date_of_birth:t,interests:r,phone_number:n};g.a.post("https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays",o).then((function(e){var t=e.data;s.push(t),a.setState({birthdays:s})})).catch((function(e){console.log("Error creating birthday",e)}))},a.editBirthday=function(e,t,r,n,s){var o={name:t,date_of_birth:r,interests:n,phone_number:s};g.a.put("https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays/"+e,o).then((function(o){var l=a.state.birthdays.map((function(a){return a.birthdayID===e&&(a.interests=n,a.name=t,a.date_of_birth=r,a.phone_number=s),a}));a.setState({birthdays:l})})).catch((function(e){return console.log("Error editing task",e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://gggyf4jhi4.execute-api.eu-west-1.amazonaws.com/dev/birthdays").then((function(t){var a=t.data;e.setState({birthdays:a})})).catch((function(e){console.log("Error getting tasks data",e)}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App "},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement(f,{addBirthdayFunc:this.addBirthday})),n.a.createElement("div",{className:"col-10"},n.a.createElement("img",{src:b.a,alt:"birthdaze logo",className:"logo",width:"233",height:"87"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(N,{startSearchFunc:this.search}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("hr",{className:"rule"}),this.searchBirthdays(this.sortBirthdays(this.identifyBirthdaysToday(this.calcNextBirthdayAndAge(this.state.birthdays)))).map((function(t){return n.a.createElement(p,{name:t.name,dateOfBirth:t.date_of_birth,text:t.interests,number:t.phone_number,key:t.birthdayID,id:t.birthdayID,nextBirthday:t.nextBirthday,nextAge:t.nextAge,isBirthdayToday:t.isBirthdayToday,editBirthdayFunc:e.editBirthday,deleteBirthdayFunc:e.deleteBirthday})})),n.a.createElement("hr",{className:"rule"}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.0dd4c43f.chunk.js.map
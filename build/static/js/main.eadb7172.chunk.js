(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{23:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,r,c,o,i,s,l,u,d=n(0),b=n.n(d),j=n(13),h=n.n(j),p=(n(23),n(18)),f=n(6),m=n(7),x=n(10),O=n(9),g=n(29),v=n(14),C=n(4),y=n(3),w=y.a.label(a||(a=Object(C.a)(["\n\tfont-size: 20px;\n\tmargin: 10px;\n\tpadding: 5px;\n\ttext-decoration: solid;\n\tcolor: rgb(107, 41, 41);\n"]))),S=y.a.button(r||(r=Object(C.a)(["\n\tmargin-left: 20px;\n\tborder-radius: 10px;\n\tpadding: 5px 15px;\n\tbackground-color: rgb(236, 145, 145);\n\tcursor: pointer;\n"]))),k=n(1),D=function(t){Object(x.a)(n,t);var e=Object(O.a)(n);function n(){var t;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.addContact=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("form",{onSubmit:this.addContact,children:[Object(k.jsxs)(w,{children:["Name:",Object(k.jsx)("input",{value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(k.jsxs)(w,{children:["Tel:",Object(k.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(k.jsx)(S,{type:"submit",children:"Add contact"})]})}}]),n}(d.Component),A=D,z=y.a.ul(c||(c=Object(C.a)(["\n\ttext-decoration: none;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]))),J=y.a.li(o||(o=Object(C.a)(["\n\tmargin: 10px;\n\ttext-decoration: underline;\n"]))),I=y.a.p(i||(i=Object(C.a)(["\n\tcolor: rgb(67, 69, 219);\n"]))),L=y.a.button(s||(s=Object(C.a)(["\n\ttext-align: center;\n\tborder-radius: 10px;\n\tpadding: 5px 15px;\n\tbackground-color: rgb(236, 145, 145);\n\tcursor: pointer;\n"]))),N=function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteContact;return Object(k.jsxs)(J,{children:[Object(k.jsx)(I,{children:n}),Object(k.jsx)(I,{children:a}),Object(k.jsx)(L,{onClick:function(){return r(e)},children:"Delete"})]})},E=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(k.jsx)(z,{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(k.jsx)(N,{id:e,name:a,number:r,onDeleteContact:n},e)}))})},F=y.a.label(l||(l=Object(C.a)(["\n\tcolor: rgb(233, 80, 80);\n\ttext-align: center;\n"]))),M=y.a.input(u||(u=Object(C.a)(["\n\ttext-align: center;\n\tmargin-right: 10px;\n"]))),T=function(t){var e=t.value,n=t.onChange;return Object(k.jsxs)(F,{children:["Find contacts by name",Object(k.jsx)(M,{type:"text",value:e,onChange:n,placeholder:"Name contact"})]})},Z=n(5),q=Object(y.a)("div")(Z.c,Z.h,Z.f,Z.d,Z.e,Z.a,Z.b,Z.g),B=function(t){Object(x.a)(n,t);var e=Object(O.a)(n);function n(){var t;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(g.a)(),name:n,number:a},c=n.toLowerCase();if(t.state.contacts.find((function(t){return t.name.toLowerCase()===c})))return alert("".concat(n," is already in contacts"));t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(p.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error}}("contacts");t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}}("contacts",n)}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(k.jsx)(q,{display:"flex",alignItems:"center",flexDirection:"column",children:Object(k.jsxs)(q,{children:[Object(k.jsx)("h1",{children:"Phonebook"}),Object(k.jsx)(A,{onSubmit:this.addContact}),Object(k.jsx)("h2",{children:"Contacts "}),Object(k.jsx)(T,{value:this.filter,onChange:this.changeFilter}),Object(k.jsx)(E,{contacts:t,onDeleteContact:this.deleteContact})]})})}}]),n}(d.Component),V=B;h.a.render(Object(k.jsx)(b.a.StrictMode,{children:Object(k.jsx)(V,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.eadb7172.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[782],{8782:function(n,e,r){r.r(e),r.d(e,{default:function(){return yn}});var t,i,o,s,a,c,u,d,l,m,p,h=r(4270),f=r(5705),x=r(6727),g=r(5218),b=r(9434),j=r(6916),Z=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.isDeleting},P=function(n){return n.contacts.isAdding},w=function(n){return n.contacts.error},k=(0,j.P1)([Z,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),z=r(3634),C={regex:/^[a-zA-Z\u0430-\u044f\u0410-\u042f.]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f. ])?[a-zA-Z\u0430-\u044f\u0410-\u042f.]*)*$/,errorMessage:"Name may contain only letters, apostrophe, dash, dot and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},A={regex:/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,errorMessage:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},N=r(2134),L=r(168),_=r(7884),q=(0,_.ZP)(f.l0)(t||(t=(0,L.Z)(["\n  max-width: 400px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),F=_.ZP.label(i||(i=(0,L.Z)(["\n  display: block;\n  width: 100%;\n"]))),I=_.ZP.span(o||(o=(0,L.Z)(["\n  display: block;\n  font-size: 14px;\n"]))),M=_.ZP.span(s||(s=(0,L.Z)(["\n  width: 100%;\n  position: relative;\n  svg {\n    position: absolute;\n    left: ",";\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(n){return n.theme.spacing(2)})),B=(0,_.ZP)(f.gN)(a||(a=(0,L.Z)(["\n  width: 100%;\n  display: block;\n  padding: 12px 40px;\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.sm})),E=(0,_.ZP)(f.Bc)(c||(c=(0,L.Z)(["\n  font-size: 12px;\n  color: #ff5549;\n"]))),R=_.ZP.button(u||(u=(0,L.Z)(["\n  margin: 0 auto;\n  min-width: 140px;\n  padding: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ",";\n  font-size: 16px;\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  svg {\n    margin-left: ",";\n  }\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.bgc}),(function(n){return n.theme.spacing(2)})),K=r(184),S=x.Ry().shape({name:x.Z_().min(3,"Enter at least 3 characters").max(25,"Too Long").trim().matches(C.regex,C.errorMessage).required("Required"),number:x.Z_().min(6,"Enter at least 6 characters").max(20,"Too Long").trim().matches(A.regex,A.errorMessage).required("Required")}),T={name:"",number:""},D=function(){var n=(0,b.I0)(),e=(0,b.v9)(Z),r=(0,b.v9)(P);return(0,K.jsx)(f.J9,{initialValues:T,onSubmit:function(r,t){var i,o,s=t.resetForm,a=(i=e,o=r.name,i.find((function(n){return n.name.toLowerCase()===o.trim().toLowerCase()}))),c=function(n,e){var r=/\D/g;return n.find((function(n){return n.number.replace(r,"")===e.trim().replace(r,"")}))}(e,r.number);a?g.ZP.error("".concat(r.name," is already in contacts")):c?g.ZP.error("This number is already saved in contacts as ".concat(c.name)):(n((0,z.uK)(r)),s())},validationSchema:S,children:(0,K.jsxs)(q,{autoComplete:"off",children:[(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{children:"Name"}),(0,K.jsxs)(M,{children:[(0,K.jsx)(N.nf1,{size:20}),(0,K.jsx)(B,{type:"text",name:"name"})]})]}),(0,K.jsx)(E,{name:"name",component:"p"}),(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{children:"Number"}),(0,K.jsxs)(M,{children:[(0,K.jsx)(N.Nhm,{size:20}),(0,K.jsx)(B,{type:"tel",name:"number"})]})]}),(0,K.jsx)(E,{name:"number",component:"p"}),(0,K.jsx)(R,{type:"submit",children:r?"Adding...":"Add contact"})]})})},J=r(2791),V=r(7840),Y=r(1273),G=_.ZP.div(d||(d=(0,L.Z)(["\n  text-align: center;\n"]))),W=_.ZP.span(l||(l=(0,L.Z)(["\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(2)})),$=_.ZP.span(m||(m=(0,L.Z)(["\n  position: relative;\n  svg {\n    position: absolute;\n    right: ",";\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(n){return n.theme.spacing(2)})),H=_.ZP.input(p||(p=(0,L.Z)(["\n  max-width: 360px;\n  padding: 12px 40px 12px 12px;\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.sm}));function O(){var n=(0,b.I0)();return(0,K.jsx)(G,{children:(0,K.jsxs)("label",{children:[(0,K.jsx)(W,{children:"Find contacts by name"}),(0,K.jsxs)($,{children:[(0,K.jsx)(H,{name:"filter",placeholder:"Enter name...",type:"text",onChange:function(e){n((0,Y.i)(e.target.value))}}),(0,K.jsx)(N.RB5,{size:20})]})]})})}var Q,U,X,nn,en,rn=r(1413),tn=_.ZP.li(Q||(Q=(0,L.Z)(["\n  position: relative;\n  min-width: 260px;\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.sm})),on=_.ZP.span(U||(U=(0,L.Z)(["\n  font-weight: bold;\n"]))),sn=_.ZP.span(X||(X=(0,L.Z)(["\n  font-size: 14px;\n"]))),an=_.ZP.button(nn||(nn=(0,L.Z)(["\n  padding: ",";\n  position: absolute;\n  right: ",";\n  bottom: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n  border: none;\n  border-radius: ",";\n  background-color: transparent;\n  transition: background-color 250ms linear;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.bgc})),cn=r(6871);function un(n){var e=(0,b.I0)(),r=(0,b.v9)(y),t=r.status&&r.id===n.id;return(0,K.jsxs)(tn,{children:[(0,K.jsx)(on,{children:n.name}),(0,K.jsxs)(sn,{children:[(0,K.jsx)("span",{children:"Number: "}),n.number]}),(0,K.jsx)(an,{type:"button",onClick:function(){return e((0,z.GK)(n.id))},children:t?(0,K.jsx)(cn.a,{size:20}):(0,K.jsx)(N.VPh,{size:20})})]})}var dn,ln=_.ZP.p(en||(en=(0,L.Z)(["\n  text-align: center;\n  font-weight: bold;\n"])));function mn(n){var e=n.children;return(0,K.jsx)(ln,{children:e})}var pn,hn,fn,xn=_.ZP.ul(dn||(dn=(0,L.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3)}));function gn(){var n=(0,b.v9)(k),e=(0,b.v9)(v);return n.length||e?(0,K.jsx)(xn,{children:n.map((function(n){return(0,K.jsx)(un,(0,rn.Z)({},n),n.id)}))}):(0,K.jsx)(mn,{children:"No contacts found"})}var bn=_.ZP.h2(pn||(pn=(0,L.Z)(["\n  text-align: center;\n"]))),jn=_.ZP.div(hn||(hn=(0,L.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),Zn=_.ZP.button(fn||(fn=(0,L.Z)(["\n  min-width: 30px;\n  padding: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.bgc}));function vn(){var n=(0,b.I0)(),e=(0,b.v9)(Z),r=(0,b.v9)(v),t=(0,b.v9)(w);return(0,J.useEffect)((function(){n((0,z.yF)())}),[n]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(bn,{children:"Contacts"}),(0,K.jsx)(O,{}),(0,K.jsxs)(jn,{children:["Sort by name",(0,K.jsx)(Zn,{onClick:function(){return n((0,V.K6)())},children:(0,K.jsx)(N.i4I,{size:20})}),(0,K.jsx)(Zn,{onClick:function(){return n((0,V.C5)())},children:(0,K.jsx)(N.BwW,{size:20})})]}),r&&(0,K.jsx)(cn.a,{size:20}),e.length||r?(0,K.jsx)(gn,{}):(0,K.jsx)(mn,{children:"No contacts yet"}),t&&(0,K.jsx)("p",{children:t})]})}function yn(){return(0,K.jsxs)("div",{children:[(0,K.jsx)(h.q,{children:(0,K.jsx)("title",{children:"Contacts"})}),(0,K.jsx)(D,{}),(0,K.jsx)(vn,{})]})}}}]);
//# sourceMappingURL=782.dcd8a3f1.chunk.js.map
import{u as y,a7 as v,d3 as N,j as r,a as e,B as c}from"./index-5618be5b.js";import{q as b}from"./index-8412b10b.js";import{c as P,g as S,I as d,u as E}from"./index-8aa3005c.js";import{d as k}from"./index.modern-86234e85.js";import{P as q,S as t}from"./login-layout-bb0ffd3c.js";import{S as _}from"./index-c4aaed71.js";import{F as j}from"./index-2e436276.js";const O=()=>{const m=y(),p=v(),s=b.parse(p.search.substring(1));let a=null;if(s!=null&&s.token)try{a=k(s.token)}catch{a=null}const l=(a==null?void 0:a.email)||(s==null?void 0:s.email)||"",{register:i,handleSubmit:u,formState:{errors:n},setError:f}=P({defaultValues:{password:"",repeat_password:""}}),g=N(),h=E(),w=u(o=>{if(o.password!==o.repeat_password){f("repeat_password",{type:"manual",message:"Passwords do not match"},{shouldFocus:!0});return}g.mutate({token:s.token,password:o.password,email:l},{onSuccess:()=>{m("/login")},onError:x=>{h("Error",S(x),"error")}})});return r(q,{children:[e(_,{title:"Reset Password"}),e("div",{className:"flex flex-col items-center justify-center",children:a?e("form",{onSubmit:w,children:r("div",{className:"gap-y-large flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold",children:"Reset your password"}),r("div",{className:"gap-y-small flex flex-col items-center",children:[e(t,{placeholder:"Email",disabled:!0,readOnly:!0,value:l}),r("div",{children:[e(t,{placeholder:"Password (8+ characters)",type:"password",...i("password",{required:j.required("Password")})}),e(d,{errors:n,name:"password"})]}),r("div",{children:[e(t,{placeholder:"Confirm password",type:"password",...i("repeat_password",{required:"You must confirm your password"})}),e(d,{errors:n,name:"repeat_password"})]})]}),e(c,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Reset password"}),e("a",{href:"/login",className:"inter-small-regular text-grey-40 mt-xsmall",children:"Go back to sign in"})]})}):r("div",{className:"gap-y-large flex flex-col items-center",children:[r("div",{className:"gap-y-xsmall flex flex-col text-center",children:[e("h1",{className:"inter-xlarge-semibold text-[20px]",children:"Your reset link is invalid"}),e("p",{className:"text-grey-50 inter-base-regular",children:"Try resetting your password again."})]}),e("a",{href:"/login?reset-password=true",children:e(c,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Go to reset password"})})]})})]})};export{O as default};

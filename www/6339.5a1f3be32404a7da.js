"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6339],{6339:(y,s,n)=>{n.r(s),n.d(s,{DepressionPageModule:()=>U});var m=n(9808),a=n(3075),i=n(1805),Z=n(2788),e=n(1269),p=n(4008),q=n(1649);function g(t,r){if(1&t&&(e.TgZ(0,"div",51),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.alert)}}const d=[{path:"",component:(()=>{class t{constructor(o){this.router=o,this.phq1=new a.cw({q1:new a.NI("",a.kI.required),q2:new a.NI("",a.kI.required),q3:new a.NI("",a.kI.required),q4:new a.NI("",a.kI.required),q5:new a.NI("",a.kI.required),q6:new a.NI("",a.kI.required),q7:new a.NI("",a.kI.required),q8:new a.NI("",a.kI.required),q9:new a.NI("",a.kI.required),q10:new a.NI("",a.kI.required)}),this.alert="",this.clear=function(){this.phq1.reset()}}ngOnInit(){}onSubmit(){this.phq1.invalid?(this.clear(),this.alert="Please answer every question before submitting",this.content.scrollToTop(1500)):(sessionStorage.setItem("phq1",JSON.stringify(this.phq1.value)),this.clear(),this.router.navigateByUrl("main-patients/survey-page"))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(Z.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-depression"]],viewQuery:function(o,l){if(1&o&&e.Gf(i.W2,5),2&o){let u;e.iGM(u=e.CRH())&&(l.content=u.first)}},decls:199,vars:3,consts:[[3,"scrollEvents"],[1,"header"],[1,"alert-div"],["class","alert",4,"ngIf"],[1,"wrapper"],[1,"form",3,"formGroup","ngSubmit"],[1,"statementWrapper"],[1,"question"],["type","radio","name","q1","value","1","formControlName","q1"],["type","radio","name","q1","value","2","formControlName","q1"],["type","radio","name","q1","value","3","formControlName","q1"],["type","radio","name","q1","value","4","formControlName","q1"],["type","radio","name","q2","value","1","formControlName","q2"],["type","radio","name","q2","value","2","formControlName","q2"],["type","radio","name","q2","value","3","formControlName","q2"],["type","radio","name","q2","value","4","formControlName","q2"],["type","radio","name","q3","value","1","formControlName","q3"],["type","radio","name","q3","value","2","formControlName","q3"],["type","radio","name","q3","value","3","formControlName","q3"],["type","radio","name","q3","value","4","formControlName","q3"],["type","radio","name","q4","value","1","formControlName","q4"],["type","radio","name","q4","value","2","formControlName","q4"],["type","radio","name","q4","value","3","formControlName","q4"],["type","radio","name","q4","value","4","formControlName","q4"],["type","radio","name","q5","value","1","formControlName","q5"],["type","radio","name","q5","value","2","formControlName","q5"],["type","radio","name","q5","value","3","formControlName","q5"],["type","radio","name","q5","value","4","formControlName","q5"],["type","radio","name","q6","value","1","formControlName","q6"],["type","radio","name","q6","value","2","formControlName","q6"],["type","radio","name","q6","value","3","formControlName","q6"],["type","radio","name","q6","value","4","formControlName","q6"],["type","radio","name","q7","value","1","formControlName","q7"],["type","radio","name","q7","value","2","formControlName","q7"],["type","radio","name","q7","value","3","formControlName","q7"],["type","radio","name","q7","value","4","formControlName","q7"],["type","radio","name","q8","value","1","formControlName","q8"],["type","radio","name","q8","value","2","formControlName","q8"],["type","radio","name","q8","value","3","formControlName","q8"],["type","radio","name","q8","value","4","formControlName","q8"],["type","radio","name","q9","value","1","formControlName","q9"],["type","radio","name","q9","value","2","formControlName","q9"],["type","radio","name","q9","value","3","formControlName","q9"],["type","radio","name","q9","value","4","formControlName","q9"],["type","radio","name","q10","value","1","formControlName","q10"],["type","radio","name","q10","value","2","formControlName","q10"],["type","radio","name","q10","value","3","formControlName","q10"],["type","radio","name","q10","value","4","formControlName","q10"],[1,"buttons"],["color","light",1,"clear",3,"click"],[1,"submit",3,"click"],[1,"alert"]],template:function(o,l){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e._UZ(2,"app-back-button"),e.qZA(),e.qZA(),e.TgZ(3,"ion-content",0),e.TgZ(4,"h1",1),e._uU(5,"Tell us how your feeling today"),e.qZA(),e.TgZ(6,"h4"),e._uU(7,"Over the last 2 weeks, how often have you been bothered by the following problems?"),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"div",2),e.YNc(10,g,2,1,"div",3),e.qZA(),e.qZA(),e.TgZ(11,"div",4),e.TgZ(12,"form",5),e.NdJ("ngSubmit",function(){return l.onSubmit()}),e.TgZ(13,"div",6),e.TgZ(14,"h5",7),e._uU(15,"Little interest or pleasure in doing things"),e.qZA(),e._UZ(16,"input",8),e.TgZ(17,"label"),e._uU(18,"0 - Not at all"),e.qZA(),e._UZ(19,"br"),e._UZ(20,"input",9),e.TgZ(21,"label"),e._uU(22,"1 - Several days"),e.qZA(),e._UZ(23,"br"),e._UZ(24,"input",10),e.TgZ(25,"label"),e._uU(26,"2 - More than half the days"),e.qZA(),e._UZ(27,"br"),e._UZ(28,"input",11),e.TgZ(29,"label"),e._uU(30,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(31,"div",6),e.TgZ(32,"h5",7),e._uU(33,"Feeling down, depressed or hopeless"),e.qZA(),e._UZ(34,"input",12),e.TgZ(35,"label"),e._uU(36,"0 - Not at all"),e.qZA(),e._UZ(37,"br"),e._UZ(38,"input",13),e.TgZ(39,"label"),e._uU(40,"1 - Several days"),e.qZA(),e._UZ(41,"br"),e._UZ(42,"input",14),e.TgZ(43,"label"),e._uU(44,"2 - More than half the days"),e.qZA(),e._UZ(45,"br"),e._UZ(46,"input",15),e.TgZ(47,"label"),e._uU(48,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(49,"div",6),e.TgZ(50,"h5",7),e._uU(51,"Trouble falling or staying asleep, or sleeping too much"),e.qZA(),e._UZ(52,"input",16),e.TgZ(53,"label"),e._uU(54,"0 - Not at all"),e.qZA(),e._UZ(55,"br"),e._UZ(56,"input",17),e.TgZ(57,"label"),e._uU(58,"1 - Several days"),e.qZA(),e._UZ(59,"br"),e._UZ(60,"input",18),e.TgZ(61,"label"),e._uU(62,"2 - More than half the days"),e.qZA(),e._UZ(63,"br"),e._UZ(64,"input",19),e.TgZ(65,"label"),e._uU(66,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(67,"div",6),e.TgZ(68,"h5",7),e._uU(69,"Feeling tired or having little energy"),e.qZA(),e._UZ(70,"input",20),e.TgZ(71,"label"),e._uU(72,"0 - Not at all"),e.qZA(),e._UZ(73,"br"),e._UZ(74,"input",21),e.TgZ(75,"label"),e._uU(76,"1 - Several days"),e.qZA(),e._UZ(77,"br"),e._UZ(78,"input",22),e.TgZ(79,"label"),e._uU(80,"2 - More than half the days"),e.qZA(),e._UZ(81,"br"),e._UZ(82,"input",23),e.TgZ(83,"label"),e._uU(84,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(85,"div",6),e.TgZ(86,"h5",7),e._uU(87,"Poor appetite or overeating"),e.qZA(),e._UZ(88,"input",24),e.TgZ(89,"label"),e._uU(90,"0 - Not at all"),e.qZA(),e._UZ(91,"br"),e._UZ(92,"input",25),e.TgZ(93,"label"),e._uU(94,"1 - Several days"),e.qZA(),e._UZ(95,"br"),e._UZ(96,"input",26),e.TgZ(97,"label"),e._uU(98,"2 - More than half the days"),e.qZA(),e._UZ(99,"br"),e._UZ(100,"input",27),e.TgZ(101,"label"),e._uU(102,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(103,"div",6),e.TgZ(104,"h5",7),e._uU(105,"Feeling bad about yourself \u2013 or that you are a failure, or have let yourself or your family down"),e.qZA(),e._UZ(106,"input",28),e.TgZ(107,"label"),e._uU(108,"0 - Not at all"),e.qZA(),e._UZ(109,"br"),e._UZ(110,"input",29),e.TgZ(111,"label"),e._uU(112,"1 - Several days"),e.qZA(),e._UZ(113,"br"),e._UZ(114,"input",30),e.TgZ(115,"label"),e._uU(116,"2 - More than half the days"),e.qZA(),e._UZ(117,"br"),e._UZ(118,"input",31),e.TgZ(119,"label"),e._uU(120,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(121,"div",6),e.TgZ(122,"h5",7),e._uU(123,"Trouble concentrating on things, such as reading the newspaper or watching television"),e.qZA(),e._UZ(124,"input",32),e.TgZ(125,"label"),e._uU(126,"0 - Not at all"),e.qZA(),e._UZ(127,"br"),e._UZ(128,"input",33),e.TgZ(129,"label"),e._uU(130,"1 - Several days"),e.qZA(),e._UZ(131,"br"),e._UZ(132,"input",34),e.TgZ(133,"label"),e._uU(134,"2 - More than half the days"),e.qZA(),e._UZ(135,"br"),e._UZ(136,"input",35),e.TgZ(137,"label"),e._uU(138,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(139,"div",6),e.TgZ(140,"h5",7),e._uU(141,"Moving or speaking so slowly that other people could have noticed. Or the opposite \u2013 being so fidgety of restless that you have been moving around a lot more than usual"),e.qZA(),e._UZ(142,"input",36),e.TgZ(143,"label"),e._uU(144,"0 - Not at all"),e.qZA(),e._UZ(145,"br"),e._UZ(146,"input",37),e.TgZ(147,"label"),e._uU(148,"1 - Several days"),e.qZA(),e._UZ(149,"br"),e._UZ(150,"input",38),e.TgZ(151,"label"),e._uU(152,"2 - More than half the days"),e.qZA(),e._UZ(153,"br"),e._UZ(154,"input",39),e.TgZ(155,"label"),e._uU(156,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(157,"div",6),e.TgZ(158,"h5",7),e._uU(159,"Thoughts that you would be better off dead, or of hurting yourself"),e.qZA(),e._UZ(160,"input",40),e.TgZ(161,"label"),e._uU(162,"0 - Not at all"),e.qZA(),e._UZ(163,"br"),e._UZ(164,"input",41),e.TgZ(165,"label"),e._uU(166,"1 - Several days"),e.qZA(),e._UZ(167,"br"),e._UZ(168,"input",42),e.TgZ(169,"label"),e._uU(170,"2 - More than half the days"),e.qZA(),e._UZ(171,"br"),e._UZ(172,"input",43),e.TgZ(173,"label"),e._uU(174,"3 - Nearly every day"),e.qZA(),e.qZA(),e.TgZ(175,"div",6),e.TgZ(176,"h5",7),e._uU(177,"If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?"),e.qZA(),e._UZ(178,"input",44),e.TgZ(179,"label"),e._uU(180,"0 - Not difficult at all"),e.qZA(),e._UZ(181,"br"),e._UZ(182,"input",45),e.TgZ(183,"label"),e._uU(184,"1 - Somewhat difficult"),e.qZA(),e._UZ(185,"br"),e._UZ(186,"input",46),e.TgZ(187,"label"),e._uU(188,"2 - Very difficult"),e.qZA(),e._UZ(189,"br"),e._UZ(190,"input",47),e.TgZ(191,"label"),e._uU(192,"3 - Extremely difficult"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(193,"div",48),e.TgZ(194,"ion-button",49),e.NdJ("click",function(){return l.clear()}),e._uU(195,"Clear"),e.qZA(),e.TgZ(196,"ion-button",50),e.NdJ("click",function(){return l.onSubmit()}),e._uU(197,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(198,"app-tab-bar")),2&o&&(e.xp6(3),e.Q6J("scrollEvents",!0),e.xp6(7),e.Q6J("ngIf",l.alert),e.xp6(2),e.Q6J("formGroup",l.phq1))},directives:[i.Gu,i.sr,p.W,i.W2,m.O5,a._Y,a.JL,a.sg,a._,a.Fj,a.JJ,a.u,i.YG,q.p],styles:["ion-content[_ngcontent-%COMP%]{text-align:center;margin:2%}h1[_ngcontent-%COMP%]{font-weight:bolder;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;color:#000;padding:10px}h4[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;padding-left:8%;padding-right:8%;color:#000}.question[_ngcontent-%COMP%]{font-size:larger}label[_ngcontent-%COMP%]{font-size:large}img[_ngcontent-%COMP%]{transform:scale(.1)}input[_ngcontent-%COMP%]{transform:scale(2);margin:15px}.wrapper[_ngcontent-%COMP%]{padding:10px;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;color:#000}ion-button[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif}.statementWrapper[_ngcontent-%COMP%]{margin:5%}.statementWrapper[_ngcontent-%COMP%]{text-align:left}.buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:5%;width:25%}.alert-div[_ngcontent-%COMP%]{padding:1%}.alert[_ngcontent-%COMP%]{color:#ba3939;background:#ffe0e0;border:1px solid #a33a3a;font-family:Verdana,Geneva,Tahoma,sans-serif;margin:2%;padding:5%;text-align:center}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[Z.Bz.forChild(d)],Z.Bz]}),t})();var _=n(5642);let U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,a.u5,a.UX,i.Pc,f,_.K]]}),t})()}}]);
(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),c=a.n(s),i=a(1),u=a(2),l=a(4),o=a(3),h=a(5),m=a(8);var d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a+=1){var r=Object(m.a)(t[a],3),n=r[0],s=r[1],c=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[c])return e[n]}return null};var v=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(n.a.Component),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();d(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=d(r.squares),c=a.map((function(e,a){var r=a?"Go to move #".concat(a):"Go to game start";return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return t.jumpYo(a)}},r))}));return e=s?"Winner: ".concat(s):"Next player: ".concat(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(b,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,c)))}}]),t}(n.a.Component);a(14);c.a.render(n.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0217f92e.chunk.js.map
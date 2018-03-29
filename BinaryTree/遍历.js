//前序
function preorder(node){
			if(node){
				divlist.push(node);
				preorder(node.firstElementChild);
				preorder(node.lastElementChilld);
			}
		}
//中序
function midorder(node){
			if(node){
				midorder(node.firstElementChild);
				divlist.push(node);
				midorder(node.lastElementChilld);
			}
		}
//
function lastorder(node){
			if(node){
				lastorder(node.firstElementChild);
				lastorder(node.lastElementChilld);
				divlist(node);
			}
		}
